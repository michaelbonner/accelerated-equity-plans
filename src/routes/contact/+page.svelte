<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import CustomerReviews from '$lib/components/CustomerReviews.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import Appointment from '$lib/components/icons/Appointment.svelte';
	import Call from '$lib/components/icons/Call.svelte';
	import { styles } from '$lib/styles';
	import clsx from 'clsx';
</script>

<svelte:head>
	<title>Contact Accelerated Equity Plans</title>
	<meta
		name="description"
		content="Gain peace of mind with our expert team dedicated to supporting your success. Whether you need help with equity planning, system implementation, or ongoing support, we're here to provide personalized solutions and guidance, helping you navigate with confidence."
	/>
	<meta property="og:title" content="Contact Accelerated Equity Plans" />
	<meta
		property="og:description"
		content="Gain peace of mind with our expert team dedicated to supporting your success. Whether you need help with equity planning, system implementation, or ongoing support, we're here to provide personalized solutions and guidance, helping you navigate with confidence."
	/>
	<meta
		property="og:image"
		content="https://accelerated-equity-plans.vercel.app/images/og-image.png"
	/>
	<link rel="canonical" href="https://www.acceleratedep.com/contact" />
</svelte:head>

<main>
	<section
		class={clsx(
			'flex flex-col justify-center relative py-36 px-6 text-white bg-black',
			'md:min-h-[90vh] md:py-24',
			'lg:px-28 lg:py-36'
		)}
	>
		<!-- Background Div -->
		<div class="absolute inset-0 overflow-hidden">
			<picture>
				<source
					media="(max-width: 600px)"
					srcset="/images/backgrounds/office-picture-mobile.jpg.webp"
				/>
				<source media="(min-width: 601px)" srcset="/images/backgrounds/office-picture.jpg.webp" />
				<img
					class="object-cover size-full"
					src="/images/backgrounds/office-picture.jpg.webp"
					alt="high-rise buildings"
				/>
			</picture>
		</div>
		<div class={clsx('absolute inset-0 bg-black/80 bg-blend-screen')} />

		<!-- Should be foreground div in same container -->
		<div class={clsx('relative z-10 h-full', 'sm:px-8 sm:text-center')}>
			<div class={clsx('grid gap-4 prose-white max-w-5xl', 'sm:mx-auto')}>
				<h1 class={styles.h1}>Contact Us Today</h1>
				<div class="prose max-w-full">
					<p class="mt-6 text-lg leading-8 max-w-3xl mx-auto font-light text-white">
						Gain peace of mind with our expert team dedicated to supporting your success. Whether
						you need help with equity planning, system implementation, or ongoing support, we're
						here to provide personalized solutions and guidance, helping you navigate with
						confidence.
					</p>
				</div>
			</div>

			<div class={clsx('max-w-7xl grid gap-4', 'sm:flex sm:flex-wrap sm:mx-auto')}>
				<div
					class={clsx(
						'flex-1 p-8 bg-white rounded-xl text-black text-left flex flex-col gap-4 mt-12',
						styles.cardHover
					)}
				>
					<div>
						<div class="p-3 bg-black rounded-2xl inline-block">
							<Call />
						</div>
					</div>
					<h3 class={styles.h3}>Give Us a Call</h3>
					<p>
						To get in touch with us, click the link or dial <a
							class="underline text-nowrap"
							href="tel:+18018086238">801-808-6238</a
						>.
					</p>
					<div class="mt-2">
						<a href="tel:+18018086238" class={styles.redButton}>Call us</a>
					</div>
				</div>

				<div
					class={clsx(
						'flex-1 p-8 bg-white rounded-xl text-black text-left flex flex-col gap-4 mt-12',
						styles.cardHover
					)}
				>
					<div>
						<div class="p-3 bg-black rounded-2xl inline-block">
							<Appointment />
						</div>
					</div>
					<h3 class={styles.h3}>Make an Appointment</h3>
					<p>
						To contact us, use the form below or send an email to <a
							class="underline text-nowrap"
							href="mailto:info@acceleratedep.com">info@acceleratedep.com</a
						>.
					</p>
					<div class="mt-3">
						<a
							href="mailto:info@acceleratedep.com?subject=I'd like to make an appointment"
							target="_blank"
							class={styles.blackButton}>Book appointment</a
						>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section
		class={clsx(
			'flex flex-col justify-center relative py-36 px-6 text-white bg-black',
			'md:min-h-[90vh] md:py-24',
			'lg:px-28 lg:py-36'
		)}
	>
		<!-- Background Div -->
		<div class="absolute inset-0 overflow-hidden">
			<picture>
				<source
					media="(max-width: 600px)"
					srcset="/images/backgrounds/building-outside-mobile.jpg.webp"
				/>
				<source media="(min-width: 601px)" srcset="/images/backgrounds/building-outside.jpg.webp" />
				<img
					class="object-cover size-full"
					src="/images/backgrounds/building-outside.jpg.webp"
					alt="Looking at a building from the outside"
				/>
			</picture>
		</div>
		<div class={clsx('absolute inset-0 bg-black/50 bg-blend-screen')} />

		<!-- Should be foreground div in same container -->
		<div class="relative z-10 h-full">
			<div class={clsx('grid gap-4 prose-white max-w-7xl', 'sm:mx-auto')}>
				<RedBar />
				<h2 class={styles.h2}>Let's Talk About Your Business</h2>
				<div class={clsx(styles.blueRedGradientBackground, 'mt-12')}>
					<div class="bg-black rounded-xl p-8 text-white">
						<h3 class={styles.h4}>Personal Information</h3>
						<p class="mt-4 font-light">Use a permanent address where you can receive mail.</p>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	</section>

	<CustomerReviews />
</main>
