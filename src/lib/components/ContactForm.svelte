<script lang="ts">
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
			required: true
		},
		{
			name: 'lastName',
			label: 'Last Name',
			type: 'text',
			required: true
		},
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			required: true
		},
		{
			name: 'phone',
			label: 'Phone Number',
			type: 'text',
			required: false
		},
		{
			name: 'company',
			label: 'Company',
			type: 'text',
			required: false
		},
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: false
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
			label: 'What equity management platform do you use?',
			type: 'select',
			required: false,
			options: [
				'Carta',
				'Charles Schwab',
				'Deloitte',
				'Equity Methods',
				'Eqvista',
				'Fidelity',
				'Global Shares',
				'Insight Software',
				'KPMG',
				'Morgan Stanley at Work',
				'PwC',
				'UBS'
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
			containerClass: ' col-span-2'
		}
	];
</script>

<form
	class={submitted ? `hidden` : `visible`}
	name="contact"
	on:submit|preventDefault={handleSubmit}
>
	<div class="grid lg:grid-cols-2 gap-x-8 gap-y-4">
		{#each fields as field}
			<div class={`mb-6${field.containerClass}`}>
				<label
					class="mb-2 block text-sm font-bold tracking-wide text-gray-700 font-eurostile"
					for={field.name}
				>
					{field.label}
					{#if field.required}
						*
					{/if}
				</label>

				{#if field.type === 'textarea'}
					<textarea
						class="block w-full appearance-none rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
						id={field.name}
						name={field.name}
						placeholder={field.label}
						required={field.required}
						rows={5}
					/>
				{:else if field.type === 'select'}
					<select
						class="block w-full appearance-none rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
						class="block w-full appearance-none rounded border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
						id={field.name}
						name={field.name}
						placeholder={field.label}
						required={field.required}
						type={field.type}
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
	<button
		class="focus:shadow-outline w-full rounded-md border border-aep-red-500 bg-aep-red-900 px-6 py-2 text-base font-light text-white transition duration-150 ease-in-out hover:bg-aep-red-800 focus:outline-none lg:w-auto font-eurostile"
		disabled={isSubmitting}
		type="submit"
	>
		Submit
	</button>
</form>
<div class={submitted ? `visible` : `hidden`}>
	<h2>Thank you for contacting us! We'll be in touch soon</h2>
</div>
