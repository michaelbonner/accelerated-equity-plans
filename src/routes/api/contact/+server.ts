import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ZOHO_WEBFORM_ID, ZOHO_WEBFORM_KEY, ZOHO_WEBFORM_URL } from '$env/static/private';

interface ContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	message: string;
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const formData = await request.formData();

		const data: ContactFormData = {
			firstName: formData.get('firstName') as string,
			lastName: formData.get('lastName') as string,
			email: formData.get('email') as string,
			phone: (formData.get('phone') as string) || '',
			message: formData.get('message') as string
		};

		// Validate required fields
		if (!data.firstName || !data.lastName || !data.email || !data.message) {
			return json(
				{
					success: false,
					errors: [{ message: 'Please fill in all required fields' }]
				},
				{ status: 400 }
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.email)) {
			return json(
				{
					success: false,
					errors: [{ message: 'Please enter a valid email address' }]
				},
				{ status: 400 }
			);
		}

		// Submit to Zoho Web Form
		const zohoFormData = new URLSearchParams({
			xnQsjsdp: ZOHO_WEBFORM_ID,
			xmIwtLD: ZOHO_WEBFORM_KEY,
			actionType: 'TGVhZHM=', // Base64 encoded "Leads"
			'First Name': data.firstName,
			'Last Name': data.lastName,
			Email: data.email,
			Phone: data.phone,
			Description: data.message
		});

		const response = await fetch(ZOHO_WEBFORM_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: zohoFormData.toString()
		});

		// Zoho web forms typically return a redirect or HTML response on success
		// A 200 status generally indicates the submission was accepted
		if (!response.ok) {
			console.error('Zoho form submission failed:', response.status, await response.text());
			throw new Error('Failed to submit to CRM');
		}

		return json({
			success: true,
			message: 'Thank you for contacting us! We will be in touch soon.'
		});
	} catch (error) {
		console.error('Contact form submission error:', error);

		return json(
			{
				success: false,
				errors: [
					{
						message:
							error instanceof Error
								? error.message
								: 'An unexpected error occurred. Please try again.'
					}
				]
			},
			{ status: 500 }
		);
	}
};
