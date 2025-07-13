<script lang="ts">
	import { browser } from '$app/environment';
	import CustomerReviews from '$lib/components/CustomerReviews.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import MeetTheTeam from '$lib/components/MeetTheTeam.svelte';
	import PartnerRibbon from '$lib/components/PartnerRibbon.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import Buildings from '$lib/components/icons/Buildings.svelte';
	import Compass from '$lib/components/icons/Compass.svelte';
	import Folder from '$lib/components/icons/Folder.svelte';
	import GridCheck from '$lib/components/icons/GridCheck.svelte';
	import Layers from '$lib/components/icons/Layers.svelte';
	import Money from '$lib/components/icons/Money.svelte';
	import Phone from '$lib/components/icons/Phone.svelte';
	import BuildingBlurredBg from '$lib/images/backgrounds/building-blurred-bg.jpg?enhanced';
	import HeroBgMobile from '$lib/images/backgrounds/high-rise-buildings-mobile.jpg?enhanced';
	import HeroBg from '$lib/images/backgrounds/high-rise-buildings.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';

	let isMobile = true;

	const title = 'Expert Equity Plan Administration & Consulting | Accelerated Equity Plans';
	const description =
		'Accelerated Equity Plans offers expert equity plan administration, consulting, and support for private and public companies. Streamline your stock plans, stay compliant, and get guidance from industry professionals. Contact us to elevate your equity management.';
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
			icon: Phone,
			title: 'Temporary Stock Administration Support',
			body: `<p>
				We provide temporary stock administration services to support 
				you during increased workloads or staff shortages, offering flexible 
				staffing solutions for surges in stock plan activities, transitions, 
				or temporary assistance needs.
			</p>`
		},
		{
			icon: Layers,
			title: 'Full Stock Administration Outsourcing',
			body: '<p>We offer a comprehensive solution to fully outsource your stock plan administration, allowing you to focus on your core business while we handle everything from initial setup to ongoing management and compliance.</p>'
		},
		{
			icon: Folder,
			title: 'Special Projects and Consulting Services',
			body: '<p>We provide a comprehensive suite of services that empower businesses through Mergers and Acquisitions, IPOs, SPACs, Corporate Actions, and Automation Design, delivering strategic guidance for growth and success.</p>'
		}
	];

	const comprehensiveServices = [
		{
			icon: Money,
			iconBackground: 'bg-red-700',
			id: 'equity-plan-administration',
			title: 'Equity Plan Administration',
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
			icon: Buildings,
			iconBackground: 'bg-aep-teal',
			id: 'vendor-support',
			title: 'Vendor Support',
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
			icon: GridCheck,
			iconBackground: 'bg-[#333536]',
			id: 'advanced-project-support',
			title: 'Advanced Project Support',
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
			icon: Compass,
			iconBackground: 'bg-aep-teal-dark',
			id: 'plan-process-design',
			title: 'Plan & Process Design',
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
			<div class="grid gap-2 max-w-2xl prose-white">
				<h1 class={styles.h1Super}>Accelerate Your <wbr />Equity's Potential</h1>
				<p class="mt-6 text-lg font-light leading-8 max-w-[660px]">
					Bringing industry leading expertise and support to your equity programs to deliver a
					best-in-class experience for your team, partners and participants. Founded by industry
					experts with issuer and vendor experience for both Private and Public organizations, we
					can handle all of your Equity Administration needs
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
					<div class="grid gap-4 p-8 h-full bg-black rounded-lg">
						<div>
							<svelte:component this={servicesBox.icon} />
						</div>
						<h3 class={styles.h3}>
							{servicesBox.title}
						</h3>
						<div class="font-light text-white prose">
							{@html servicesBox.body}
						</div>
						<div class="flex gap-x-4 items-end mt-8">
							<a
								aria-label={`Learn More About AEP ${servicesBox.title}`}
								title={`Learn More About AEP ${servicesBox.title}`}
								href="/services"
								class={styles.darkButton}
							>
								Our Services
							</a>
						</div>
					</div>
				</div>
			{/each}
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
								<svelte:component this={comprehensiveService.icon} />
							</div>
							<h3 class={clsx(styles.h3, 'text-white')}>
								<a href={`/services#${comprehensiveService.id}`}>
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
												href={`/services#${comprehensiveService.id}`}
											>
												<span class="inline-block bg-red-700 rounded-full size-2 shrink-0"></span>
												{tag}
											</a>
										</li>
									{/each}
								</ul>
							</div>
							<div class="flex gap-x-4 mt-8">
								<a href={`/services#${comprehensiveService.id}`} class={styles.darkButton}>
									Learn More About AEP {comprehensiveService.title}
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
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
