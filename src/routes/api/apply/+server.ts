import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import nodemailer from 'nodemailer';
import {
	AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY,
	AWS_REGION,
	SMTP_HOST,
	SMTP_PORT,
	NOTIFICATION_EMAIL
} from '$env/static/private';

const BUCKET = 'aep-uploads';
const TABLE = 'aep-job-applications';
const ALLOWED_MIME_TYPES = [
	'application/pdf',
	'application/msword',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_FILENAME_LENGTH = 120;

function makeS3Client() {
	return new S3Client({
		region: AWS_REGION,
		credentials: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY }
	});
}

function makeDynamo() {
	const client = new DynamoDBClient({
		region: AWS_REGION,
		credentials: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY }
	});
	return DynamoDBDocumentClient.from(client);
}

function sanitizeFilename(rawName: string): string {
	const fallback = 'file';
	const normalized = rawName.normalize('NFKC').trim();
	const noPathSeparators = normalized.replace(/[\\/]+/g, '-');
	const noControlChars = noPathSeparators.replace(/[\u0000-\u001f\u007f]/g, '');
	const noQuotes = noControlChars.replace(/"/g, '');
	const safeCharsOnly = noQuotes
		.replace(/[^A-Za-z0-9._-]+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^[._-]+|[._-]+$/g, '');

	if (!safeCharsOnly) {
		return fallback;
	}

	const lastDot = safeCharsOnly.lastIndexOf('.');
	if (lastDot > 0 && lastDot < safeCharsOnly.length - 1) {
		const base = safeCharsOnly.slice(0, lastDot);
		const ext = safeCharsOnly.slice(lastDot);
		const maxBaseLength = Math.max(1, MAX_FILENAME_LENGTH - ext.length);
		return `${base.slice(0, maxBaseLength)}${ext}`;
	}

	return safeCharsOnly.slice(0, MAX_FILENAME_LENGTH);
}

function htmlEscape(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

async function uploadToS3(s3: S3Client, folder: string, id: string, file: File): Promise<string> {
	const safeFilename = sanitizeFilename(file.name);
	const key = `${folder}/${Date.now()}-${id}-${safeFilename}`;
	const body = Buffer.from(await file.arrayBuffer());
	await s3.send(
		new PutObjectCommand({
			Bucket: BUCKET,
			Key: key,
			Body: body,
			ContentType: file.type,
			ContentDisposition: `attachment; filename="${safeFilename}"`
		})
	);
	return key;
}

// Pre-signed URLs expire after 7 days — long enough to review an application
async function presignUrl(s3: S3Client, key: string): Promise<string> {
	return getSignedUrl(s3, new GetObjectCommand({ Bucket: BUCKET, Key: key }), {
		expiresIn: 7 * 24 * 60 * 60
	});
}

function field(label: string, value: string) {
	const safeLabel = htmlEscape(label);
	const safeValue = htmlEscape(value);
	return `
		<tr>
			<td style="padding:12px 0;border-bottom:1px solid #e7e5e4;vertical-align:top">
				<span style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#78716c;margin-bottom:3px">${safeLabel}</span>
				<span style="font-size:15px;color:#1c1917">${safeValue}</span>
			</td>
		</tr>`;
}

function downloadButton(label: string, href: string) {
	const safeLabel = htmlEscape(label);
	const safeHref = htmlEscape(href);
	return `
		<a href="${safeHref}" style="display:inline-block;margin-top:6px;padding:8px 18px;background:#ab2329;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;border-radius:6px;font-family:Arial,Helvetica,sans-serif">
			${safeLabel} &darr;
		</a>`;
}

interface EmailData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	comments: string;
	resumeName: string;
	resumeUrl: string;
	coverLetterName: string | null;
	coverLetterUrl: string | null;
	submittedAt: string;
}

function buildEmail(d: EmailData): string {
	const safe = {
		email: htmlEscape(d.email),
		phone: d.phone,
		comments: htmlEscape(d.comments),
		resumeName: htmlEscape(d.resumeName),
		coverLetterName: d.coverLetterName ? htmlEscape(d.coverLetterName) : null,
		coverLetterUrl: d.coverLetterUrl,
		submittedAt: htmlEscape(d.submittedAt)
	};
	const safeMailtoHref = htmlEscape(`mailto:${d.email}`);

	return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#f5f5f4;font-family:Arial,Helvetica,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5f5f4;padding:32px 16px">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%">

	<!-- Header -->
	<tr>
		<td style="background:#000000;padding:24px 32px;border-radius:12px 12px 0 0">
			<img src="https://www.acceleratedep.com/images/brand/aep-logo-white.svg"
				alt="Accelerated Equity Plans" height="32"
				style="display:block;height:32px;border:0">
		</td>
	</tr>

	<!-- Red accent bar -->
	<tr>
		<td style="background:#ab2329;height:4px;font-size:0;line-height:0">&nbsp;</td>
	</tr>

	<!-- Body -->
	<tr>
		<td style="background:#ffffff;padding:36px 32px 40px;border-radius:0 0 12px 12px">

			<h1 style="margin:0 0 4px;font-size:22px;font-weight:700;color:#0c0a09;font-family:Arial,Helvetica,sans-serif">
				New Job Application
			</h1>
			<p style="margin:0 0 28px;font-size:13px;color:#78716c;font-family:Arial,Helvetica,sans-serif">
				Submitted ${safe.submittedAt} MT
			</p>

			<!-- Contact info -->
			<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
				${field('Applicant', `${d.firstName} ${d.lastName}`)}
				<tr>
					<td style="padding:12px 0;border-bottom:1px solid #e7e5e4;vertical-align:top">
						<span style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#78716c;margin-bottom:3px">${htmlEscape('Email')}</span>
						<a href="${safeMailtoHref}" style="font-size:15px;color:#ab2329;text-decoration:none">${safe.email}</a>
					</td>
				</tr>
				${field('Phone', safe.phone || '—')}
			</table>

			<!-- Resume -->
			<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:4px">
				<tr>
					<td style="padding:12px 0;border-bottom:1px solid #e7e5e4">
						<span style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#78716c;margin-bottom:3px">Resume</span>
						<span style="font-size:15px;color:#1c1917">${safe.resumeName}</span>
						${downloadButton('Download Resume', d.resumeUrl)}
					</td>
				</tr>
				${
					safe.coverLetterUrl && safe.coverLetterName
						? `
				<tr>
					<td style="padding:12px 0;border-bottom:1px solid #e7e5e4">
						<span style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#78716c;margin-bottom:3px">Cover Letter</span>
						<span style="font-size:15px;color:#1c1917">${safe.coverLetterName}</span>
						${downloadButton('Download Cover Letter', safe.coverLetterUrl)}
					</td>
				</tr>`
						: ''
				}
			</table>

			${
				safe.comments
					? `
			<!-- Additional details -->
			<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:4px">
				<tr>
					<td style="padding:16px 0 0">
						<span style="display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#78716c;margin-bottom:8px">Additional Details</span>
						<p style="margin:0;font-size:15px;color:#1c1917;white-space:pre-wrap;background:#f5f5f4;padding:16px;border-radius:8px;border-left:3px solid #ab2329;line-height:1.6">${safe.comments}</p>
					</td>
				</tr>
			</table>`
					: ''
			}

			<p style="margin:28px 0 0;font-size:12px;color:#a8a29e;font-family:Arial,Helvetica,sans-serif">
				File download links expire after 7 days.
			</p>
		</td>
	</tr>

	<!-- Footer -->
	<tr>
		<td style="padding:20px 32px;text-align:center">
			<p style="margin:0;font-size:12px;color:#a8a29e;font-family:Arial,Helvetica,sans-serif">
				<a href="https://www.acceleratedep.com" style="color:#78716c;text-decoration:none">acceleratedep.com</a>
				&nbsp;&middot;&nbsp; Accelerated Equity Plans
			</p>
		</td>
	</tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const formData = await request.formData();

		const firstName = (formData.get('firstName') as string)?.trim();
		const lastName = (formData.get('lastName') as string)?.trim();
		const email = (formData.get('email') as string)?.trim();
		const phone = ((formData.get('phone') as string) ?? '').trim();
		const comments = ((formData.get('comments') as string) ?? '').trim();
		const resume = formData.get('resume') as File | null;
		const coverLetter = formData.get('coverLetter') as File | null;

		// Validate required text fields
		if (!firstName || !lastName || !email) {
			return json(
				{ success: false, error: 'Please fill in all required fields.' },
				{ status: 400 }
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json(
				{ success: false, error: 'Please enter a valid email address.' },
				{ status: 400 }
			);
		}

		// Validate resume
		if (!resume || resume.size === 0) {
			return json({ success: false, error: 'A resume is required.' }, { status: 400 });
		}
		if (!ALLOWED_MIME_TYPES.includes(resume.type)) {
			return json(
				{ success: false, error: 'Resume must be a PDF or Word document (.pdf, .doc, .docx).' },
				{ status: 400 }
			);
		}
		if (resume.size > MAX_FILE_SIZE) {
			return json({ success: false, error: 'Resume must be smaller than 10 MB.' }, { status: 400 });
		}

		// Validate optional cover letter
		if (coverLetter && coverLetter.size > 0) {
			if (!ALLOWED_MIME_TYPES.includes(coverLetter.type)) {
				return json(
					{
						success: false,
						error: 'Cover letter must be a PDF or Word document (.pdf, .doc, .docx).'
					},
					{ status: 400 }
				);
			}
			if (coverLetter.size > MAX_FILE_SIZE) {
				return json(
					{ success: false, error: 'Cover letter must be smaller than 10 MB.' },
					{ status: 400 }
				);
			}
		}

		const id = crypto.randomUUID();
		const createdAt = new Date().toISOString();
		const s3 = makeS3Client();

		// Upload resume
		const resumeKey = await uploadToS3(s3, 'resumes', id, resume);

		// Upload cover letter if provided
		let coverLetterKey: string | null = null;
		if (coverLetter && coverLetter.size > 0) {
			coverLetterKey = await uploadToS3(s3, 'cover-letters', id, coverLetter);
		}

		// Generate pre-signed download URLs for the email (expire in 7 days)
		const resumeUrl = await presignUrl(s3, resumeKey);
		const coverLetterUrl = coverLetterKey ? await presignUrl(s3, coverLetterKey) : null;

		// Save to DynamoDB (store keys, not presigned URLs — they expire)
		const dynamo = makeDynamo();
		await dynamo.send(
			new PutCommand({
				TableName: TABLE,
				Item: {
					id,
					createdAt,
					firstName,
					lastName,
					email,
					phone: phone || null,
					comments: comments || null,
					resumeKey,
					resumeFileName: resume.name,
					coverLetterKey,
					coverLetterFileName: coverLetter?.name ?? null
				}
			})
		);

		// Send notification email
		const transporter = nodemailer.createTransport({
			host: SMTP_HOST,
			port: parseInt(SMTP_PORT),
			secure: false
		});

		const submittedAt = new Date(createdAt).toLocaleString('en-US', {
			timeZone: 'America/Denver',
			dateStyle: 'long',
			timeStyle: 'short'
		});

		await transporter.sendMail({
			from: '"AEP Careers" <noreply@acceleratedep.com>',
			to: NOTIFICATION_EMAIL,
			subject: `New Job Application — ${firstName} ${lastName}`,
			html: buildEmail({
				firstName,
				lastName,
				email,
				phone,
				comments,
				resumeName: resume.name,
				resumeUrl,
				coverLetterName: coverLetter?.name ?? null,
				coverLetterUrl,
				submittedAt
			})
		});

		return json({ success: true });
	} catch (error) {
		console.error('Job application submission error:', error);
		return json(
			{ success: false, error: 'An unexpected error occurred. Please try again later.' },
			{ status: 500 }
		);
	}
};
