<script>
	import { resolve } from '$app/paths';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import MeetTheTeam from '$lib/components/MeetTheTeam.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import HeroBg from '$lib/images/backgrounds/high-rise-looking-up.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';

	const title = 'About Accelerated Equity Plans | Equity Compensation Experts';
	const description =
		'Learn about Accelerated Equity Plans, our approach to equity compensation consulting, and the experienced team that supports our clients.';
	const path = '/about';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-about-us.jpg" />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />
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
		<div class="absolute inset-0 bg-black/80"></div>

		<!-- Should be foreground div in same container -->
		<div class={clsx('relative z-10 h-full', 'sm:px-8 sm:text-center')}>
			<div class={clsx('grid gap-4 prose-white max-w-5xl', 'sm:mx-auto')}>
				<img
					alt=""
					aria-hidden="true"
					class={clsx('w-full max-w-sm hidden', 'sm:mx-auto sm:block')}
					height="154"
					src="/images/brand/aep-stacked-white.svg"
					width="384"
				/>
				<h1 class={styles.h1}>About Accelerated Equity Plans</h1>
				<p class="mx-auto mt-6 max-w-3xl text-lg font-light leading-8">
					We help companies design and run equity programs that employees can understand and
					internal teams can manage. Our work covers daily administration, systems, compliance, and
					the projects that come with growth or a major transaction.
				</p>
			</div>
		</div>
	</section>

	<Breadcrumbs items={[{ name: 'About', href: '/about' }]} />

	<section class={clsx('px-6 max-w-5xl mx-auto py-24', 'md:py-36')}>
		<div class="grid gap-2">
			<RedBar />
			<h2 class={styles.h2}>Our History</h2>
		</div>
		<div class="mt-8 max-w-full font-medium prose prose-lg">
			<p>
				<span class="text-red-700">Our Founding.</span> Founded in 2021 by industry experts determined
				to share their experience and give companies a more responsive option for equity support, Accelerated
				Equity Plans has grown into a team of seasoned administrators and consultants.
			</p>
			<p>
				<span class="text-red-700">Our Principles.</span> We do more than process transactions. We explain
				the reasoning behind the work, document what matters, and make sure clients understand the program
				they are responsible for. We also work closely with the legal, tax, accounting, payroll, and platform
				partners involved in each plan.
			</p>
			<p>
				<span class="text-red-700">Our Track Record.</span> We have supported private and pre-IPO companies
				as well as large multinational public companies. That range gives our clients access to people
				who have seen how equity programs change as a company grows, adds new award types, or enters new
				markets.
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
					Tell us what is working, what is not, and where your team needs help. We will talk through
					the problem and recommend the right level of support for your stock plan.
				</p>
			</div>
			<div class="flex gap-x-4">
				<a href={resolve('/contact')} class={styles.redButton}>Contact us today</a>
			</div>
		</div>

		<div
			class={clsx(
				'hidden w-[31vw] absolute bottom-0 right-[69vw] overflow-hidden opacity-50',
				'md:block md:bottom-[10%] md:opacity-100'
			)}
		>
			<img
				alt=""
				aria-hidden="true"
				class="max-w-none translate-x-[-50%] w-[50vw]"
				height="440"
				loading="lazy"
				src="/images/brand/aep-mark.svg"
				width="550"
			/>
		</div>
	</section>
</main>
