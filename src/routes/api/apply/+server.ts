import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { JOB_LISTING_API_KEY, TURNSTILE_SECRET_KEY } from '$env/static/private';

const JOB_LISTING_SUBMISSIONS_URL = 'https://joblisting.app/api/submissions';
const JOB_LISTING_ID = '9f7eefc1-915d-4600-b9d9-48f85fa99af1';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const RESUME_ALLOWED_MIME_TYPES = [
	'application/pdf',
	'application/msword',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const COVER_LETTER_ALLOWED_MIME_TYPES = [
	'application/pdf',
	'application/msword',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

type SubmissionField = {
	name: string;
	label: string;
	type: 'text' | 'email' | 'phone' | 'file';
};

interface TurnstileVerifyResponse {
	success: boolean;
	'error-codes'?: string[];
}

async function verifyTurnstileToken(token: string, remoteIp?: string): Promise<boolean> {
	try {
		const payload = new URLSearchParams({
			secret: TURNSTILE_SECRET_KEY,
			response: token
		});
		if (remoteIp) {
			payload.set('remoteip', remoteIp);
		}

		const response = await fetch(TURNSTILE_VERIFY_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: payload
		});

		if (!response.ok) {
			return false;
		}

		const data = (await response.json()) as TurnstileVerifyResponse;
		return data.success === true;
	} catch {
		return false;
	}
}

function validateFile(
	file: File | null,
	options: { required: boolean; allowedMimeTypes: string[]; requiredError: string; typeError: string }
): string | null {
	if (!file || file.size === 0) {
		return options.required ? options.requiredError : null;
	}

	if (!options.allowedMimeTypes.includes(file.type)) {
		return options.typeError;
	}

	if (file.size > MAX_FILE_SIZE) {
		return 'Files must be smaller than 10 MB.';
	}

	return null;
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const formData = await request.formData();

		const firstNameField = formData.get('firstName');
		const lastNameField = formData.get('lastName');
		const emailField = formData.get('email');
		const phoneField = formData.get('phone');
		const commentsField = formData.get('comments');
		const resumeField = formData.get('resume');
		const coverLetterField = formData.get('coverLetter');
		const turnstileField = formData.get('turnstileToken') ?? formData.get('cf-turnstile-response');

		const firstName = typeof firstNameField === 'string' ? firstNameField.trim() : '';
		const lastName = typeof lastNameField === 'string' ? lastNameField.trim() : '';
		const email = typeof emailField === 'string' ? emailField.trim() : '';
		const phone = typeof phoneField === 'string' ? phoneField.trim() : '';
		const comments = typeof commentsField === 'string' ? commentsField.trim() : '';
		const resume = resumeField instanceof File ? resumeField : null;
		const coverLetter = coverLetterField instanceof File ? coverLetterField : null;
		const turnstileToken = typeof turnstileField === 'string' ? turnstileField.trim() : '';

		if (!TURNSTILE_SECRET_KEY) {
			console.error('TURNSTILE_SECRET_KEY is not configured.');
			return json(
				{ success: false, error: 'Form is temporarily unavailable. Please try again later.' },
				{ status: 500 }
			);
		}
		if (!JOB_LISTING_API_KEY) {
			console.error('JOB_LISTING_API_KEY is not configured.');
			return json(
				{ success: false, error: 'Form is temporarily unavailable. Please try again later.' },
				{ status: 500 }
			);
		}

		if (!turnstileToken) {
			return json(
				{ success: false, error: 'Please complete the captcha before submitting.' },
				{ status: 400 }
			);
		}

		const forwardedFor = request.headers.get('x-forwarded-for');
		const remoteIp = forwardedFor?.split(',')[0]?.trim();
		const isCaptchaValid = await verifyTurnstileToken(turnstileToken, remoteIp);
		if (!isCaptchaValid) {
			return json(
				{ success: false, error: 'Captcha verification failed. Please try again.' },
				{ status: 400 }
			);
		}

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

		const resumeError = validateFile(resume, {
			required: true,
			allowedMimeTypes: RESUME_ALLOWED_MIME_TYPES,
			requiredError: 'A resume is required.',
			typeError: 'Resume must be a PDF or Word document (.pdf, .doc, .docx).'
		});
		if (resumeError) {
			return json({ success: false, error: resumeError }, { status: 400 });
		}
		if (!resume) {
			return json({ success: false, error: 'A resume is required.' }, { status: 400 });
		}

		if (coverLetter && coverLetter.size > 0) {
			const coverLetterError = validateFile(coverLetter, {
				required: false,
				allowedMimeTypes: COVER_LETTER_ALLOWED_MIME_TYPES,
				requiredError: '',
				typeError: 'Cover letter must be a PDF or Word document (.pdf, .doc, .docx).'
			});
			if (coverLetterError) {
				return json({ success: false, error: coverLetterError }, { status: 400 });
			}
		}

		const fields: SubmissionField[] = [
			{ name: 'full_name', label: 'Full Name', type: 'text' },
			{ name: 'email', label: 'Email', type: 'email' },
			{ name: 'phone', label: 'Phone', type: 'phone' },
			{ name: 'resume', label: 'Resume', type: 'file' }
		];

		if (coverLetter && coverLetter.size > 0) {
			fields.push({ name: 'cover_letter', label: 'Cover Letter', type: 'file' });
		}

		if (comments) {
			fields.push({ name: 'comments', label: 'Additional Details', type: 'text' });
		}

		const outboundFormData = new FormData();
		outboundFormData.set('job_listing_id', JOB_LISTING_ID);
		outboundFormData.set('fields', JSON.stringify(fields));
		outboundFormData.set('full_name', `${firstName} ${lastName}`.trim());
		outboundFormData.set('email', email);
		outboundFormData.set('phone', phone);
		outboundFormData.set('resume', resume, resume.name);

		if (coverLetter && coverLetter.size > 0) {
			outboundFormData.set('cover_letter', coverLetter, coverLetter.name);
		}

		if (comments) {
			outboundFormData.set('comments', comments);
		}

		const submissionResponse = await fetch(JOB_LISTING_SUBMISSIONS_URL, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${JOB_LISTING_API_KEY}`
			},
			body: outboundFormData
		});

		if (!submissionResponse.ok) {
			let upstreamDetails = '';
			try {
				upstreamDetails = await submissionResponse.text();
			} catch {
				upstreamDetails = '';
			}

			console.error('Job listing submission failed:', {
				status: submissionResponse.status,
				details: upstreamDetails
			});

			return json(
				{
					success: false,
					error: 'Application could not be submitted right now. Please try again shortly.'
				},
				{ status: 502 }
			);
		}

		return json({ success: true });
	} catch (error) {
		console.error('Job application submission error:', error);
		return json(
			{ success: false, error: 'An unexpected error occurred. Please try again later.' },
			{ status: 500 }
		);
	}
};
