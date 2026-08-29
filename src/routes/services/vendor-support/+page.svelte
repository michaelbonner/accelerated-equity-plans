<script lang="ts">
	import { resolve } from '$app/paths';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CustomerReviews from '$lib/components/CustomerReviews.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import Database from '$lib/components/icons/Database.svelte';
	import DocumentCheck from '$lib/components/icons/DocumentCheck.svelte';
	import Nodes from '$lib/components/icons/Nodes.svelte';
	import TestTube from '$lib/components/icons/TestTube.svelte';
	import HeroBg from '$lib/images/backgrounds/high-rise-buildings-2.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';

	const title = 'Equity Management Vendor Support & Implementation | Accelerated Equity Plans';
	const description =
		'Expert vendor support for equity management systems including implementation, data migration, RFP guidance, system selection, and functionality testing for all major platforms.';
	const path = '/services/vendor-support';

	const features = [
		{
			icon: Nodes,
			title: 'System implementation',
			description:
				'We plan the implementation, coordinate with the vendor, and keep decisions and deadlines moving. Before launch, we confirm that the new platform supports the workflows your team depends on.'
		},
		{
			icon: Database,
			title: 'Data management & integration',
			description:
				'We convert data from spreadsheets or legacy systems, audit it against the source, and connect the new platform with HRIS, payroll, and other systems. Reconciliation and documented review points protect the data throughout the move.'
		},
		{
			icon: DocumentCheck,
			title: 'RFP guidance & system selection',
			description:
				'We help define requirements, prepare the RFP, evaluate demonstrations, compare vendors, and support contract discussions. Because we work across platforms, we can assess each option against the way your program actually operates.'
		},
		{
			icon: TestTube,
			title: 'Functionality testing',
			description:
				'Before go-live, we test grant processing, vesting schedules, tax calculations, reporting, and integrations. Detailed test cases make failures visible while there is still time to correct them.'
		}
	];

	const platforms = [
		'E*TRADE Equity Edge Online (Morgan Stanley at Work)',
		'Morgan Stanley Shareworks',
		'Fidelity Stock Plan Services (PSW)',
		'Schwab Equiview',
		'Carta',
		'Computershare (EquatePlus)',
		'Certent Equity Management',
		'Global Shares'
	];

	const platformSupport = [
		{
			title: 'Carta administration support',
			description:
				'From initial implementation to day-to-day Carta equity administration, we configure your cap table, automate grant and vesting workflows, run 409A and ASC 718 reporting, and clear the issues that block your team. We work with companies moving onto Carta and with companies already on it.'
		},
		{
			title: 'Shareworks administration support',
			description:
				'We support Shareworks implementation, data migration, participant management, reporting, and ongoing administration. We can also review the current setup and introduce platform features that replace manual work.'
		},
		{
			title: 'Fidelity Stock Plan Services support',
			description:
				'We support Fidelity Stock Plan Services (PSW) from onboarding and data conversion through grant processing, reconciliation, and reporting.'
		},
		{
			title: 'Equity Edge Online support',
			description:
				'We support Equity Edge Online (EEO) implementation, configuration, transaction processing, tax reporting, and integrations, and we replace the manual steps E*TRADE and Morgan Stanley at Work clients often work around.'
		}
	];

	const benefits = [
		{
			title: 'Maximize platform value',
			description:
				'Many companies use only the basic features of their equity platform. We review the configuration, identify useful features that are not in use, and automate work the system can already handle.'
		},
		{
			title: 'Reduce implementation risk',
			description:
				'Implementations slip when requirements, ownership, or testing are unclear. We make those decisions explicit, track open items, and test critical workflows before the launch date.'
		},
		{
			title: 'Vendor-agnostic expertise',
			description:
				'Our consultants work across major equity platforms. That experience helps us compare vendors and recommend configurations based on your requirements instead of one system’s default approach.'
		},
		{
			title: 'Data migration',
			description:
				'We map, convert, validate, and reconcile migrated data against the source system. The project retains the review history and supporting documentation needed for later audits.'
		}
	];

	const faqs = [
		{
			question: 'Which equity management platforms do you support?',
			answer:
				'<p>We work across E*TRADE, Fidelity, Shareworks, Certent, Carta, Computershare, Schwab, and Global Shares. Our team tracks platform updates and new features across those vendors, whether you are implementing a new system or reworking the one you have.</p>'
		},
		{
			question: 'How long does a typical system implementation take?',
			answer:
				'<p>Implementation timelines vary based on several factors including system complexity, data volume, number of integrations, and customization requirements. A straightforward implementation typically takes 8-12 weeks, while more complex projects may require 4-6 months. We work with you to develop a realistic timeline that balances speed with thoroughness, and our project management approach keeps implementations on track.</p>'
		},
		{
			question: 'Can you help us select the right equity management system?',
			answer:
				'<p>Yes. We gather requirements, develop the RFP, sit through vendor demonstrations, compare features, and support contract negotiation. We take no commission from any vendor, so the recommendation reflects your requirements.</p>'
		},
		{
			question: 'What does your data migration process include?',
			answer:
				'<p>We start with a data inventory and quality assessment, then develop mapping specifications, convert the data, run multi-level validation testing, and reconcile everything against the source systems. You get documentation of the migration and audit trails for compliance.</p>'
		},
		{
			question: 'Do you provide post-implementation support?',
			answer:
				'<p>Yes, we offer flexible post-implementation support options. This can include hypercare support immediately after go-live, ongoing optimization consulting, user training, process documentation, and troubleshooting assistance. Many clients engage us for the implementation and continue with periodic support for platform optimization, upgrades, or new feature adoption.</p>'
		},
		{
			question: 'Can you integrate our equity system with other applications?',
			answer:
				'<p>Yes. We integrate equity platforms with HRIS systems (Workday, SAP SuccessFactors, Oracle, ADP), payroll providers, and financial systems. The automated data flows cut manual entry, and each one carries its own controls and audit trail.</p>'
		},
		{
			question: "What if we're unhappy with our current vendor platform?",
			answer:
				'<p>We can help you objectively assess whether your challenges stem from the platform itself, configuration issues, or process gaps. Often, we can resolve issues through optimization and better utilization of existing features. If a platform change truly makes sense, we guide you through vendor selection and manage the complete migration process to minimize disruption.</p>'
		},
		{
			question: 'How do you ensure our implementation stays on budget and schedule?',
			answer:
				'<p>Each phase has defined deliverables and success criteria, and we track open items in a plan you can see. Most delays come from unclear requirements or a scope change nobody priced, so we put both in writing as they come up.</p>'
		}
	];

	function jsonLDScript() {
		const json = JSON.stringify(generateServiceSchema());
		return `<script type="application/ld+json">${json}</${'script'}>`;
	}

	function generateServiceSchema() {
		return {
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: 'Equity Management Vendor Support',
			provider: {
				'@type': 'Organization',
				name: 'Accelerated Equity Plans',
				url: 'https://www.acceleratedep.com'
			},
			description:
				'Vendor support for equity management systems: implementation, data migration, RFP guidance, system selection, and functionality testing.',
			areaServed: 'United States',
			serviceType: 'Vendor Support',
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Vendor Support Services',
				itemListElement: features.map((feature) => ({
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: feature.title,
						description: feature.description
					}
				}))
			}
		};
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-vendor-support.jpg" />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />
	{@html jsonLDScript()}
