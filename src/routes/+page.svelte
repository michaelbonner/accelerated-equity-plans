<script lang="ts">
	import { browser } from '$app/environment';
	import CustomerReviews from '$lib/components/CustomerReviews.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import MeetTheTeam from '$lib/components/MeetTheTeam.svelte';
	import PartnerRibbon from '$lib/components/PartnerRibbon.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import BuildingBlurredBg from '$lib/images/backgrounds/building-blurred-bg.jpg?enhanced';
	import HeroBgMobile from '$lib/images/backgrounds/high-rise-buildings-mobile.jpg?enhanced';
	import HeroBg from '$lib/images/backgrounds/high-rise-buildings.jpg?enhanced';
	import { styles } from '$lib/styles';
	import {
		Building2,
		DraftingCompass,
		EarthIcon,
		FileChartPie,
		Grid2x2Check,
		HandCoins,
		SquareChartGantt
	} from '@lucide/svelte';
	import { clsx } from 'clsx';

	let isMobile = true;

	const title =
		'Equity Compensation Consulting Services for Your Business | Accelerated Equity Plans';
	const description =
		'Unlock the full potential of your equity programs with expert equity compensation consulting and tailored administration solutions.';
	const path = '/';

	const updateWindowSize = () => {
		isMobile = window.innerWidth < 768;
	};
	if (browser) {
		updateWindowSize();
		window.onresize = updateWindowSize;
	}

	const servicesBoxes = [
		{
			icon: SquareChartGantt,
			title: 'Why Equity Compensation Consulting Matters',
			body: `<p>Navigating the world of equity compensation is complex. Companies face evolving regulations, the challenge of motivating and retaining key talent, and the need to balance shareholder and employee interests. Market volatility and rapid company growth only add to the complexity. At AEP, we understand these challenges and partner with you to build, manage, and optimize equity programs that drive engagement and business outcomes—while ensuring compliance every step of the way.</p>`
		},
		{
			icon: FileChartPie,
			title: 'Our Approach: Data-Driven, People-Focused',
			body: '<p>We combine deep industry knowledge with technology and data analytics to deliver actionable insights for your equity programs. Our team leverages benchmarking, real-time reporting, and best-in-class platforms to give you clarity and confidence in your decision-making. Whether you’re evaluating plan effectiveness, preparing for an audit, or seeking to improve employee participation, we provide the tools and expertise to help you succeed.</p>'
		},
		{
			icon: EarthIcon,
			title: 'Who We Serve',
			body: '<p>AEP supports organizations at every stage—from high-growth startups and pre-IPO companies to established public enterprises. We have deep experience across technology, biotech, financial services, and more. If you’re building, scaling, or optimizing an equity program, we’re ready to help.</p>'
		}
	];

	const comprehensiveServices = [
		{
			icon: HandCoins,
			iconBackground: 'bg-red-700',
			id: 'equity-plan-administration',
			title: 'Equity Plan Administration',
			detailsLink: '/services/equity-plan-administration',
			body: '<p>Our specialized services in stock plan administration are crafted to address the unique needs of businesses seeking to streamline their equity management processes. Our team of dedicated professionals delivers tailored solutions that ensure regulatory compliance and seamless management of employee stock compensation programs. Trust AEP to handle the complexities of your stock plan administration, allowing you to focus on your core business objectives. </p>',
			tags: [
				'Outsourced administration',
				'Seasonal & temporary support',
				'Ownership of equity plan tasks & processes for entire grant lifecycle',
				'Partner with internal teams (Payroll, HR+) for smooth execution',
				'Employee education and experience'
			]
		},
		{
			icon: Building2,
			iconBackground: 'bg-aep-teal',
			id: 'vendor-support',
			title: 'Vendor Support',
			detailsLink: '/services/vendor-support',
			body: "<p>Maximize the potential of your equity system with AEP's expert vendor support. Whether you aim to optimize your current equity administration platform or seek to find and implement a new one, AEP is here to help. We specialize in all vendor platforms and will guide you through finding, implementing, and optimizing the platform that best suits your needs.</p>",
			tags: [
				'Expedited system implementation',
				'Data conversion and audit',
				'3rd party integrations',
				'RFP guidance',
				'Functionality incorporation and testing'
			]
		},
		{
			icon: Grid2x2Check,
			iconBackground: 'bg-[#333536]',
			id: 'advanced-project-support',
			title: 'Advanced Project Support',
			detailsLink: '/services/advanced-project-support',
			body: '<p>AEP offers a comprehensive suite of services designed to empower businesses across various industries and lifecycles. Our focus on quality, integrity, and client satisfaction ensures that we partner effectively with businesses to navigate challenges, optimize operations, and unlock opportunities for long-term success.</p>',
			tags: [
				'Mergers & Acquisitions',
				'IPOs & SPACs',
				'Modifications',
				'Automation design and resources',
				'Mobility adoption',
				'HRIS & Payroll Integrations'
			]
		},
		{
			icon: DraftingCompass,
			iconBackground: 'bg-aep-teal-dark',
			id: 'plan-process-design',
			title: 'Plan & Process Design',
			detailsLink: '/services/plan-process-design',
			body: '<p>AEP assists both private and public companies in their stock plan administration by providing expert guidance and comprehensive solutions. From the initial design and implementation of your equity plans to ongoing management and compliance, AEP has you covered.</p>',
			tags: [
				'Process review, enhancement, and documentation',
				'Incorporation of best practices to mitigate risk',
				'Administrator system and process training',
				'Industry trends and analysis for LTI Plan consideration'
			]
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />
</svelte:head>

<main class="bg-white isolate">
	<!--  Hero Div -->
	<section class={clsx(styles.heroSection, 'overflow-x-hidden', 'lg:px-28')}>
		<!-- Background Div -->
		<div class="overflow-hidden absolute inset-0">
			{#if isMobile}
				<enhanced:img
					alt="High rise buildings"
					class="block object-cover lg:hidden size-full"
					fetchpriority="high"
					src={HeroBgMobile}
				/>
			{:else}
				<enhanced:img
					alt="High rise buildings"
					class="object-cover size-full"
					fetchpriority="high"
					src={HeroBg}
				/>
			{/if}
		</div>

		<div
			class={clsx(
				'absolute inset-0 bg-opacity-70 bg-linear-to-r from-black/90 via-black/80 to-black/70',
				'lg:from-black/80 lg:via-black/70 lg:to-black/50'
			)}
		></div>
		<div
			class={clsx(
				'w-[31vw] absolute bottom-0 left-[69vw] overflow-hidden opacity-50',
				'md:bottom-[5%] md:opacity-100'
			)}
		>
			<img
				alt="Accelerated Equity Plans"
				class="max-w-none opacity-90 w-[50vw]"
				height="150"
				loading="lazy"
				src="/images/brand/aep-mark-white.svg"
				width="188"
			/>
		</div>

		<!-- Should be foreground div in same container -->
		<div class={clsx('relative z-10 h-full', 'sm:px-8')}>
			<div class="grid gap-2 max-w-3xl prose-white">
				<h1 class={styles.h1Super}>Accelerate Your <wbr />Equity's Potential</h1>
				<p class="mt-6 text-lg font-light leading-8 max-w-[660px]">
					Bringing industry-leading expertise and support to your equity programs to deliver a
					best-in-class experience for your team, partners, and participants.
				</p>
				<p class="mt-2 text-lg font-light leading-8 max-w-[660px]">
					Founded by industry experts with issuer and vendor experience for both private and public
					organizations, we can handle all of your equity administration needs.
				</p>
				<div class="flex gap-x-4 mt-8">
					<a href="/contact" class={styles.darkButton}> Contact us today </a>
				</div>
			</div>
		</div>
	</section>

	<section
		class="relative py-24 px-6 text-white bg-center bg-repeat bg-stone-700"
		style={`
				background-image: url('/images/patterns/Pattern-0224_Pattern-A-Repeated-Reversed.svg');
				background-size: 100%;
			`}
	>
		<div class="absolute inset-0 bg-stone-200/20"></div>
		<div class="grid relative gap-4 mx-auto max-w-3xl text-center">
			<RedBar classes="mx-auto" />
			<h2 class={styles.h2}>What We Bring to the Table</h2>
			<p class="mt-4 font-light">
				We manage all stock plan administration from setup to compliance, allowing you to focus on
				your core business. We offer temporary support with flexible staffing solutions and provide
				expertise in Mergers and Acquisitions, IPOs, SPACs, Corporate Actions, and Automation Design
				for strategic growth.
			</p>
		</div>

		<div class="grid relative gap-x-4 gap-y-8 mx-auto mt-12 max-w-7xl md:grid-cols-3">
			{#each servicesBoxes as servicesBox}
				<div class={clsx(styles.blueRedGradientBackground, styles.cardHover)}>
					<div class="flex flex-col justify-start gap-4 p-8 h-full bg-black rounded-lg items-start">
						<div>
							<svelte:component this={servicesBox.icon} class="size-8" />
						</div>
						<h3 class={styles.h3}>
							{servicesBox.title}
						</h3>
						<div class="font-light text-white prose">
							{@html servicesBox.body}
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="relative flex mt-8 mx-auto max-w-7xl justify-center">
			<a title="Learn More About AEP Services" href="/services" class={styles.redButton}>
				Learn More About Our Services
			</a>
		</div>
	</section>

	<section class={clsx('relative bg-stone-700 py-24 px-6', 'lg:py-32')}>
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="A building with a blurred background"
				class="hidden object-cover lg:block size-full"
				loading="lazy"
				src={BuildingBlurredBg}
				sizes="100vw"
			/>
		</div>
		<div class="absolute inset-0 lg:bg-transparent bg-white/80"></div>
		<div class="grid relative gap-4 mx-auto max-w-7xl">
			<RedBar />
			<h2 class={styles.h2}>Our Comprehensive Services</h2>
		</div>

		<div class="grid relative gap-6 mx-auto mt-12 max-w-7xl sm:grid-cols-2">
			{#each comprehensiveServices as comprehensiveService}
				<div class={clsx(styles.blueRedGradientBackground, styles.cardHover)}>
					<div class="flex flex-col gap-4 justify-start p-8 h-full bg-black rounded-lg">
						<div class="flex gap-4 items-center">
							<div class={clsx('p-3 rounded-2xl', comprehensiveService.iconBackground)}>
								<svelte:component this={comprehensiveService.icon} class="size-6 text-white" />
							</div>
							<h3 class={clsx(styles.h3, 'text-white')}>
								<a href={comprehensiveService.detailsLink}>
									{comprehensiveService.title}
								</a>
							</h3>
						</div>
						<div>
							<div class="font-light text-white prose">
								{@html comprehensiveService.body}
							</div>
							<div class="mt-6">
								<ul class="flex flex-wrap gap-2 text-white">
									{#each comprehensiveService.tags as tag}
										<li>
											<a
												class={clsx(
													'px-4 py-1.5 rounded-full flex items-center gap-2 bg-stone-700 text-xs',
													'md:gap-1.5 md:px-3 md:text-sm',
													'hover:underline'
												)}
												href={comprehensiveService.detailsLink}
											>
												<span class="inline-block bg-red-700 rounded-full size-2 shrink-0"></span>
												{tag}
											</a>
										</li>
									{/each}
								</ul>
							</div>
							<div class="flex gap-x-4 mt-8">
								<a href={comprehensiveService.detailsLink} class={styles.darkButton}>
									Learn More About AEP {comprehensiveService.title}
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="relative flex justify-center mt-12">
			<a href="/services" class={clsx(styles.redButton, 'inline-flex items-center gap-2')}>
				View All Services
			</a>
		</div>
	</section>

	<section
		class={clsx('py-24 relative px-6', 'md:min-h-[80vh] md:flex md:flex-col md:justify-center')}
	>
		<div class={clsx('max-w-2xl grid gap-8 mx-auto', 'md:pl-24')}>
			<div class="grid gap-4">
				<RedBar />
				<h2 class={styles.h2}>Elevate Your Equity Management with Expert Support</h2>
			</div>
			<div class="font-light prose">
				<p>
					Accelerated Equity Plans partners with you to boost your team's effectiveness in equity
					compensation. We handle plan adjustments, daily operations, and future strategy, allowing
					you to focus on leading your company forward.
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
				height="150"
				loading="lazy"
				src="/images/brand/aep-mark.svg"
				width="188"
			/>
		</div>
	</section>

	<MeetTheTeam />

	<CustomerReviews />

	<section class="py-24 md:py-48">
		<div class="grid gap-2 mx-auto max-w-5xl text-center">
			<RedBar classes="mx-auto" />
			<h2 class={styles.h2}>Seamless Collaboration with Trusted Vendors</h2>
		</div>
		<div class={clsx('mt-12', 'md:mt-24')}>
			<PartnerRibbon />
		</div>
	</section>

	<FooterCallout />
</main>
