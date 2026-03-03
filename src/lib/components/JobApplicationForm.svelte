<script lang="ts">
	import { clsx } from 'clsx';
	import { onMount } from 'svelte';
	import { styles } from '$lib/styles';

	let { siteKey = '' }: { siteKey?: string } = $props();

	let isSubmitting = $state(false);
	let submitted = $state(false);
	let errorMessage = $state('');
	let resumeFileName = $state('');
	let coverLetterFileName = $state('');
	let turnstileToken = $state('');
	let turnstileWidgetId = $state<string | null>(null);
	let turnstileContainer: HTMLDivElement | null = null;

	const inputClass = clsx(
		'block py-3 px-4 w-full leading-tight text-black rounded-sm border appearance-none border-stone-200 bg-stone-100',
		'placeholder:text-stone-400',
		'focus:border-stone-500 focus:bg-white focus:outline-hidden'
	);

	const labelClass = 'block mb-2 font-bold tracking-wide font-headings text-sm';

	const RESUME_ACCEPTED =
		'.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';
	const COVER_LETTER_ACCEPTED =
		'.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';
	const MAX_MB = 10;
	const TURNSTILE_SCRIPT_ID = 'cf-turnstile-script';
	const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

	function loadTurnstileScript(): Promise<void> {
		return new Promise((resolve, reject) => {
			const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID) as HTMLScriptElement | null;
			if (window.turnstile) {
				resolve();
				return;
			}
			if (existingScript) {
				existingScript.addEventListener('load', () => resolve(), { once: true });
				existingScript.addEventListener('error', () => reject(new Error('Turnstile failed to load')), {
					once: true
				});
				return;
			}

			const script = document.createElement('script');
			script.id = TURNSTILE_SCRIPT_ID;
			script.src = TURNSTILE_SCRIPT_SRC;
			script.async = true;
			script.defer = true;
			script.onload = () => resolve();
			script.onerror = () => reject(new Error('Turnstile failed to load'));
			document.head.appendChild(script);
		});
	}

	onMount(() => {
		if (!siteKey) {
			return;
		}

		let cancelled = false;
		void (async () => {
			try {
				await loadTurnstileScript();
				if (cancelled || !turnstileContainer || !window.turnstile) {
					return;
				}

				turnstileWidgetId = window.turnstile.render(turnstileContainer, {
					sitekey: siteKey,
					callback: (token: string) => {
						turnstileToken = token;
					},
					'expired-callback': () => {
						turnstileToken = '';
					},
					'error-callback': () => {
						turnstileToken = '';
						errorMessage = 'Captcha verification failed. Please try again.';
					}
				});
			} catch {
				errorMessage = 'Captcha could not be loaded. Please refresh and try again.';
			}
		})();

		return () => {
			cancelled = true;
			if (window.turnstile && turnstileWidgetId) {
				window.turnstile.remove(turnstileWidgetId);
			}
		};
	});

	function validateFile(
		file: File | null | undefined,
		required: boolean,
		allowedMimeTypes: string[],
		allowedTypesMessage: string
	): string | null {
		if (!file || file.size === 0) {
			return required ? 'This file is required.' : null;
		}
		if (!allowedMimeTypes.includes(file.type)) {
			return allowedTypesMessage;
		}
		if (file.size > MAX_MB * 1024 * 1024) {
			return `File must be smaller than ${MAX_MB} MB.`;
		}
		return null;
	}

	function handleResumeChange(event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];
		resumeFileName = file?.name ?? '';
		const err = validateFile(
			file,
			true,
			[
				'application/pdf',
				'application/msword',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
			],
			'Only PDF or Word documents (.pdf, .doc, .docx) are accepted.'
		);
		if (err) {
			errorMessage = err;
			input.value = '';
			resumeFileName = '';
		} else {
			errorMessage = '';
		}
	}

	function handleCoverLetterChange(event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];
		coverLetterFileName = file?.name ?? '';
		const err = validateFile(
			file,
			false,
			[
				'application/pdf',
				'application/msword',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
			],
			'Only PDF or Word documents (.pdf, .doc, .docx) are accepted.'
		);
		if (err) {
			errorMessage = err;
			input.value = '';
			coverLetterFileName = '';
		} else {
			errorMessage = '';
		}
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		isSubmitting = true;
		errorMessage = '';

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		formData.set('turnstileToken', turnstileToken);

		if (!turnstileToken) {
			errorMessage = 'Please complete the captcha before submitting.';
			isSubmitting = false;
			return;
		}

		try {
			const response = await fetch('/api/apply', {
				method: 'POST',
				body: formData
			});

			const data = await response.json();

			if (response.ok && data.success) {
				submitted = true;
				try {
					window.gtag('event', 'form_submit', { form_name: 'job-application' });
				} catch {
					// gtag may not be available in all environments
				}
			} else {
				errorMessage = data.error ?? 'Oops! There was a problem submitting your application.';
				if (window.turnstile && turnstileWidgetId) {
					window.turnstile.reset(turnstileWidgetId);
					turnstileToken = '';
				}
			}
		} catch {
			errorMessage = 'Oops! There was a problem submitting your application.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class:hidden={submitted}>
	<form class="mt-6" name="job-application" onsubmit={handleSubmit} enctype="multipart/form-data">
		<div class="grid gap-x-8 gap-y-4 md:grid-cols-2">
			<!-- First Name -->
			<div>
				<label class={labelClass} for="firstName">
					First Name <span class="text-red-500">*</span>
				</label>
				<input
					class={inputClass}
					id="firstName"
					name="firstName"
					type="text"
					autocomplete="given-name"
					placeholder="First Name"
					required
				/>
			</div>

			<!-- Last Name -->
			<div>
				<label class={labelClass} for="lastName">
					Last Name <span class="text-red-500">*</span>
				</label>
				<input
					class={inputClass}
					id="lastName"
					name="lastName"
					type="text"
					autocomplete="family-name"
					placeholder="Last Name"
					required
				/>
			</div>

			<!-- Email -->
			<div>
				<label class={labelClass} for="email">
					Email <span class="text-red-500">*</span>
				</label>
				<input
					class={inputClass}
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					placeholder="you@example.com"
					required
				/>
			</div>

			<!-- Phone -->
			<div>
				<label class={labelClass} for="phone">Phone Number</label>
				<input
					class={inputClass}
					id="phone"
					name="phone"
					type="tel"
					autocomplete="tel"
					placeholder="(555) 555-5555"
				/>
			</div>

			<!-- Resume -->
			<div>
				<label class={labelClass} for="resume">
					Resume <span class="text-red-500">*</span>
				</label>
				<label
					class={clsx(
						'flex items-center gap-3 py-3 px-4 w-full rounded-sm border border-stone-200 bg-stone-100 cursor-pointer',
						'hover:bg-stone-200 transition-colors'
					)}
					for="resume"
				>
					<span
						class="shrink-0 rounded bg-black px-3 py-1 text-xs font-semibold text-white uppercase tracking-wide"
					>
						Choose File
					</span>
					<span class="truncate text-sm text-stone-500">
						{resumeFileName || 'PDF, DOC, or DOCX — max 10 MB'}
					</span>
				</label>
				<input
					class="sr-only"
					id="resume"
					name="resume"
					type="file"
					accept={RESUME_ACCEPTED}
					required
					onchange={handleResumeChange}
				/>
			</div>

			<!-- Cover Letter -->
			<div>
				<label class={labelClass} for="coverLetter">Cover Letter</label>
				<label
					class={clsx(
						'flex items-center gap-3 py-3 px-4 w-full rounded-sm border border-stone-200 bg-stone-100 cursor-pointer',
						'hover:bg-stone-200 transition-colors'
					)}
					for="coverLetter"
				>
					<span
						class="shrink-0 rounded bg-stone-600 px-3 py-1 text-xs font-semibold text-white uppercase tracking-wide"
					>
						Choose File
					</span>
					<span class="truncate text-sm text-stone-500">
						{coverLetterFileName || 'Optional — PDF, DOC, or DOCX'}
					</span>
				</label>
				<input
					class="sr-only"
					id="coverLetter"
					name="coverLetter"
					type="file"
					accept={COVER_LETTER_ACCEPTED}
					onchange={handleCoverLetterChange}
				/>
			</div>

			<!-- Comments / Additional Details -->
			<div class="md:col-span-2">
				<label class={labelClass} for="comments">Anything else you'd like us to know?</label>
				<textarea
					class={clsx(inputClass, 'resize-y')}
					id="comments"
					name="comments"
					placeholder="Tell us about your experience, the type of role you're interested in, availability, etc."
					rows={5}
				></textarea>
			</div>

			<div class="md:col-span-2">
				<div bind:this={turnstileContainer}></div>
				<input type="hidden" name="turnstileToken" value={turnstileToken} />
			</div>
		</div>

		{#if errorMessage}
			<p class="mt-4 text-sm italic text-red-500">{errorMessage}</p>
		{/if}

		<div class="mt-6 flex justify-end">
			<button class={styles.redButton} type="submit" disabled={isSubmitting}>
				{isSubmitting ? 'Submitting…' : 'Submit Application'}
			</button>
		</div>
	</form>
</div>

<div class:hidden={!submitted} class="flex min-h-56 items-center">
	<div class="prose">
		<h2>Application Received. Thank You!</h2>
		<p>
			We'll review your application and reach out if there's a potential fit. In the meantime, feel
			free to email us at
			<a
				href="mailto:&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;"
				>&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;</a
			>.
		</p>
	</div>
</div>
