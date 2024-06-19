<script lang="ts">
	import CustomerReviews from '$lib/components/CustomerReviews.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import Bank from '$lib/components/icons/Bank.svelte';
	import Buildings from '$lib/components/icons/Buildings.svelte';
	import Compass from '$lib/components/icons/Compass.svelte';
	import Database from '$lib/components/icons/Database.svelte';
	import DocumentCheck from '$lib/components/icons/DocumentCheck.svelte';
	import Education from '$lib/components/icons/Education.svelte';
	import Events from '$lib/components/icons/Events.svelte';
	import FolderEdit from '$lib/components/icons/FolderEdit.svelte';
	import Graph from '$lib/components/icons/Graph.svelte';
	import GridBlock from '$lib/components/icons/GridBlock.svelte';
	import GridCheck from '$lib/components/icons/GridCheck.svelte';
	import Money from '$lib/components/icons/Money.svelte';
	import Nodes from '$lib/components/icons/Nodes.svelte';
	import Path from '$lib/components/icons/Path.svelte';
	import People from '$lib/components/icons/People.svelte';
	import Presentation from '$lib/components/icons/Presentation.svelte';
	import Stars from '$lib/components/icons/Stars.svelte';
	import TestTube from '$lib/components/icons/TestTube.svelte';
	import Trailer from '$lib/components/icons/Trailer.svelte';
	import Umbrella from '$lib/components/icons/Umbrella.svelte';
	import HeroBg from '$lib/images/backgrounds/high-rise-buildings-2.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';

	const servicesSections = [
		{
			icon: Money,
			id: 'equity-plan-administration',
			title: 'Equity Plan Administration',
			body: '<p>Our specialized services in stock plan administration are crafted to address the unique needs of businesses seeking to streamline their equity management processes. Our team of dedicated professionals delivers tailored solutions that ensure regulatory compliance and seamless management of employee stock compensation programs. Trust AEP to handle the complexities of your stock plan administration, allowing you to focus on your core business objectives.</p>',
			servicesBackgroundColor: 'bg-red-700',
			services: [
				{
					icon: Bank,
					title: 'Comprehensive Equity Management',
					body: '<p>We handle everything from grant lifecycle administration to collaborating with internal teams (Payroll, HR, Accounting, Legal & Treasury) to ensure smooth execution.</p>'
				},
				{
					icon: Education,
					title: 'Employee Education & Onboarding',
					body: '<p>We provide educational resources for employees and support a positive experience throughout their equity journey.</p>'
				},
				{
					icon: People,
					title: 'Outsourced Administration & Scalable Support',
					body: '<p>We take ownership of your entire equity plan, offering ongoing administration and flexible staffing solutions to adapt to your workload.</p>'
				},
				{
					icon: Graph,
					title: 'Seasonal & Temporary Support',
					body: '<p>Need additional support during peak times? We offer temporary staffing solutions to seamlessly manage your equity plan.</p>'
				}
			]
		},
		{
			icon: Buildings,
			id: 'vendor-support',
			title: 'Vendor Support',
			body: "<p>Maximize the potential of your equity system with AEP's expert vendor support. Whether you aim to optimize your current equity administration platform or seek to find and implement a new one, AEP is here to help. We specialize in all vendor platforms and will guide you through finding, implementing, and optimizing the platform that best suits your needs.</p>",
			servicesBackgroundColor: 'bg-aep-teal',
			services: [
				{
					icon: Nodes,
					title: 'Streamlined System Implementation',
					body: '<p>We expedite system setup, ensuring a smooth transition and rapid functionality.</p>'
				},
				{
					icon: Database,
					title: 'Data Management & Integration',
					body: '<p>We handle data conversion, audit, and integration with 3rd party systems for accurate and unified information.</p>'
				},
				{
					icon: DocumentCheck,
					title: 'RFP Guidance & System Selection',
					body: '<p>We provide expert guidance throughout the RFP process to help you select the optimal equity management system.</p>'
				},
				{
					icon: TestTube,
					title: 'Comprehensive Functionality Testing',
					body: '<p>We ensure your chosen system functions flawlessly through thorough incorporation and testing.</p>'
				}
			]
		},
		{
			icon: GridCheck,
			id: 'advanced-project-support',
			title: 'Advanced Project Support',
			body: '<p>AEP offers a comprehensive suite of services designed to empower businesses across various industries and lifecycles. Our focus on quality, integrity, and client satisfaction ensures that we partner effectively with businesses to navigate challenges, optimize operations, and unlock opportunities for long-term success.</p>',
			servicesBackgroundColor: 'bg-black',
			services: [
				{
					icon: Events,
					title: 'Strategic Transactions & Equity Events',
					body: '<p>We guide you through Mergers & Acquisitions, IPOs, SPACs, and other equity events to ensure a smooth process.</p>'
				},
				{
					icon: Path,
					title: 'Equity Plan Modifications & Automation',
					body: '<p>We assist with plan modifications and design automation solutions to streamline your workflow and improve efficiency.</p>'
				},
				{
					icon: Trailer,
					title: 'Global Workforce Mobility Support',
					body: '<p>We offer comprehensive support for mobility adoption, ensuring a seamless experience for your relocating employees.</p>'
				},
				{
					icon: GridBlock,
					title: 'Seamless Integrations',
					body: '<p>We integrate your equity systems with HRIS and Payroll for effortless data flow and centralized management.</p>'
				}
			]
		},
		{
			icon: Compass,
			id: 'plan-process-design',
			title: 'Plan & Process Design',
			body: '<p>AEP assists both private and public companies in their stock plan administration by providing expert guidance and comprehensive solutions. From the initial design and implementation of your equity plans to ongoing management and compliance, AEP has you covered.</p>',
			servicesBackgroundColor: 'bg-aep-teal-dark',
			services: [
				{
					icon: FolderEdit,
					title: 'Streamlined & Optimized Equity Management',
					body: '<p>We review, enhance, and document your program for peak efficiency, incorporating best practices to minimize risk.</p>'
				},
				{
					icon: Presentation,
					title: 'Expert Administrator Training & Support',
					body: '<p>We equip your team with the knowledge and skills they need through comprehensive administrator system and process training.</p>'
				},
				{
					icon: Stars,
					title: 'Data-Driven Decision Making',
					body: '<p>We provide ongoing industry trend analysis to inform your Long-Term Incentive (LTI) plan decisions and keep you ahead of the curve.</p>'
				},
				{
					icon: Umbrella,
					title: 'Risk Mitigation Through Best Practices',
					body: '<p>We incorporate industry best practices into your equity program to minimize risk and ensure compliance.</p>'
				}
			]
		}
	];

	const moreServices = [
		{
			title: `IPOs and SPACs`,
			body: `We provide expert support throughout the IPO process, guiding companies through the complexities and challenges of going public to ensure a successful transition. We can also be a resource as work volumes pick up and you need extra support.`
		},
		{
			title: `Corporate Actions`,
			body: `We help companies navigate strategic restructuring through mergers & acquisitions, stock splits, and spinoffs.`
		},
		{
			title: `Automation Design and Resources`,
			body: `Our Automation Design and Resources empower organizations to streamline processes and boost productivity. We integrate your equity systems with payroll and HRIS for seamless data flow and reduced risk, driving both efficiency and innovation.`
		},
		{
			title: `Tax and Mobility implementation and support`,
			body: `We ensure you're maximizing tax efficiency with a review of your withholding setup and best practice advice. Plus, we offer support throughout your mobility process, from initial setup and testing to ongoing assistance.`
		},

		{
			title: `System implementation`,
			body: `We streamline your equity management by supporting implementation of new systems, data conversion (spreadsheets or legacy systems), and ensuring data reconciliation for accurate financial reporting.`
		},
		{
			title: `Vendor Selection and RFP`,
			body: `We provide expert vendor selection support, guiding businesses through the process of identifying and choosing the right partners to meet their specific needs and goals`
		},
		{
			title: `System functionality incorporation and testing`,
			body: `We maximize your equity system's value by supporting implementation, testing, and automation, freeing you for strategic initiatives.`
		},
		{
			title: `Process review and documentation`,
			body: `We review and document your current processes, interview stakeholders and recommend best practices`
		},

		{
			title: `Training`,
			body: `AEP helps to train your employees on administering your equity plans, best practices and creating processes that will save time and reduce risk.`
		},
		{
			title: `Education`,
			body: `We specialize in educating employees on their equity awards, providing comprehensive guidance and resources to ensure they understand the value and implications of their stock compensation plans.`
		},
		{
			title: `System functionality incorporation and testing`,
			body: `We maximize your equity system's value by supporting implementation, testing, and automation, freeing you for strategic initiatives.`
		},
		{
			title: `Process review and documentation`,
			body: `We review and document your current processes, interview stakeholders and recommend best practices`
		}
	];
