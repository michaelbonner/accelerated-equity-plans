<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import CustomerReviews from '$lib/components/CustomerReviews.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import PartnerRibbon from '$lib/components/PartnerRibbon.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import { leadershipTeam } from '$lib/data/leadershipTeam';
	import BuildingBlurredBg from '$lib/images/backgrounds/building-blurred-bg.jpg?enhanced';
	import HeroBgMobile from '$lib/images/backgrounds/high-rise-buildings-mobile.jpg?enhanced';
	import HeroBg from '$lib/images/backgrounds/high-rise-buildings.jpg?enhanced';
	import { styles } from '$lib/styles';
	import {
		ArrowRight,
		Building2,
		DraftingCompass,
		EarthIcon,
		FileChartPie,
		Grid2x2Check,
		HandCoins,
		SquareChartGantt
	} from '@lucide/svelte';
	import { clsx } from 'clsx';

	const title = 'Equity Management Company & Compensation Consulting | Accelerated Equity Plans';
	const description =
		'Equity compensation consulting and stock plan administration for private and public companies, with support for systems, reporting, compliance, and transactions.';
	const path = '/';

	const servicesBoxes = [
		{
			icon: SquareChartGantt,
			title: 'Why Equity Compensation Consulting Matters',
			body: `<p>Equity compensation has to work for employees, shareholders, and the teams responsible for compliance. That gets harder as regulations change, markets move, and companies grow. AEP helps you build and run a program that supports the business without losing control of the details.</p>`
		},
		{
			icon: FileChartPie,
			title: 'Our Approach: Data-Driven, People-Focused',
			body: '<p>We pair hands-on equity experience with benchmarking, reporting, and the systems your team already uses. The result is practical information you can use to assess a plan, prepare for an audit, or understand why employees are not participating.</p>'
		},
		{
			icon: EarthIcon,
			title: 'Who We Serve',
			body: '<p>AEP works with growing startups, pre-IPO companies, and established public companies. Our team has supported equity programs in technology, biotech, financial services, and other industries.</p>'
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
			body: '<p>We run the recurring work behind your stock plan, including grants, releases, reporting, compliance, and employee support. We can own the full program or add experienced help where your internal team needs it.</p>',
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
			body: '<p>We help you choose, implement, and improve equity administration platforms. Our team works across major vendors, so the recommendation starts with your requirements rather than a preferred system.</p>',
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
			body: '<p>IPOs, acquisitions, corporate actions, and global expansion create more equity work than many internal teams can absorb. AEP provides experienced project support for the analysis, coordination, testing, and communication these events require.</p>',
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
			body: '<p>We review how your equity program works today, document the gaps, and design processes your team can maintain. Our consultants also train administrators and help put the right controls in place.</p>',
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
	<section class={clsx(styles.heroSection, 'overflow-x-clip', 'md:min-h-[86svh] lg:px-28')}>
		<!-- Background Div -->
		<div class="overflow-hidden absolute inset-0">
			<picture class="block size-full">
				{#each Object.entries(HeroBg.sources) as [format, srcset] (format)}
					<source {srcset} media="(min-width: 768px)" sizes="100vw" type={`image/${format}`} />
				{/each}
				{#each Object.entries(HeroBgMobile.sources) as [format, srcset] (format)}
					<source {srcset} media="(max-width: 767px)" sizes="100vw" type={`image/${format}`} />
				{/each}
				<img
					alt="High-rise office buildings representing equity management and stock plan administration"
					class="object-cover size-full"
					fetchpriority="high"
					height={HeroBgMobile.img.h}
					src={HeroBgMobile.img.src}
					width={HeroBgMobile.img.w}
				/>
			</picture>
		</div>

		<div
			class="absolute inset-0 bg-linear-to-r from-black/80 via-black/65 to-black/50 lg:from-black/82 lg:via-black/55 lg:to-black/20"
		></div>
		<div
			class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent"
		></div>
		<div
			class="pointer-events-none absolute right-[-8vw] bottom-[-8%] hidden w-[42vw] max-w-3xl opacity-55 lg:block"
		>
			<img
				alt=""
				aria-hidden="true"
				class="w-full max-w-none"
				height="150"
				loading="lazy"
				src="/images/brand/aep-mark-white.svg"
				width="188"
			/>
		</div>

		<div class="relative z-10 w-full sm:px-8">
			<div class="grid max-w-5xl gap-6">
				<p class="max-w-[48ch] text-base font-medium text-aep-red-100 text-pretty sm:text-lg">
					Equity management company for private and public organizations
				</p>
				<h1 class={clsx(styles.h1Super, 'max-w-[18ch] lg:text-7xl xl:text-8xl')}>
					Accelerate Your Equity's Potential
				</h1>
				<div class="grid max-w-[58ch] gap-4 text-lg/8 font-light text-white/90 text-pretty">
					<p>
						Accelerated Equity Plans helps companies run compliant, efficient equity compensation
						programs with senior support across administration, systems, reporting, and strategic
						transactions.
					</p>
					<p>
						Founded by industry experts with issuer and vendor experience, we can handle all of your
						equity administration needs.
					</p>
				</div>
				<div class="flex flex-col gap-3 pt-2 sm:flex-row">
					<a href={resolve('/contact')} class={styles.redButton}>Contact us today</a>
					<a href={resolve('/services')} class={clsx(styles.darkButton, 'gap-2')}>
						Explore services
						<ArrowRight class="size-4 shrink-0" aria-hidden="true" />
					</a>
				</div>
				<ul
					role="list"
					class="grid max-w-4xl gap-3 pt-6 text-base text-white/75 sm:grid-cols-3 sm:text-sm"
				>
					<li class="border-l border-white/20 pl-4">Stock plan administration</li>
					<li class="border-l border-white/20 pl-4">Equity platform support</li>
					<li class="border-l border-white/20 pl-4">IPO, M&A, and compliance projects</li>
				</ul>
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

			<div class="grid gap-6 mx-auto mt-12 max-w-7xl md:grid-cols-3">
				{#each servicesBoxes as servicesBox (servicesBox.title)}
					<article class="flex flex-col gap-4 p-8 bg-white rounded-xl ring-1 ring-zinc-900/10">
						<svelte:component this={servicesBox.icon} class="size-8 text-aep-red-700 shrink-0" />
						<h3 class={styles.h3}>{servicesBox.title}</h3>
						<div class="font-light text-zinc-600 prose prose-zinc max-w-none">
							{@html servicesBox.body}
						</div>
					</article>
				{/each}
			</div>
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

		<div class="relative grid gap-6 mx-auto mt-12 max-w-7xl sm:grid-cols-2">
			{#each comprehensiveServices as comprehensiveService (comprehensiveService.title)}
				<article class={clsx(styles.blueRedGradientBackground, 'bg-black/80 p-8')}>
					<div class="flex gap-4 items-start">
						<svelte:component
							this={comprehensiveService.icon}
							class={clsx('size-6 shrink-0', comprehensiveService.iconColor)}
						/>
						<h3 class={clsx(styles.h3, 'text-white')}>
							<a class="hover:text-aep-red-300" href={resolve(comprehensiveService.detailsLink)}>
								{comprehensiveService.title}
							</a>
						</h3>
					</div>
					<div>
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
					</div>
				</article>
			{/each}
		</div>

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
						take work off your internal team without taking them out of the process. We handle plan
						adjustments, daily administration, and longer-term planning so they can focus on the
						decisions that need their attention.
					</p>
				</div>
				<div class="flex gap-x-4">
					<a href={resolve('/contact')} class={styles.redButton}>Contact us today</a>
				</div>
			</div>
		</div>

		<div
			class="absolute bottom-0 right-[69vw] hidden w-[31vw] overflow-hidden opacity-50 md:inset-y-[10%] md:block md:opacity-100"
		>
			<img
				alt=""
				aria-hidden="true"
				class="h-full w-auto max-w-none -translate-x-1/2"
				height="150"
				loading="lazy"
				src="/images/brand/aep-mark.svg"
				width="188"
			/>
		</div>
	</section>

	<section
		class="relative overflow-hidden bg-stone-700 bg-cover bg-center px-6 py-24 text-white lg:py-32"
		style="background-image: url('/images/patterns/Pattern-0224_Pattern-Arrows.svg')"
		aria-labelledby="team-preview-heading"
	>
		<div class="absolute inset-0 bg-stone-400/30"></div>
		<div
			class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20"
		>
			<div class="grid max-w-3xl gap-6">
				<div class="grid gap-4">
					<RedBar />
					<h2 id="team-preview-heading" class={clsx(styles.h2, 'max-w-[24ch]')}>
						Senior expertise, directly involved
					</h2>
				</div>
				<p class="max-w-[62ch] text-lg/8 font-light text-white/85 text-pretty">
					Our specialists bring decades of issuer, vendor, and consulting experience to every
					engagement. Meet the people who will work alongside your team.
				</p>
				<div>
					<a
						href={resolve('/about#meet-the-team' as Pathname)}
						class={clsx(styles.darkButton, 'gap-2')}
					>
						Meet the full AEP team
						<ArrowRight class="size-4 shrink-0" aria-hidden="true" />
					</a>
				</div>
			</div>

			<ul role="list" class="flex -space-x-5 lg:justify-end">
				{#each leadershipTeam as teamMember (teamMember.fullName)}
					<li class="relative first:z-30 nth-2:z-20 nth-3:z-10">
						<enhanced:img
							alt={teamMember.imageAlt}
							class="aspect-square w-28 rounded-full object-cover shadow-xl ring-4 ring-stone-700 sm:w-36 lg:w-44"
							loading="lazy"
							src={teamMember.imageSrc}
						/>
					</li>
				{/each}
			</ul>
		</div>
	</section>

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
