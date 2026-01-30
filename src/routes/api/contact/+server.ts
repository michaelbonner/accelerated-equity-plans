import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ZOHO_CONTACT_FORM_URL } from '$env/static/private';

interface ContactFormData {
	Name_First: string;
	Name_Last: string;
	Email: string;
	PhoneNumber_countrycode?: string;
	MultiLine: string;
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const formData = await request.formData();

		const data: ContactFormData = {
			Name_First: formData.get('firstName') as string,
			Name_Last: formData.get('lastName') as string,
			Email: formData.get('email') as string,
			PhoneNumber_countrycode: (formData.get('phone') as string) || '',
			MultiLine: formData.get('message') as string
		};

		const submitFormData = new FormData();
		submitFormData.append('Name_First', data.Name_First);
		submitFormData.append('Name_Last', data.Name_Last);
		submitFormData.append('Email', data.Email);
		submitFormData.append('PhoneNumber_countrycode', data.PhoneNumber_countrycode || '');
		submitFormData.append('MultiLine', data.MultiLine);

		// Validate required fields
		if (!data.Name_First || !data.Name_Last || !data.Email || !data.MultiLine) {
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
		if (!emailRegex.test(data.Email)) {
			return json(
				{
					success: false,
					errors: [{ message: 'Please enter a valid email address' }]
				},
				{ status: 400 }
			);
		}

		const response = await fetch(ZOHO_CONTACT_FORM_URL, {
			method: 'POST',
			body: submitFormData
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
						message: 'An unexpected error occurred. Please try again later.'
					}
				]
			},
			{ status: 500 }
		);
	}
};
