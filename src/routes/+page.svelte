<script lang="ts">
	import MeetTheTeam from '$lib/components/MeetTheTeam.svelte';
	import PartnerRibbon from '$lib/components/PartnerRibbon.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import ReviewList from '$lib/components/ReviewList.svelte';
	import Buildings from '$lib/components/icons/Buildings.svelte';
	import Compass from '$lib/components/icons/Compass.svelte';
	import Folder from '$lib/components/icons/Folder.svelte';
	import GridCheck from '$lib/components/icons/GridCheck.svelte';
	import Layers from '$lib/components/icons/Layers.svelte';
	import Money from '$lib/components/icons/Money.svelte';
	import Phone from '$lib/components/icons/Phone.svelte';
	import { reviews } from '$lib/reviews';
	import { styles } from '$lib/styles';
	import clsx from 'clsx';

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
			title: 'Equity Plan Administration',
			body: '<p>We provide outsourced administration, seasonal and temporary support, complete management of equity plan tasks, partnership with internal teams, and employee education and experience.</p>',
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
			title: 'Vendor Support',
			body: '<p>We offer expedited system implementation, data conversion and audit services, 3rd party integrations, RFP guidance, and functionality incorporation and testing.</p>',
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
			title: 'Advanced Project Support',
			body: '<p>We provide services for Mergers & Acquisitions, IPOs & SPACs, modifications, automation design and resources, mobility adoption, and HRIS & Payroll Integrations.</p>',
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
			title: 'Plan & Process Design',
			body: '<p>We offer process review, enhancement, and documentation; incorporation of best practices to mitigate risk; administrator system and process training; and industry trends and analysis for LTI Plan consideration.</p>',
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
	<title>Accelerated Equity Plans</title>
	<meta
		name="description"
		content="Accelerated Equity Plans helps you create, manage, and implement equity compensation plans."
	/>
	<meta property="og:title" content="Accelerated Equity Plans" />
	<meta
		property="og:description"
		content="Accelerated Equity Plans helps you create, manage, and implement equity compensation plans."
	/>
	<meta
		property="og:image"
		content="https://accelerated-equity-plans.vercel.app/images/og-image.png"
	/>
</svelte:head>

