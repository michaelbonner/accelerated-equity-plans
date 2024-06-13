<script>
	import RedBar from '$lib/components/RedBar.svelte';
	import Document from '$lib/components/icons/Document.svelte';
	import { styles } from '$lib/styles';
	import clsx from 'clsx';
	import People from '$lib/components/icons/People.svelte';
	import Key from '$lib/components/icons/Key.svelte';
	import Growth from '$lib/components/icons/Growth.svelte';
	import LightningBolt from '$lib/components/icons/LightningBolt.svelte';

	const reasonsToWorkForUs = [
		{
			icon: People,
			title: 'Community',
			body: "<p>At AEP, we're more than just a workplace; we're a community of passionate individuals united by a shared commitment to a culture of ownership, continuous learning, and fostering an environment where growth and fun go hand in hand.</p>"
		},
		{
			icon: Key,
			title: 'Employee Ownership',
			body: "<p>If you're someone who believes in the transformative power of employee ownership and thrives in an environment that values collaboration, innovation, and personal development, then we want to hear from you.</p>"
		},
		{
			icon: Growth,
			title: 'Growth',
			body: "<p>We're seeking dedicated professionals to join our team. Whether you're an industry veteran or just starting your career, AEP offers exciting opportunities for growth, advancement, and making a meaningful impact.</p>"
		},
		{
			icon: LightningBolt,
			title: 'Dynamic Team',
			body: '<p>Join our dynamic team to make a meaningful impact, grow your skills, and have fun. At AEP, we value your unique talents and offer a supportive environment for career advancement.</p>'
		}
	];
</script>

<svelte:head>
	<title>Careers at Accelerated Equity Plans</title>
	<meta
		name="description"
		content="Gain peace of mind with our expert team dedicated to supporting your success. Whether you need help with equity planning, system implementation, or ongoing support, we're here to provide personalized solutions and guidance, helping you navigate with confidence."
	/>
	<meta property="og:title" content="Careers at Accelerated Equity Plans" />
	<meta
		property="og:description"
		content="Gain peace of mind with our expert team dedicated to supporting your success. Whether you need help with equity planning, system implementation, or ongoing support, we're here to provide personalized solutions and guidance, helping you navigate with confidence."
	/>
	<meta
		property="og:image"
		content="https://accelerated-equity-plans.vercel.app/images/og-image.png"
	/>
	<link rel="canonical" href="https://www.acceleratedep.com/careers" />
	<link
		rel="preload"
		as="image"
		href="/images/backgrounds/office-picture-mobile.jpg.webp"
		imagesrcset="/images/backgrounds/office-picture-mobile.jpg.webp 600w, /images/backgrounds/office-picture.jpg.webp 601w"
	/>
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
			<img
				alt="high-rise buildings"
				class="object-cover size-full"
				fetchpriority="high"
				sizes="(max-width: 600px) 600px,(min-width: 601px) 2000px"
				src="/images/backgrounds/office-picture-mobile.jpg.webp"
				srcset="/images/backgrounds/office-picture-mobile.jpg.webp 600w, /images/backgrounds/office-picture.jpg.webp 601w"
			/>
		</div>
		<div class={clsx('absolute inset-0 bg-black/80 bg-blend-screen')} />

		<!-- Should be foreground div in same container -->
		<div class={clsx('relative z-10 h-full', 'sm:px-8 sm:text-center')}>
			<div class={clsx('grid gap-4 prose-white max-w-5xl', 'sm:mx-auto')}>
				<h1 class={styles.h1}>Join Our Team</h1>
				<div class="prose max-w-full">
					<p class="mt-6 text-lg leading-8 max-w-3xl mx-auto font-light text-white">
						Join our dynamic team dedicated to excellence and innovation. At AEP, you'll collaborate
						with industry leaders, contribute your unique skills, and shape the future of equity
						management. With exciting challenges and a supportive environment, we offer the perfect
						platform for you to thrive and advance your career.
					</p>
				</div>
			</div>

			<div
				class={clsx(
					'max-w-3xl mx-auto p-8 bg-white rounded-xl text-black text-left flex flex-col gap-4 mt-12',
					styles.cardHover
				)}
			>
				<div>
					<div class="p-3 bg-black rounded-2xl inline-block">
						<Document />
					</div>
				</div>
				<h2 class={styles.h3}>Send Us Your Resume</h2>
				<p>
					Click the button above to email your resume to <a
						class="underline"
						href="mailto:info@acceleratedep.com">info@acceleratedep.com</a
					>.
				</p>
				<div class="mt-2">
					<a
						href="mailto:info@acceleratedep.com?subject=I'm interested in joining the AEP team!"
						target="_blank"
						class={styles.redButton}>Join the AEP Team!</a
					>
				</div>
			</div>
		</div>
	</section>

	<section class={clsx('px-6 max-w-7xl mx-auto py-24', 'md:py-36')}>
		<div class="grid gap-2">
			<RedBar />
			<h2 class={styles.h2}>Why Work For Us?</h2>
		</div>
		<div class={clsx('max-w-7xl mx-auto grid gap-4 mt-12', 'sm:grid-cols-2', 'lg:grid-cols-4')}>
			{#each reasonsToWorkForUs as reason}
				<div
					class={clsx(
						'p-6 flex flex-col justify-start items-start gap-4 rounded-xl text-white transition-transform bg-black',
						'hover:-translate-y-1'
					)}
				>
					<div class="inline-block p-3 rounded-2xl bg-white/10">
						<svelte:component this={reason.icon} />
					</div>
					<h3 class={clsx(styles.h4)}>{reason.title}</h3>
					<div class="prose text-white max-w-3xl mx-auto font-light">
						{@html reason.body}
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>