</svelte:head>

<main>
	<section class={styles.heroSection}>
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="Technology infrastructure representing equity management systems"
				class="object-cover size-full"
				fetchpriority="high"
				src={HeroBg}
			/>
		</div>
		<div class="absolute inset-0 bg-black/80"></div>
		<div class={clsx('relative grid gap-8', 'md:text-center')}>
			<div class="grid gap-4">
				<RedBar classes="md:mx-auto" />
				<h1 class={clsx(styles.h1, 'text-white')}>Equity management vendor support services</h1>
			</div>
			<p class="mx-auto max-w-3xl text-lg font-light text-white">
				We help you pick an equity management platform, stand it up, move your data onto it, and
				connect it to the systems around it.
			</p>
		</div>
	</section>

	<Breadcrumbs
		items={[
			{ name: 'Services', href: '/services' },
			{ name: 'Vendor Support', href: '/services/vendor-support' }
		]}
	/>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-16">
				<RedBar />
				<h2 class={styles.h2}>Expert vendor support for every stage</h2>
				<div class="prose max-w-4xl text-lg text-stone-700 font-light">
					<p>
						An equity platform is only as good as its configuration. Most companies implement one
						once, with a team that has never done it before, and live with those decisions for
						years.
					</p>
					<p>
						Whether you're selecting a new vendor, implementing a platform, migrating from a legacy
						system, or looking to optimize your current setup, AEP provides the specialized
						knowledge and hands-on support you need. Our team has implemented and provides ongoing
						<a href={resolve('/services/equity-plan-administration')}>stock plan administration</a> across
						all major platforms, so we know which configurations hold up once real transaction volume
						arrives.
					</p>
					<p>
						We take no commission from any vendor. That means we can tell you when the platform you
						have is fine and the problem is the configuration, which is often the case.
					</p>
				</div>
			</div>

			<div class="grid gap-8 mt-20">
				<RedBar />
				<h2 class={styles.h2}>Our vendor support services</h2>
				<div class={clsx('grid gap-6 mt-8', 'md:grid-cols-2')}>
					{#each features as feature (feature.title)}
						<div
							class={clsx(
								'p-8 flex flex-col gap-4 rounded-xl bg-aep-teal text-white transition-transform',
								'hover:-translate-y-1'
							)}
						>
							<div class="inline-block p-3 rounded-2xl bg-white/10 w-fit">
								<svelte:component this={feature.icon} />
							</div>
							<h3 class={styles.h3}>{feature.title}</h3>
							<p class="font-light leading-relaxed">{feature.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class={clsx('py-24 px-6 bg-stone-900 text-white')}>
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-12 text-center">
				<RedBar classes="mx-auto" />
				<h2 class={styles.h2}>Platforms we support</h2>
				<p class="text-lg font-light text-stone-300 max-w-3xl mx-auto">
					Our team has hands-on experience with all major equity management platforms. We stay
					current with platform updates, new features, and industry best practices.
				</p>
			</div>

			<div class={clsx('grid gap-4 mt-12', 'sm:grid-cols-2', 'lg:grid-cols-3')}>
				{#each platforms as platform (platform)}
					<div class="p-6 bg-white/5 rounded-lg border border-white/10 text-center">
						<p class="text-lg font-light">{platform}</p>
					</div>
				{/each}
			</div>

			<p class="text-center mt-8 text-stone-400 font-light">
				...and many other equity management platforms
			</p>
		</div>
	</section>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-12">
				<RedBar />
				<h2 class={styles.h2}>Platform-specific support</h2>
				<p class="prose max-w-4xl text-lg text-stone-700 font-light">
					Need help with a specific equity platform? Our administrators work in these systems every
					day. These are a few of the platforms we support most often. The work depends on your
					configuration, data, and team.
				</p>
			</div>

			<div class={clsx('grid gap-6', 'md:grid-cols-2')}>
				{#each platformSupport as platform (platform.title)}
					<div class="p-8 bg-stone-50 rounded-lg border border-stone-200">
						<h3 class={clsx(styles.h3, 'mb-4 text-stone-900')}>{platform.title}</h3>
						<p class="text-stone-700 font-light leading-relaxed">{platform.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class={clsx('py-24 px-6 bg-stone-100')}>
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-12">
				<RedBar />
				<h2 class={styles.h2}>Why partner with AEP for vendor support</h2>
			</div>

			<div class={clsx('grid gap-6', 'md:grid-cols-2')}>
				{#each benefits as benefit (benefit.title)}
					<div class="p-8 bg-white rounded-lg border border-stone-200">
						<h3 class={clsx(styles.h3, 'mb-4 text-stone-900')}>{benefit.title}</h3>
						<p class="text-stone-700 font-light leading-relaxed">{benefit.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-4xl">
			<div class="grid gap-8 mb-12">
				<RedBar />
				<h2 class={styles.h2}>Our implementation approach</h2>
			</div>

			<div class="grid gap-8 text-stone-700 prose prose-lg max-w-none">
				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>1. Discovery & planning</h3>
					<p class="font-light">
						We document your requirements, your current state, and what has to be true at go-live,
						before anyone touches a system.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>2. Design & configuration</h3>
					<p class="font-light">
						We design the configuration, data structure, and workflows with your team, then get each
						decision written down and signed off before the build starts.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>3. Data migration & testing</h3>
					<p class="font-light">
						We migrate the data through several validation checkpoints and reconcile it against the
						source system. Nothing goes into production use until the functionality has been tested.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>4. Training & go-live</h3>
					<p class="font-light">
						We train administrators and end users, write the documentation they will refer back to,
						and staff the go-live itself.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>5. Optimization & support</h3>
					<p class="font-light">
						After go-live we stay available to turn on features you deferred, adjust configurations,
						and work through what the first few cycles surface.
					</p>
				</div>
			</div>
		</div>
	</section>

	<FAQ {faqs} serviceName="Vendor Support" />

	<CustomerReviews />

	<FooterCallout />
</main>
