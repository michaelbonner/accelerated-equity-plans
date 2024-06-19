<script lang="ts">
	import { styles } from '$lib/styles';

	let submitted = false;
	let isSubmitting = false;

	const handleSubmit = async (event: SubmitEvent) => {
		const formData = new FormData(event.target as HTMLFormElement);

		fetch('https://formspree.io/f/xleqyybe', {
			method: 'POST',
			body: formData,
			headers: {
				Accept: 'application/json'
			}
		})
			.then((response) => {
				if (response.ok) {
					submitted = true;
					// form.reset();
				} else {
					response.json().then((data) => {
						console.error(data);
						if (Object.hasOwn(data, 'errors')) {
							errorMessage = data['errors'].map((error: any) => error['message']).join(', ');
						} else {
							errorMessage = 'Oops! There was a problem submitting your form';
						}
					});
				}

				try {
					window.gtag('event', 'form_submit', {
						form_name: 'lead-form'
					});
				} catch (error) {
					console.error('Error sending form submission event to Google Analytics');
					console.error(error);
				}
			})
			.catch((error) => {
				console.error(error);
				errorMessage = 'Oops! There was a problem submitting your form';
			});
	};

	let errors: any = {};
	let errorMessage = '';
	let touched: any = {};

	const fields = [
		{
			name: 'firstName',
			label: 'First Name',
			type: 'text',
			required: true,
			autocomplete: 'given-name'
		},
		{
			name: 'lastName',
			label: 'Last Name',
			type: 'text',
			required: true,
			autocomplete: 'family-name'
		},
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			required: true,
			autocomplete: 'email'
		},
		{
			name: 'phone',
			label: 'Phone Number',
			type: 'text',
			required: false,
			autocomplete: 'tel'
		},
		{
			name: 'company',
			label: 'Company',
			type: 'text',
			required: false,
			autocomplete: 'organization'
		},
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: false,
			autocomplete: 'organization-title'
		},
		{
			name: 'interested_services',
			label: 'What service are you interested in?',
			type: 'select',
			required: false,
			options: [
				'Equity Plan Administration',
				'Vendor Support',
				'Advanced Project Support',
				'Plan & Process Design',
				'Other'
			]
		},
		{
			name: 'equity_management_platform',
			label: 'What equity management vendor do you use?',
			type: 'select',
			required: false,
			options: [
				'Carta',
				'Charles Schwab',
				'Eqvista',
				'Fidelity',
				'Global Shares',
				'insightsoftware',
				'Morgan Stanley at Work',
				'UBS',
				'Other'
			]
		},
		{
			name: 'equity_plan_participants_count',
			label: 'How many equity plan participants do you have?',
			type: 'number',
			required: false
		},
		{
			name: 'how_did_you_hear_about_us',
			label: 'How did you hear about us?',
			type: 'text',
			required: false
		},
		{
			name: 'message',
			label: 'Any additional info?',
			type: 'textarea',
			required: true,
			containerClass: ' md:col-span-2'
		}
	];
</script>

<form
	action="https://formspree.io/f/xleqyybe"
	method="POST"
	class:hidden={submitted}
	class="mt-8"
	name="contact"
	on:submit|preventDefault={handleSubmit}
>
	<div class="grid md:grid-cols-2 gap-x-8 gap-y-4">
		{#each fields as field}
			<div class={`mb-6${field.containerClass}`}>
				<label class="mb-2 block text-sm font-bold tracking-wide font-eurostile" for={field.name}>
					{field.label}
					{#if field.required}
						*
					{/if}
				</label>

				{#if field.type === 'textarea'}
					<textarea
						class="text-black block w-full appearance-none rounded border border-stone-100 bg-stone-100 py-3 px-4 leading-tight focus:border-stone-500 focus:bg-white focus:outline-none"
						id={field.name}
						name={field.name}
						placeholder={field.label}
						required={field.required}
						rows={5}
					/>
				{:else if field.type === 'select'}
					<select
						class="text-black block w-full appearance-none rounded border border-stone-100 bg-stone-100 py-3 px-4 leading-tight focus:border-stone-500 focus:bg-white focus:outline-none"
						id={field.name}
						name={field.name}
						required={field.required}
					>
						<option value="">Select an option</option>
						{#if field.options}
							{#each field.options as option}
								<option value={option}>{option}</option>
							{/each}
						{/if}
					</select>
				{:else}
					<input
						class="text-black block w-full appearance-none rounded border border-stone-100 bg-stone-100 py-3 px-4 leading-tight focus:border-stone-500 focus:bg-white focus:outline-none"
						id={field.name}
						name={field.name}
						placeholder={field.label}
						required={field.required}
						type={field.type}
						autocomplete={field.autocomplete}
					/>
				{/if}

				<p class="px-2 pt-1 text-sm italic text-red-500">
					{#if errors[field.name] && touched[field.name]}
						{errors[field.name]}
					{/if}
				</p>
			</div>
		{/each}
	</div>

	{#if errorMessage}
		<p class="px-2 pt-1 text-sm italic text-red-500">
			{errorMessage}
		</p>
	{/if}
	<button class={styles.darkButton} disabled={isSubmitting} type="submit"> Submit </button>
</form>
<div class:hidden={!submitted} class="flex items-center min-h-56">
	<div class="prose">
		<h2>Thank you for contacting us! We'll be in touch soon.</h2>
		<p>
			In the meantime, feel free to reach out at <a
				href="tel:+&#049;&#056;&#048;&#049;&#056;&#048;&#056;&#054;&#050;&#051;&#056;"
				>&#056;&#048;&#049;&#045;&#056;&#048;&#056;&#045;&#054;&#050;&#051;&#056;</a
			>
			or
			<a
				href="mailto:&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;"
			>
				send us an email.
			</a>
		</p>
	</div>
</div>
