<script lang="ts">
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';
	import type { FullAutoFill } from 'svelte/elements';

	let submitted = false;
	let isSubmitting = false;

	const handleSubmit = async (event: SubmitEvent) => {
		isSubmitting = true;
		errorMessage = '';
		const formData = new FormData(event.target as HTMLFormElement);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				body: formData
			});

			const data = await response.json();

			if (response.ok && data.success) {
				submitted = true;

				try {
					window.gtag('event', 'form_submit', {
						form_name: 'lead-form'
					});
				} catch (error) {
					console.error('Error sending form submission event to Google Analytics');
					console.error(error);
				}
			} else {
				if (data.errors && Array.isArray(data.errors)) {
					errorMessage = data.errors.map((error: any) => error.message).join(', ');
				} else {
					errorMessage = 'Oops! There was a problem submitting your form';
				}
			}
		} catch (error) {
			console.error(error);
			errorMessage = 'Oops! There was a problem submitting your form';
		} finally {
			isSubmitting = false;
		}
	};

	let errors: any = {};
	let errorMessage = '';
	let touched: any = {};

	const fields: {
		name: string;
		label: string;
		type: string;
		required: boolean;
		autocomplete?: FullAutoFill;
		placeholder?: string;
		containerClass?: string;
	}[] = [
		{
			name: 'firstName',
			label: 'First Name',
			type: 'text',
			required: true,
			autocomplete: 'given-name' as const,
			placeholder: 'First Name'
		},
		{
			name: 'lastName',
			label: 'Last Name',
			type: 'text',
			required: true,
			autocomplete: 'family-name' as const,
			placeholder: 'Last Name'
		},
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			required: true,
			autocomplete: 'email' as const,
			placeholder: 'Email'
		},
		{
			name: 'phone',
			label: 'Phone Number',
			type: 'text',
			required: false,
			autocomplete: 'tel' as const,
			placeholder: 'Phone Number'
		},
		{
			name: 'message',
			label: 'How can we support your goals?',
			type: 'textarea',
			placeholder: 'Tell us about your goals and how we can help...',
			required: true,
			containerClass: ' md:col-span-2'
		}
	];
</script>

<form class:hidden={submitted} class="mt-8" name="contact" on:submit|preventDefault={handleSubmit}>
	<div class="grid gap-y-4 gap-x-8 md:grid-cols-2">
		{#each fields as field}
			<div class={clsx('mb-6', field.containerClass)}>
				<label class="block mb-2 font-bold tracking-wide font-headings" for={field.name}>
					{field.label}
					{#if field.required}
						<span class="text-red-500">*</span>
					{/if}
				</label>

				{#if field.type === 'textarea'}
					<textarea
						class={clsx(
							'block py-3 px-4 w-full leading-tight text-black rounded-sm border appearance-none border-stone-100 bg-stone-100',
							'placeholder:text-stone-400',
							'focus:border-stone-500 focus:bg-white focus:outline-hidden'
						)}
						id={field.name}
						name={field.name}
						placeholder={field.placeholder ?? ''}
						required={field.required}
						rows={5}
					></textarea>
				{:else}
					<input
						class={clsx(
							'block py-3 px-4 w-full leading-tight text-black rounded-sm border appearance-none border-stone-100 bg-stone-100',
							'placeholder:text-stone-400',
							'focus:bg-white focus:outline-hidden focus:border-stone-500'
						)}
						id={field.name}
						name={field.name}
						placeholder={field.placeholder ?? ''}
						required={field.required}
						type={field.type}
						autocomplete={field.autocomplete ?? undefined}
					/>
				{/if}

				<p class="px-2 pt-1 italic text-red-500">
					{#if errors[field.name] && touched[field.name]}
						{errors[field.name]}
					{/if}
				</p>
			</div>
		{/each}
	</div>

	{#if errorMessage}
		<p class="px-2 pt-1 italic text-red-500">
			{errorMessage}
		</p>
	{/if}
	<div class="mt-6 flex justify-end">
		<button class={styles.darkButton} disabled={isSubmitting} type="submit"> Submit </button>
	</div>
</form>
<div class:hidden={!submitted} class="flex items-center min-h-56">
	<div class="prose prose-invert">
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
