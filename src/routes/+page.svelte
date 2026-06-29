<script lang="ts">
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
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

	const title = 'Equity Management Company & Compensation Consulting | Accelerated Equity Plans';
	const description =
		'A dedicated equity management company offering expert equity compensation consulting, stock plan administration, and tailored solutions to unlock the full potential of your equity programs.';
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

	const comprehensiveServices: {
		icon: typeof HandCoins;
		iconColor: string;
		id: string;
		title: string;
		detailsLink: Pathname;
		body: string;
		tags: string[];
	}[] = [
		{
			icon: HandCoins,
			iconColor: 'text-aep-red-500',
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
			iconColor: 'text-aep-teal',
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
			iconColor: 'text-aep-red-500',
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
			iconColor: 'text-aep-teal',
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
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-image.jpg" />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />
</svelte:head>

<main class="bg-white isolate antialiased">
	<!--  Hero Div -->
	<section class={clsx(styles.heroSection, 'overflow-x-hidden', 'lg:px-28')}>
		<!-- Background Div -->
		<div class="overflow-hidden absolute inset-0">
			{#if isMobile}
				<enhanced:img
					alt="High-rise office buildings representing equity management and stock plan administration"
					class="block object-cover lg:hidden size-full"
					fetchpriority="high"
					src={HeroBgMobile}
				/>
			{:else}
				<enhanced:img
					alt="High-rise office buildings representing equity management and stock plan administration"
					class="object-cover size-full"
					fetchpriority="high"
					src={HeroBg}
				/>
			{/if}
		</div>

		<div
			class="absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-black/70 lg:from-black/80 lg:via-black/70 lg:to-black/50"
		></div>
		<div
			class="w-[31vw] absolute bottom-0 left-[69vw] overflow-hidden opacity-50 md:bottom-[5%] md:opacity-100"
		>
			<img
				alt=""
				aria-hidden="true"
				class="max-w-none opacity-90 w-[50vw]"
				height="150"
				loading="lazy"
				src="/images/brand/aep-mark-white.svg"
				width="188"
			/>
		</div>

		<!-- Should be foreground div in same container -->
		<div class="relative z-10 h-full sm:px-8">
			<div class="grid gap-2 max-w-3xl">
				<h1 class={styles.h1Super}>Accelerate Your <wbr />Equity's Potential</h1>
				<p class="mt-6 text-lg font-light leading-8 max-w-[48ch] text-pretty">
					Bringing industry-leading expertise and support to your equity programs to deliver a
					best-in-class experience for your team, partners, and participants.
				</p>
				<p class="mt-2 text-lg font-light leading-8 max-w-[48ch] text-pretty">
					Founded by industry experts with issuer and vendor experience for both private and public
					organizations, we can handle all of your equity administration needs.
				</p>
				<div class="flex gap-x-4 mt-8">
					<a href={resolve('/contact')} class={styles.redButton}>Contact us today</a>
				</div>
			</div>
		</div>
	</section>

	<section class="relative py-24 px-6 bg-zinc-50 md:py-32">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-4">
				<RedBar />
				<h2 class={clsx(styles.h2, 'max-w-[30ch]')}>What We Bring to the Table</h2>
				<p class="mt-2 max-w-[64ch] text-lg font-light text-zinc-600 text-pretty">
					We manage all
					<a
						class="text-aep-red-700 underline hover:text-aep-red-600"
						href={resolve('/services/equity-plan-administration')}
					>
						stock plan administration
					</a>
					from setup to compliance, allowing you to focus on your core business. We offer temporary support
					with flexible staffing solutions and provide expertise in
					<a
						class="text-aep-red-700 underline hover:text-aep-red-600"
						href={resolve('/services/advanced-project-support')}
					>
						Mergers and Acquisitions, IPOs, SPACs
					</a>, Corporate Actions, and Automation Design for strategic growth.
				</p>
			</div>

			<dl class="grid gap-6 mx-auto mt-12 max-w-7xl md:grid-cols-3">
				{#each servicesBoxes as servicesBox (servicesBox.title)}
					<div class="flex flex-col gap-4 p-8 bg-white rounded-xl ring-1 ring-zinc-900/10">
						<svelte:component this={servicesBox.icon} class="size-8 text-aep-red-700 shrink-0" />
						<dt class={styles.h3}>{servicesBox.title}</dt>
						<dd class="font-light text-zinc-600 prose prose-zinc max-w-none">
							{@html servicesBox.body}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
		<div class="relative flex mt-10 mx-auto max-w-7xl">
			<a href={resolve('/services')} class={styles.lightButton}>Explore All Equity Plan Services</a>
		</div>
	</section>

	<section class={clsx('relative bg-stone-700 py-24 px-6', 'lg:py-32')}>
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="Corporate office building representing comprehensive equity plan administration services"
				class="hidden object-cover lg:block size-full"
				loading="lazy"
				src={BuildingBlurredBg}
				sizes="100vw"
			/>
		</div>
		<div class="absolute inset-0 lg:bg-black/50"></div>
		<div class="relative mx-auto max-w-7xl">
			<div class="grid gap-4">
				<RedBar />
				<h2 class={clsx(styles.h2, 'max-w-[24ch] text-white')}>Our Comprehensive Services</h2>
			</div>
		</div>

		<dl class="relative grid gap-6 mx-auto mt-12 max-w-7xl sm:grid-cols-2">
			{#each comprehensiveServices as comprehensiveService (comprehensiveService.title)}
				<div class={clsx(styles.blueRedGradientBackground, 'bg-black/80 p-8')}>
					<div class="flex gap-4 items-start">
						<svelte:component
							this={comprehensiveService.icon}
							class={clsx('size-6 shrink-0', comprehensiveService.iconColor)}
						/>
						<dt class={clsx(styles.h3, 'text-white')}>
							<a class="hover:text-aep-red-300" href={resolve(comprehensiveService.detailsLink)}>
								{comprehensiveService.title}
							</a>
						</dt>
					</div>
					<dd>
						<div class="font-light text-white prose prose-invert max-w-none">
							{@html comprehensiveService.body}
						</div>
						<div class="mt-6">
							<ul role="list" class="flex flex-wrap gap-2">
								{#each comprehensiveService.tags as tag (tag)}
									<li>
										<a
											class="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-sm text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20"
											href={resolve(comprehensiveService.detailsLink)}
										>
											<span class="size-1.5 rounded-full bg-aep-red-500 shrink-0"></span>
											{tag}
										</a>
									</li>
								{/each}
							</ul>
						</div>
						<div class="mt-8">
							<a href={resolve(comprehensiveService.detailsLink)} class={styles.darkButton}>
								Explore {comprehensiveService.title} Services
							</a>
						</div>
					</dd>
				</div>
			{/each}
		</dl>

		<div class="relative flex justify-center mt-12">
			<a href={resolve('/services')} class={styles.darkButton}>View All Services</a>
		</div>
	</section>

	<section
		class={clsx('py-24 relative px-6', 'md:min-h-[80vh] md:flex md:flex-col md:justify-center')}
	>
		<div class="mx-auto max-w-7xl w-full">
			<div class={clsx('max-w-2xl grid gap-8', 'md:ml-[35vw] md:pl-12 lg:ml-[30vw] lg:pl-24')}>
				<div class="grid gap-4">
					<RedBar />
					<h2 class={clsx(styles.h2, 'max-w-[28ch]')}>
						Elevate Your Equity Management with Expert Support
					</h2>
				</div>
				<div class="prose max-w-none">
					<p class="text-lg font-light text-zinc-600 max-w-[56ch] text-pretty">
						As a dedicated equity management company, Accelerated Equity Plans partners with you to
						boost your team's effectiveness in equity compensation. We handle plan adjustments,
						daily operations, and future strategy, allowing you to focus on leading your company
						forward.
					</p>
				</div>
				<div class="flex gap-x-4">
					<a href={resolve('/contact')} class={styles.redButton}>Contact us today</a>
				</div>
			</div>
		</div>

		<div
			class="hidden w-[31vw] absolute bottom-0 right-[69vw] overflow-hidden opacity-50 md:block md:bottom-[10%] md:opacity-100"
		>
			<img
				alt=""
				aria-hidden="true"
				class="max-w-none -translate-x-1/2 w-[50vw]"
				height="150"
				loading="lazy"
				src="/images/brand/aep-mark.svg"
				width="188"
			/>
		</div>
	</section>

	<MeetTheTeam />

	<CustomerReviews />

	<section class="py-24 md:py-48 px-6">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-2">
				<RedBar classes="mx-auto" />
				<h2 class={clsx(styles.h2, 'mx-auto max-w-[30ch] text-center')}>
					Seamless Collaboration with Trusted Vendors
				</h2>
			</div>
			<div class="mt-12 md:mt-24">
				<PartnerRibbon />
			</div>
		</div>
	</section>

	<FooterCallout />
</main>