<div class="isolate bg-white">
	<main>
		<!--  Hero Div -->
		<section class="relative px-6 lg:px-28 text-white bg-black h-content">
			<!-- Background Div -->
			<div
				class="absolute inset-0 bg-cover bg-top -z-1 bg-opacity-100 lg:bg-opacity-30"
				style="background-image: url('/images/backgrounds/high-rise-buildings.jpg.webp');"
			/>
			<div
				class={clsx(
					'absolute inset-0 bg-opacity-70 bg-gradient-to-r from-black/90 via-black/80 to-black/70',
					'lg:from-black/80 lg:via-black/70 lg:to-black/50'
				)}
			/>
			<div
				class={clsx(
					'w-[31vw] absolute bottom-0 left-[69vw] overflow-hidden opacity-50',
					'md:bottom-[10%] md:opacity-100'
				)}
			>
				<img
					src="/images/brand/aep-mark-white.svg"
					alt="Accelerated Equity Plans"
					class="max-w-none w-[50vw]"
				/>
			</div>

			<!-- Should be foreground div in same container -->
			<div class="relative z-10 sm:px-8 pt-48 pb-24 lg:pt-52 lg:pb-44">
				<div class="grid gap-2 prose-white max-w-2xl">
					<h1 class={styles.h1}>Accelerate Your <wbr />Equity's Potential</h1>
					<p class="mt-6 text-lg leading-8 max-w-[660px]">
						Bringing industry leading expertise and support to your equity programs to deliver a
						best-in-class experience for your team, partners and participants. Founded by industry
						experts with issuer and vendor experience for both Private and Public organizations, we
						can handle all of your Equity Administration needs
					</p>
					<div class="mt-8 flex gap-x-4">
						<a href="/contact" class={styles.darkButton}> Contact us today </a>
					</div>
				</div>
			</div>
		</section>

		<section
			class="relative bg-stone-700 text-white bg-repeat bg-center py-24 px-6"
			style={`
				background-image: url('/images/patterns/Pattern-0224_Pattern-A-Repeated-Reversed.svg');
				background-size: 100%;
			`}
		>
			<div class="absolute inset-0 bg-stone-200/20" />
			<div class="relative text-center grid gap-4 max-w-3xl mx-auto">
				<RedBar classes="mx-auto" />
				<h2 class={styles.h2}>What We Bring to the Table</h2>
				<p class="font-light mt-4">
					We manage all stock plan administration from setup to compliance, allowing you to focus on
					your core business. We offer temporary support with flexible staffing solutions and
					provide expertise in Mergers and Acquisitions, IPOs, SPACs, Corporate Actions, and
					Automation Design for strategic growth.
				</p>
			</div>

			<div class="relative grid md:grid-cols-3 gap-y-8 gap-x-4 max-w-7xl mx-auto mt-12">
				{#each servicesBoxes as servicesBox}
					<div class={styles.blueRedGradientBackground}>
						<div class="grid gap-4 bg-black rounded-lg p-8 h-full">
							<div>
								<svelte:component this={servicesBox.icon} />
							</div>
							<h3 class="text-2xl font-bold leading-6 text-white font-eurostile">
								{servicesBox.title}
							</h3>
							<div class="prose text-white font-light">
								{@html servicesBox.body}
							</div>
							<div class="mt-8 flex gap-x-4">
								<a href="/contact" class={styles.darkButton}> Learn More </a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section
			class={clsx('relative bg-stone-700 bg-repeat bg-center py-24 px-6 bg-cover', 'lg:py-32')}
			style={`background-image: url('/images/backgrounds/building-blurred-bg.jpg.webp')`}
		>
			<div class="grid gap-4 max-w-7xl mx-auto">
				<RedBar />
				<h2 class={styles.h2}>Our Comprehensive Services</h2>
			</div>

			<div class="grid sm:grid-cols-2 gap-6 max-w-7xl mx-auto mt-12">
				{#each comprehensiveServices as comprehensiveService}
					<div class={styles.blueRedGradientBackground}>
						<div class="bg-black p-8 rounded-lg gap-4 flex flex-col justify-start h-full">
							<div class="flex gap-4 items-center">
								<div class={clsx('p-3 rounded-2xl', comprehensiveService.iconBackground)}>
									<svelte:component this={comprehensiveService.icon} />
								</div>
								<h3 class="text-2xl font-bold leading-6 text-white font-eurostile">
									{comprehensiveService.title}
								</h3>
							</div>
							<div>
								<div class="prose text-white font-light">
									{@html comprehensiveService.body}
								</div>
								<div class="mt-4">
									<ul class="text-white flex gap-2 flex-wrap">
										{#each comprehensiveService.tags as tag}
											<li
												class={clsx(
													'px-4 py-1.5 rounded-full flex items-center gap-2 bg-stone-700 text-xs',
													'md:gap-1.5 md:px-3 md:text-sm'
												)}
											>
												<span class="inline-block size-2 rounded-full bg-red-700 shrink-0" />
												{tag}
											</li>
										{/each}
									</ul>
								</div>
								<div class="mt-8 flex gap-x-4">
									<a href="/services" class={styles.darkButton}> Learn More </a>
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
				<div class="prose font-light">
					<p>
						Accelerated Equity Plans partners with you to boost your team's effectiveness in equity
						compensation. We handle plan adjustments, daily operations, and future strategy,
						allowing you to focus on leading your company forward.
					</p>
				</div>
				<div class="flex gap-x-4">
					<a href="/services" class={styles.redButton}>Contact us today</a>
				</div>
			</div>

			<div
				class={clsx(
					'hidden w-[31vw] absolute bottom-0 right-[69vw] overflow-hidden opacity-50',
					'md:block md:bottom-[10%] md:opacity-100'
				)}
			>
				<img
					src="/images/brand/aep-mark.svg"
					alt="Accelerated Equity Plans"
					class="max-w-none translate-x-[-50%] w-[50vw]"
				/>
			</div>
		</section>

		<MeetTheTeam />

		<section class="bg-black py-24 md:py-32">
			<div
				class="relative isolate overflow-hidden px-6 text-center shadow-2xl sm:px-16 flex flex-col items-center justify-between text-white"
			>
				<div class="grid gap-2">
					<RedBar classes="mx-auto" />
					<h2 class={styles.h2}>What Our Customers are Saying</h2>
				</div>

				<div class="max-w-7xl mx-auto w-full">
					<ReviewList {reviews} />
				</div>
			</div>
		</section>

		<section class="py-24 md:py-32">
			<div class="grid gap-2 mx-auto max-w-5xl text-center">
				<RedBar classes="mx-auto" />
				<h2 class={styles.h2}>Seamless Collaboration with Trusted Vendors</h2>
			</div>
			<div class={clsx('mt-12', 'md:mt-24')}>
				<PartnerRibbon />
			</div>
		</section>

		<section
			class="py-24 md:py-32 flex flex-col justify-center gap-8 text-center min-h-[50vh]"
			style={`
				background-image: url('/images/patterns/Pattern-0224_Pattern-A-Repeated.svg');
				background-size: 85%;
			`}
		>
			<div class="max-w-2xl mx-auto">
				<h2 class={styles.h2}>Take your equity management <wbr />to the next level today</h2>
			</div>

			<div class="flex justify-center">
				<a href="/contact" class={styles.redButton}>Contact us</a>
			</div>
		</section>
	</main>
</div>
