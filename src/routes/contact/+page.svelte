<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import CustomerReviews from '$lib/components/CustomerReviews.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import Appointment from '$lib/components/icons/Appointment.svelte';
	import Call from '$lib/components/icons/Call.svelte';
	import BuildingOutsideMobile from '$lib/images/backgrounds/building-outside.jpg?enhanced';
	import HeroBg from '$lib/images/backgrounds/office-laptop.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';

	const title = 'Contact Accelerated Equity Plans | Expert Equity Consulting & Support';
	const description =
		'Get in touch with Accelerated Equity Plans for personalized equity plan consulting, system support, and expert guidance. Call, email, or fill out our contact form to start your equity management journey today.';
	const path = '/contact';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />
</svelte:head>

<main>
	<section class={styles.heroSection}>
		<!-- Background Div -->
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="Office meeting"
				class="object-cover size-full"
				fetchpriority="high"
				src={HeroBg}
			/>
		</div>
		<div class={clsx('absolute inset-0 bg-black/80 bg-blend-screen')}></div>

		<!-- Should be foreground div in same container -->
		<div class={clsx('relative z-10 h-full', 'sm:px-8 sm:text-center')}>
			<div class={clsx('grid gap-4 prose-white max-w-5xl', 'sm:mx-auto')}>
				<h1 class={styles.h1}>Contact Us Today</h1>
				<div class="max-w-full prose">
					<p class="mx-auto mt-6 max-w-3xl text-lg font-light leading-8 text-white">
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
						<div class="inline-block p-3 bg-black rounded-2xl">
							<Call />
						</div>
					</div>
					<h2 class={styles.h3}>Give Us a Call</h2>
					<p>
						To get in touch with us, click the link or dial <a
							class="underline text-nowrap"
							href="tel:+&#049;&#056;&#048;&#049;&#056;&#048;&#056;&#054;&#050;&#051;&#056;"
							>&#056;&#048;&#049;&#045;&#056;&#048;&#056;&#045;&#054;&#050;&#051;&#056;</a
						>.
					</p>
					<div class="mt-2">
						<a
							href="tel:+&#049;&#056;&#048;&#049;&#056;&#048;&#056;&#054;&#050;&#051;&#056;"
							class={styles.redButton}>Call us</a
						>
					</div>
				</div>

				<div
					class={clsx(
						'flex-1 p-8 bg-white rounded-xl text-black text-left flex flex-col gap-4 mt-12',
						styles.cardHover
					)}
				>
					<div>
						<div class="inline-block p-3 bg-black rounded-2xl">
							<Appointment />
						</div>
					</div>
					<h2 class={styles.h3}>Make an Appointment</h2>
					<p>
						To contact us, use the form below or send an email to <a
							class="underline text-nowrap"
							href="mailto:&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;"
							>&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;</a
						>.
					</p>
					<div class="mt-3">
						<a
							href="mailto:&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;?subject=I'd like to make an appointment"
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
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="Looking at a building from the outside"
				class="object-cover size-full"
				loading="lazy"
				src={BuildingOutsideMobile}
			/>
		</div>
		<div class={clsx('absolute inset-0 bg-black/50 bg-blend-screen')}></div>

		<!-- Should be foreground div in same container -->
		<div class="relative z-10 h-full">
			<div class={clsx('grid gap-4 prose-white max-w-7xl', 'sm:mx-auto')}>
				<RedBar />
				<h2 class={styles.h2}>Let's Talk About Your Business</h2>
				<div class={clsx(styles.blueRedGradientBackground, 'mt-12')}>
					<div class="p-8 text-white bg-black rounded-xl">
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