</script>

<svelte:head>
	<title>Equity Services provided by Accelerated Equity Plans</title>
	<meta
		name="description"
		content="AEP offers comprehensive equity management solutions, ensuring regulatory compliance and seamless administration of employee stock compensation programs."
	/>
	<meta property="og:title" content="Equity Services provided by Accelerated Equity Plans" />
	<meta
		property="og:description"
		content="AEP offers comprehensive equity management solutions, ensuring regulatory compliance and seamless administration of employee stock compensation programs."
	/>
	<link rel="canonical" href="https://www.acceleratedep.com/services" />
	<meta property="og:url" content="https://www.acceleratedep.com/services" />
</svelte:head>

<main>
	<section class={styles.heroSection}>
		<div class="absolute inset-0 overflow-hidden">
			<enhanced:img
				alt="High rise buildings"
				class="object-cover size-full"
				fetchpriority="high"
				src={HeroBg}
			/>
		</div>
		<div class="bg-black/80 absolute inset-0" />
		<div class={clsx('relative grid gap-16', 'md:gap-24')}>
			<div class={clsx('relative grid gap-8', 'md:text-center')}>
				<h1 class={clsx(styles.h1, 'text-white')}>Our Services</h1>
				<p class="prose text-white mx-auto max-w-3xl text-lg font-light">
					From plan setup and compliance to ongoing management, we ensure your stock plans run
					smoothly. Need temporary support? We offer flexible staffing solutions. Expanding your
					horizons? Our expertise covers Mergers & Acquisitions, IPOs, SPACs, and Corporate Actions.
					Let us design automation solutions to streamline your processes and fuel strategic growth.
				</p>
			</div>
			<div
				class={clsx(
					'max-w-7xl grid grid-cols-2 lg:grid-cols-4 items-start gap-y-8 gap-x-4 -mx-4',
					'md:gap-0 md:mx-auto'
				)}
			>
				{#each servicesSections as servicesSection}
					<div class={clsx('h-full', styles.cardHover)}>
						<button
							on:click={() => {
								const scrollToElement = document.getElementById(servicesSection.id);

								if (scrollToElement) {
									scrollToElement.scrollIntoView({ behavior: 'smooth' });
								}
							}}
							class={clsx(
								'w-full h-full flex flex-col justify-center items-start gap-2 py-2 px-4 rounded-xl',
								'md:text-center md:items-center md:px-4 md:py-4',
								'hover:bg-white/10'
							)}
							type="button"
						>
							<div class={clsx('inline-block p-3 rounded-2xl bg-stone-300/20', 'md:mx-auto')}>
								<svelte:component this={servicesSection.icon} />
							</div>
							<h2 class={clsx(styles.h4, 'text-white text-left', 'lg:text-center')}>
								{servicesSection.title}
							</h2>
						</button>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<div
		class="relative bg-fixed bg-no-repeat bg-opacity-10 bg-right-bottom bg-contain pt-8 pb-24"
		style={`
			background-image: url('/images/brand/aep-mark-left-half.svg');
			background-size: 40%;
		`}
	>
		<div class="absolute inset-0 bg-white/90" />
		{#each servicesSections as servicesSection}
			<section class="py-24 relative" id={servicesSection.id}>
				<div class="max-w-7xl mx-auto px-6">
					<div class="grid gap-4">
						<RedBar />
						<h2 class={clsx(styles.h2, 'text-stone-900')}>{servicesSection.title}</h2>
					</div>
					<div class={clsx('prose text-stone-900 max-w-3xl mt-8 font-light')}>
						{@html servicesSection.body}
					</div>
					<div
						class={clsx('max-w-7xl mx-auto grid gap-4 mt-12', 'sm:grid-cols-2', 'lg:grid-cols-4')}
					>
						{#each servicesSection.services as service}
							<div
								class={clsx(
									'p-6 flex flex-col justify-start items-start gap-4 rounded-xl text-white transition-transform',
									'hover:-translate-y-1',
									servicesSection.servicesBackgroundColor
								)}
							>
								<div class="inline-block p-3 rounded-2xl bg-white/10">
									<svelte:component this={service.icon} />
								</div>
								<h3 class={clsx(styles.h4)}>{service.title}</h3>
								<div class="prose text-white max-w-3xl mx-auto font-light">
									{@html service.body}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</section>
		{/each}
	</div>

	<section
		class={clsx(
			'relative bg-stone-700 bg-repeat bg-center py-24 px-6 bg-cover text-white',
			'lg:py-32'
		)}
		style={`background-image: url('/images/patterns/Pattern-0224_Pattern-A.svg')`}
	>
		<div class="absolute inset-0 bg-stone-400/30" />

		<div class="relative">
			<div class="max-w-7xl mx-auto grid gap-12">
				<div class="grid gap-4 text-center">
					<RedBar classes="mx-auto" />
					<h2 class={styles.h2}>More Services</h2>
				</div>
			</div>

			<div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
				{#each moreServices as service}
					<div class={clsx(styles.blueRedGradientBackground, styles.cardHover)}>
						<div class="bg-black p-8 rounded-lg gap-4 flex flex-col justify-start h-full">
							<h3 class={styles.h3}>
								{service.title}
							</h3>
							<div class="font-light">{@html service.body}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<CustomerReviews />

	<FooterCallout />
</main>
