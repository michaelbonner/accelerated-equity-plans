<script lang="ts">
	import MeetTheTeam from '$lib/components/MeetTheTeam.svelte';
	import PartnerRibbon from '$lib/components/PartnerRibbon.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import ReviewList from '$lib/components/ReviewList.svelte';
	import Buildings from '$lib/components/icons/Buildings.svelte';
	import Compass from '$lib/components/icons/Compass.svelte';
	import GridCheck from '$lib/components/icons/GridCheck.svelte';
	import Money from '$lib/components/icons/Money.svelte';
	import { reviews } from '$lib/reviews';
	import { styles } from '$lib/styles';
	import clsx from 'clsx';

	const servicesBoxes = [
		{
			icon: '<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.3329 23.2743V27.2743C29.3344 27.6457 29.2584 28.0132 29.1096 28.3535C28.9608 28.6937 28.7427 28.9991 28.469 29.2501C28.1954 29.5012 27.8724 29.6923 27.5206 29.8113C27.1688 29.9302 26.7961 29.9744 26.4263 29.941C22.3234 29.4952 18.3823 28.0932 14.9196 25.8477C11.698 23.8005 8.9667 21.0692 6.91959 17.8477C4.66622 14.3693 3.26391 10.409 2.82625 6.28766C2.79293 5.91894 2.83675 5.54734 2.95492 5.19649C3.07309 4.84564 3.26301 4.52324 3.51261 4.24982C3.7622 3.97639 4.06599 3.75793 4.40464 3.60835C4.74329 3.45877 5.10937 3.38134 5.47959 3.38099H9.47959C10.1267 3.37462 10.754 3.60376 11.2446 4.0257C11.7352 4.44764 12.0557 5.03358 12.1463 5.67432C12.3151 6.95441 12.6282 8.21129 13.0796 9.42099C13.259 9.89822 13.2978 10.4169 13.1915 10.9155C13.0851 11.4141 12.8381 11.8718 12.4796 12.2343L10.7863 13.9277C12.6843 17.2657 15.4482 20.0296 18.7863 21.9277L20.4796 20.2343C20.8421 19.8758 21.2998 19.6288 21.7984 19.5224C22.297 19.4161 22.8157 19.4549 23.2929 19.6343C24.5026 20.0857 25.7595 20.3988 27.0396 20.5677C27.6873 20.659 28.2788 20.9853 28.7016 21.4843C29.1245 21.9834 29.3491 22.6204 29.3329 23.2743Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
			title: 'Temporary Stock Administration Support',
			body: `<p>
				We provide temporary stock administration services to support 
				you during increased workloads or staff shortages, offering flexible 
				staffing solutions for surges in stock plan activities, transitions, 
				or temporary assistance needs.
			</p>`
		},
		{
			icon: '<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1063 3.62085C16.7589 3.46238 16.3815 3.38037 15.9996 3.38037C15.6178 3.38037 15.2404 3.46238 14.893 3.62085L3.46629 8.82085C3.22969 8.92517 3.02853 9.09604 2.88731 9.31266C2.74609 9.52927 2.6709 9.78227 2.6709 10.0408C2.6709 10.2994 2.74609 10.5524 2.88731 10.769C3.02853 10.9856 3.22969 11.1565 3.46629 11.2608L14.9063 16.4742C15.2537 16.6326 15.6311 16.7147 16.013 16.7147C16.3948 16.7147 16.7722 16.6326 17.1196 16.4742L28.5596 11.2742C28.7962 11.1699 28.9974 10.999 29.1386 10.7824C29.2798 10.5658 29.355 10.3128 29.355 10.0542C29.355 9.7956 29.2798 9.5426 29.1386 9.32599C28.9974 9.10938 28.7962 8.93851 28.5596 8.83418L17.1063 3.62085Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M29.3337 24.2476L17.107 29.7942C16.7596 29.9527 16.3822 30.0347 16.0003 30.0347C15.6185 30.0347 15.2411 29.9527 14.8937 29.7942L2.66699 24.2476" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M29.3337 17.5811L17.107 23.1277C16.7596 23.2862 16.3822 23.3682 16.0003 23.3682C15.6185 23.3682 15.2411 23.2862 14.8937 23.1277L2.66699 17.5811" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
			title: 'Full Stock Administration Outsourcing',
			body: '<p>We offer a comprehensive solution to fully outsource your stock plan administration, allowing you to focus on your core business while we handle everything from initial setup to ongoing management and compliance.</p>'
		},
		{
			icon: '<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33366 27.381H26.667C27.3742 27.381 28.0525 27.1001 28.5526 26.6C29.0527 26.0999 29.3337 25.4216 29.3337 24.7144V11.381C29.3337 10.6738 29.0527 9.9955 28.5526 9.4954C28.0525 8.99531 27.3742 8.71436 26.667 8.71436H16.0937C15.6544 8.71208 15.2226 8.60135 14.8365 8.39201C14.4503 8.18266 14.1219 7.88118 13.8803 7.51436L12.787 5.91436C12.5454 5.54753 12.217 5.24605 11.8309 5.0367C11.4447 4.82736 11.0129 4.71663 10.5737 4.71436H5.33366C4.62641 4.71436 3.94814 4.99531 3.44804 5.4954C2.94794 5.9955 2.66699 6.67378 2.66699 7.38102V24.7144C2.66699 26.181 3.86699 27.381 5.33366 27.381Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.667 14.0479V19.3812" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 14.0479V16.7145" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.333 14.0479V22.0479" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
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
				style="background-image: url('/images/backgrounds/high-rise-buildings.jpg');"
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
			style={`background-image: url('/images/brand/pattern-a-repeated-reversed.jpg')`}
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
								{@html servicesBox.icon}
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
			style={`background-image: url('/images/backgrounds/building-blurred-bg.jpg')`}
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
												class="px-4 py-1.5 rounded-full flex items-center gap-1.5 text-sm bg-stone-700"
											>
												<span class="inline-block size-2 rounded-full bg-red-700" />
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
			<PartnerRibbon />
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
