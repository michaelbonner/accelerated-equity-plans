<script>
	import MeetTheTeam from '$lib/components/MeetTheTeam.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import HeroBg from '$lib/images/backgrounds/high-rise-looking-up.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';
</script>

<svelte:head>
	<title>About Accelerated Equity Plans</title>
	<meta
		name="description"
		content="AEP empowers companies with strategic equity solutions to attract, retain, and motivate top talent, driving competitive advantage."
	/>
	<meta property="og:title" content="About Accelerated Equity Plans" />
	<meta
		property="og:description"
		content="AEP empowers companies with strategic equity solutions to attract, retain, and motivate top talent, driving competitive advantage."
	/>
	<link rel="canonical" href="https://www.acceleratedep.com/about" />
	<meta property="og:url" content="https://www.acceleratedep.com/about" />
</svelte:head>

<main>
	<section class={styles.heroSection}>
		<!-- Background Div -->
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="Looking up at high-rise buildings"
				class="object-cover size-full"
				fetchpriority="high"
				src={HeroBg}
			/>
		</div>
		<div class={clsx('absolute inset-0 bg-black/80')} />

		<!-- Should be foreground div in same container -->
		<div class={clsx('relative z-10 h-full', 'sm:px-8 sm:text-center')}>
			<div class={clsx('grid gap-4 prose-white max-w-5xl', 'sm:mx-auto')}>
				<img
					alt="Accelerated Equity Plans"
					class={clsx('w-full max-w-sm hidden', 'sm:mx-auto sm:block')}
					height="154"
					src="/images/brand/aep-stacked-white.svg"
					width="384"
				/>
				<h1 class={styles.h1}>About Accelerated Equity Plans</h1>
				<p class="mx-auto mt-6 max-w-3xl text-lg font-light leading-8">
					We empower companies to harness the full potential of equity compensation with strategic
					solutions to attract, retain, and motivate top talent. Our comprehensive services ensure
					equity plans are effectively managed and aligned with business goals, creating a
					competitive advantage. Leverage our expertise to maximize the impact of your equity
					programs and foster a motivated, loyal workforce driving your company’s success.
				</p>
			</div>
		</div>
	</section>

	<section class={clsx('px-6 max-w-5xl mx-auto py-24', 'md:py-36')}>
		<div class="grid gap-2">
			<RedBar />
			<h2 class={styles.h2}>Our History</h2>
		</div>
		<div class="mt-8 max-w-full font-medium prose prose-lg">
			<p>
				<span class="text-red-700">Our Founding.</span> Founded in 2021 by industry experts determined
				to share their wealth of knowledge and provide unparalleled support to the field, Accelerated
				Equity stands as a beacon of expertise and dedication.
			</p>
			<p>
				<span class="text-red-700">Our Principles.</span> At Accelerated Equity, we transcend mere execution
				of equity plans; we prioritize empowering our clients with a deep understanding of the underlying
				principles driving their strategies. Leveraging the collective expertise of our seasoned team,
				we forge strong partnerships within the industry to deliver a truly exceptional experience.
			</p>
			<p>
				<span class="text-red-700">Our Track Record.</span> Our success is evident: from guiding private
				and pre-IPO ventures to supporting some of the world's largest multinational corporations, our
				commitment to excellence knows no bounds. At AEP, we are dedicated to empowering our clients
				with the tools and understanding necessary to navigate the complexities of equity planning with
				confidence and clarity.
			</p>
		</div>
	</section>

	<MeetTheTeam />

	<section
		class={clsx('py-24 relative px-6', 'md:min-h-[80vh] md:flex md:flex-col md:justify-center')}
	>
		<div class={clsx('max-w-2xl grid gap-8 mx-auto', 'md:pl-24')}>
			<div class="grid gap-4">
				<RedBar />
				<h2 class={styles.h2}>Let Us Help You Elevate Your Stock Plan!</h2>
			</div>
			<div class="font-light prose">
				<p>
					Send us an email or give us a call to discover how our experts can assist you. Our team is
					ready to provide personalized solutions and support to elevate your stock plan and meet
					your business needs. Contact us today to get started!
				</p>
			</div>
			<div class="flex gap-x-4">
				<a href="/contact" class={styles.redButton}>Contact us today</a>
			</div>
		</div>

		<div
			class={clsx(
				'hidden w-[31vw] absolute bottom-0 right-[69vw] overflow-hidden opacity-50',
				'md:block md:bottom-[10%] md:opacity-100'
			)}
		>
			<img
				alt="Accelerated Equity Plans"
				class="max-w-none translate-x-[-50%] w-[50vw]"
				height="440"
				loading="lazy"
				src="/images/brand/aep-mark.svg"
				width="550"
			/>
		</div>
	</section>
</main>
