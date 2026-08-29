<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
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

	const title = 'Equity Plan Administration & Consulting Services | Accelerated Equity Plans';
	const description =
		'Equity plan administration, vendor support, project consulting, and process design for private and public companies.';
	const path = '/services';

	const servicesSections = [
		{
			icon: Money,
			id: 'equity-plan-administration',
			title: 'Equity plan administration',
			body: '<p>We handle the recurring work behind your stock plan, including grants, releases, reporting, compliance, and employee support. AEP can run the full program or work alongside your internal team on selected responsibilities.</p>',
			servicesBackgroundColor: 'bg-red-700',
			detailsLink: '/services/equity-plan-administration',
			services: [
				{
					icon: Bank,
					title: 'Full grant lifecycle management',
					body: '<p>We run the grant lifecycle and coordinate with Payroll, HR, Accounting, Legal, and Treasury on the handoffs between them.</p>'
				},
				{
					icon: Education,
					title: 'Employee education & onboarding',
					body: '<p>We give employees resources that explain what they hold, when it vests, and what happens at exercise.</p>'
				},
				{
					icon: People,
					title: 'Outsourced administration & scalable support',
					body: '<p>We take ownership of the entire plan, and we scale the hours up or down as your workload changes.</p>'
				},
				{
					icon: Graph,
					title: 'Seasonal & temporary support',
					body: '<p>We cover peak periods like year-end reporting and vest cycles without you adding headcount.</p>'
				}
			]
		},
		{
			icon: Buildings,
			id: 'vendor-support',
			title: 'Vendor support',
			body: '<p>We help companies choose, implement, migrate, test, and improve equity administration platforms. Because we work across Carta, Certent, Fidelity, Schwab, Morgan Stanley at Work, and Global Shares, we can focus on the system and configuration that fit your requirements.</p>',
			servicesBackgroundColor: 'bg-aep-teal',
			detailsLink: '/services/vendor-support',
			services: [
				{
					icon: Nodes,
					title: 'Platform implementation',
					body: '<p>We run the setup: configuration, testing, and the cutover from your current system.</p>'
				},
				{
					icon: Database,
					title: 'Data management & integration',
					body: '<p>We convert and audit your data, then connect the platform to your other systems.</p>'
				},
				{
					icon: DocumentCheck,
					title: 'RFP guidance & system selection',
					body: '<p>We help you build the requirements list, run the RFP, and compare the responses.</p>'
				},
				{
					icon: TestTube,
					title: 'Functionality testing',
					body: '<p>We test the configuration against your real award types and edge cases before go-live.</p>'
				}
			]
		},
		{
			icon: GridCheck,
			id: 'advanced-project-support',
			title: 'Advanced project support',
			body: '<p>IPOs, acquisitions, corporate actions, and global expansion can create a sharp increase in equity work. We provide experienced project support for the analysis, coordination, testing, and communication required to get through those events.</p>',
			servicesBackgroundColor: 'bg-black',
			detailsLink: '/services/advanced-project-support',
			services: [
				{
					icon: Events,
					title: 'Strategic transactions & equity events',
					body: '<p>We handle the equity side of mergers, acquisitions, IPOs, and SPACs: award conversions, participant communications, and the reporting each one triggers.</p>'
				},
				{
					icon: Path,
					title: 'Equity plan modifications & automation',
					body: '<p>We process plan modifications and automate the steps your team currently does by hand.</p>'
				},
				{
					icon: Trailer,
					title: 'Global workforce mobility support',
					body: '<p>We help track mobile employees and grants, coordinate with tax advisors, and explain how a move affects each participant’s awards.</p>'
				},
				{
					icon: GridBlock,
					title: 'System integrations',
					body: '<p>We connect your equity system to HRIS and payroll so grant, vest, and tax data moves without manual entry.</p>'
				}
			]
		},
		{
			icon: Compass,
			id: 'plan-process-design',
			title: 'Plan & process design',
			body: '<p>We review how an equity program operates, document the gaps, and design processes the team can maintain. Our consultants also train administrators and help put practical controls in place.</p>',
			servicesBackgroundColor: 'bg-aep-teal-dark',
			detailsLink: '/services/plan-process-design',
			services: [
				{
					icon: FolderEdit,
					title: 'Process review and redesign',
					body: '<p>We review how the program runs today, document each process, and fix the steps that create risk.</p>'
				},
				{
					icon: Presentation,
					title: 'Administrator training',
					body: '<p>We train your administrators on the system and the processes they will own.</p>'
				},
				{
					icon: Stars,
					title: 'Industry trends and analysis',
					body: '<p>We track what comparable companies are doing so your Long-Term Incentive (LTI) decisions start from current data.</p>'
				},
				{
					icon: Umbrella,
					title: 'Controls and compliance',
					body: '<p>We add the controls and documentation an auditor asks for.</p>'
				}
			]
		}
	];

	const moreServices = [
		{
			id: 'ipos-and-spacs',
			title: `IPOs and SPACs`,
			body: `We support the equity side of going public, from pre-IPO cleanup through the first post-IPO reporting cycles. We can also add capacity when work volume spikes.`
		},
		{
			id: 'corporate-actions',
			title: `Corporate actions`,
			body: `We handle the equity work in mergers and acquisitions, stock splits, and spinoffs.`
		},
		{
			id: 'automation-design-and-resources',
			title: `Automation design and resources`,
			body: `We automate repetitive equity tasks and connect equity systems with payroll and HRIS. This reduces manual entry, gives teams consistent data, and adds controls around each transfer.`
		},
		{
			id: 'tax-and-mobility-implementation-and-support',
			title: `Tax and mobility implementation and support`,
			body: `We review your withholding setup and flag what needs correcting. We also support mobility from initial setup and testing through ongoing tracking.`
		},

		{
			id: 'system-implementation',
			title: `System implementation`,
			body: `We support new system implementations, convert data from spreadsheets or legacy systems, and reconcile it so financial reporting ties out.`
		},
		{
			id: 'vendor-selection-and-rfp',
			title: `Vendor selection and RFP`,
			body: `We help you identify candidate vendors, compare them against your requirements, and choose one.`
		},
		{
			id: 'system-functionality-incorporation-and-testing',
			title: `System functionality incorporation and testing`,
			body: `We test new functionality before you turn it on, and automate what your team repeats.`
		},
		{
			id: 'process-review-and-documentation',
			title: `Process review and documentation`,
			body: `We interview the people who run each process, document how it actually works, and recommend changes.`
		},

		{
			id: 'training',
			title: `Training`,
			body: `We train your team to administer the plan and to document the processes they build.`
		},
		{
			id: 'education',
			title: `Education`,
			body: `We teach employees what their awards are worth, when they vest, and what they owe in tax.`
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-our-services.jpg" />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />
</svelte:head>

<main>
	<section class={styles.heroSection}>
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="High-rise office buildings representing equity plan administration and consulting services"
				class="object-cover size-full"
				fetchpriority="high"
				src={HeroBg}
			/>
		</div>
		<div class="absolute inset-0 bg-black/80"></div>
		<div class={clsx('relative grid gap-16', 'md:gap-24')}>
			<div class={clsx('relative grid gap-8', 'md:text-center')}>
				<h1 class={clsx(styles.h1, 'text-white')}>Our services</h1>
				<p class="mx-auto max-w-3xl text-lg font-light text-white prose">
					We set up plans, keep them compliant, and run them day to day. We cover peak periods
					without you adding headcount, and we handle the equity work in mergers and acquisitions,
					IPOs, SPACs, and corporate actions. We also automate the steps your team repeats.
				</p>
			</div>
			<div
				class={clsx(
					'max-w-7xl grid grid-cols-2 lg:grid-cols-4 items-start gap-y-8 gap-x-4 -mx-4',
					'md:gap-0 md:mx-auto'
				)}
			>
				{#each servicesSections as servicesSection (servicesSection.id)}
					<div class={clsx('h-full', styles.cardHover)}>
						<button
							on:click={() => {
								const scrollToElement = document.getElementById(servicesSection.id);

								if (scrollToElement) {
									scrollToElement.scrollIntoView({ behavior: 'smooth' });
								}
							}}
							class={clsx(
								'w-full h-full flex flex-col justify-center items-start gap-2 py-2 px-4 rounded-xl cursor-pointer',
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

	<Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />

	<div
		class="relative pt-8 pb-24 bg-fixed bg-opacity-10 bg-bottom-right bg-no-repeat bg-contain"
		style={`
			background-image: url('/images/brand/aep-mark-left-half.svg');
			background-size: 40%;
		`}
	>
		<div class="absolute inset-0 bg-white/90"></div>
		{#each servicesSections as servicesSection (servicesSection.id)}
			<section class="relative py-24 px-6" id={servicesSection.id}>
				<div class="mx-auto max-w-7xl">
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
						{#each servicesSection.services as service (service.title)}
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
								<div class="mx-auto max-w-3xl font-light text-white prose">
									{@html service.body}
								</div>
							</div>
						{/each}
					</div>
					{#if servicesSection.detailsLink}
						<div class="mt-8 flex justify-center">
							<a
								href={resolve(servicesSection.detailsLink as Pathname)}
								class={clsx(styles.redButton, 'inline-flex items-center gap-2')}
							>
								Explore {servicesSection.title} Services
							</a>
						</div>
					{/if}
				</div>
			</section>
		{/each}
	</div>

	<section
		class={clsx(
			'relative bg-stone-700 bg-repeat bg-center py-24 px-6 bg-cover text-white',
			'lg:py-32'
		)}
		style="background-image: url('/images/patterns/Pattern-0224_Pattern-A.svg')"
	>
		<div class="absolute inset-0 bg-stone-400/30"></div>

		<div class="relative">
			<div class="grid gap-12 mx-auto max-w-7xl">
				<div class="grid gap-4 text-center">
					<RedBar classes="mx-auto" />
					<h2 class={styles.h2}>More services</h2>
				</div>
			</div>

			<div class="grid gap-6 mx-auto mt-12 max-w-7xl md:grid-cols-2 xl:grid-cols-4">
				{#each moreServices as service (service.id)}
					<div class={clsx(styles.blueRedGradientBackground, styles.cardHover)}>
						<div class="flex flex-col gap-4 justify-start p-8 h-full bg-black rounded-lg">
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
