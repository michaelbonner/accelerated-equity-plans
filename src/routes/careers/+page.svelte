<script>
	import RedBar from '$lib/components/RedBar.svelte';
	import Document from '$lib/components/icons/Document.svelte';
	import Growth from '$lib/components/icons/Growth.svelte';
	import Key from '$lib/components/icons/Key.svelte';
	import LightningBolt from '$lib/components/icons/LightningBolt.svelte';
	import People from '$lib/components/icons/People.svelte';
	import HeroBg from '$lib/images/backgrounds/office-picture.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';

	const title = 'Careers at Accelerated Equity Plans | Equity Compensation Jobs & Opportunities';
	const description =
		'Explore rewarding careers at Accelerated Equity Plans. Join a collaborative team, advance your skills, and help shape the future of equity management. Find your next opportunity with AEP.';
	const path = '/careers';

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
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-careers.jpg" />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />
</svelte:head>

<main>
	<section class={styles.heroSection}>
		<!-- Background Div -->
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="Meeting in an office"
				class="object-cover size-full"
				fetchpriority="high"
				src={HeroBg}
			/>
		</div>
		<div class="absolute inset-0 bg-black/80 bg-blend-screen"></div>

		<!-- Should be foreground div in same container -->
		<div class={clsx('relative z-10 h-full', 'sm:px-8 sm:text-center')}>
			<div class={clsx('grid gap-4 prose-white max-w-5xl', 'sm:mx-auto')}>
				<h1 class={styles.h1}>Join Our Team</h1>
				<div class="max-w-full prose">
					<p class="mx-auto mt-6 max-w-3xl text-lg font-light leading-8 text-white">
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
					<div class="inline-block p-3 bg-black rounded-2xl">
						<Document />
					</div>
				</div>
				<h2 class={styles.h3}>Send Us Your Resume</h2>
				<p>
					Click the button above to email your resume to <a
						class="underline"
						href="mailto:&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;"
						>&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;</a
					>.
				</p>
				<div class="mt-2">
					<a
						href="mailto:&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;?subject=I'm interested in joining the AEP team!"
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
					<div class="mx-auto max-w-3xl font-light text-white prose">
						{@html reason.body}
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>
