<script lang="ts">
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
			title: 'Streamlined System Implementation',
			description:
				'Navigate the complexities of equity system implementation with confidence. We expedite the setup process, manage project timelines, coordinate with vendors, and ensure a smooth transition to your new platform. Our structured approach minimizes disruption while rapidly delivering functionality to your team.'
		},
		{
			icon: Database,
			title: 'Data Management & Integration',
			description:
				'Transform your equity data with precision and care. We handle complete data conversion from spreadsheets or legacy systems, conduct thorough data audits to ensure accuracy, and integrate with your HRIS, payroll, and other third-party systems. Our rigorous quality control processes guarantee your data integrity throughout the migration.'
		},
		{
			icon: DocumentCheck,
			title: 'RFP Guidance & System Selection',
			description:
				'Make informed decisions about your equity technology investment. We guide you through the entire RFP process, from defining requirements and evaluating vendors to negotiating contracts. Our vendor-agnostic approach ensures you select the platform that truly fits your needs, not just the one with the best sales pitch.'
		},
		{
			icon: TestTube,
			title: 'Comprehensive Functionality Testing',
			description:
				'Ensure your equity system performs flawlessly before going live. We conduct thorough testing of all critical functionality including grant processing, vesting schedules, tax calculations, reporting, and integrations. Our detailed test plans and quality assurance processes identify and resolve issues before they impact your operations.'
		}
	];

	const platforms = [
		'E*TRADE Equity Edge',
		'Fidelity Stock Plan Services',
		'Morgan Stanley Shareworks',
		'Certent Equity Management',
		'Carta',
		'Computershare',
		'Schwab Equity Awards',
		'Global Shares',
		'Solium (now Shareworks)',
		'Equatex'
	];

	const benefits = [
		{
			title: 'Maximize Platform Value',
			description:
				"Most companies utilize only a fraction of their equity platform's capabilities. Our team helps you unlock advanced features, automate manual processes, and optimize configurations to get the maximum return on your technology investment."
		},
		{
			title: 'Reduce Implementation Risk',
			description:
				'System implementations often face delays, budget overruns, and functionality gaps. Our proven methodology and hands-on project management dramatically reduce these risks, ensuring on-time delivery and complete functionality.'
		},
		{
			title: 'Vendor-Agnostic Expertise',
			description:
				'Unlike vendor professional services teams focused on a single platform, we bring cross-platform expertise. This broader perspective helps you implement best practices regardless of your chosen vendor and ensures objective guidance on system selection.'
		},
		{
			title: 'Seamless Data Migration',
			description:
				'Data migration is often the riskiest part of any system change. Our meticulous approach to data conversion, validation, and reconciliation ensures 100% accuracy while maintaining full audit trails and compliance documentation.'
		}
	];

	const faqs = [
		{
			question: 'Which equity management platforms do you support?',
			answer:
				"<p>We have extensive experience with all major equity management platforms including E*TRADE, Fidelity, Shareworks, Certent, Carta, Computershare, Schwab, Global Shares, and many others. Our team stays current with platform updates, new features, and best practices across all vendors. Whether you're implementing a new system or optimizing your current platform, we bring deep technical knowledge and practical implementation experience.</p>"
		},
		{
			question: 'How long does a typical system implementation take?',
			answer:
				'<p>Implementation timelines vary based on several factors including system complexity, data volume, number of integrations, and customization requirements. A straightforward implementation typically takes 8-12 weeks, while more complex projects may require 4-6 months. We work with you to develop a realistic timeline that balances speed with thoroughness, and our project management approach keeps implementations on track.</p>'
		},
		{
			question: 'Can you help us select the right equity management system?',
			answer:
				'<p>Absolutely. We provide comprehensive support throughout the vendor selection process including requirements gathering, RFP development, vendor demonstrations, feature comparison analysis, and contract negotiation support. Our vendor-agnostic approach ensures you receive objective guidance focused on your specific needs rather than vendor relationships or commissions.</p>'
		},
		{
			question: 'What does your data migration process include?',
			answer:
				'<p>Our data migration process is comprehensive and rigorous. We start with a complete data inventory and quality assessment. We then develop detailed mapping specifications, perform data conversion, conduct multi-level validation testing, and reconcile all data against source systems. We provide full documentation of the migration process and maintain audit trails for compliance purposes. Our goal is 100% data accuracy with zero loss of historical information.</p>'
		},
		{
			question: 'Do you provide post-implementation support?',
			answer:
				'<p>Yes, we offer flexible post-implementation support options. This can include hypercare support immediately after go-live, ongoing optimization consulting, user training, process documentation, and troubleshooting assistance. Many clients engage us for the implementation and continue with periodic support for platform optimization, upgrades, or new feature adoption.</p>'
		},
		{
			question: 'Can you integrate our equity system with other applications?',
			answer:
				'<p>Yes, we specialize in integrating equity platforms with HRIS systems (Workday, SAP SuccessFactors, Oracle, ADP, etc.), payroll providers, financial systems, and other enterprise applications. We design automated data flows that reduce manual work, minimize errors, and ensure data consistency across systems. Our integration approach balances automation with appropriate controls and audit trails.</p>'
		},
		{
			question: "What if we're unhappy with our current vendor platform?",
			answer:
				'<p>We can help you objectively assess whether your challenges stem from the platform itself, configuration issues, or process gaps. Often, we can resolve issues through optimization and better utilization of existing features. If a platform change truly makes sense, we guide you through vendor selection and manage the complete migration process to minimize disruption.</p>'
		},
		{
			question: 'How do you ensure our implementation stays on budget and schedule?',
			answer:
				'<p>We use proven project management methodologies with clearly defined phases, deliverables, and success criteria. We provide detailed project plans with realistic timelines, conduct regular status updates, proactively identify and address risks, and maintain strict change control processes. Our experience implementing dozens of equity systems helps us anticipate and avoid common pitfalls that cause delays and cost overruns.</p>'
		}
	];

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
				'Expert vendor support for equity management systems including implementation, data migration, RFP guidance, system selection, and comprehensive functionality testing.',
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
	{@html `<script type="application/ld+json">${JSON.stringify(generateServiceSchema())}</script>`}
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
				<h1 class={clsx(styles.h1, 'text-white')}>Equity Management Vendor Support Services</h1>
			</div>
			<p class="mx-auto max-w-3xl text-lg font-light text-white">
				Maximize the value of your equity management platform. From vendor selection and
				implementation to optimization and integration, we ensure your technology investment
				delivers results.
			</p>
		</div>
	</section>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-16">
				<RedBar />
				<h2 class={styles.h2}>Expert Vendor Support for Every Stage</h2>
				<div class="prose max-w-4xl text-lg text-stone-700 font-light">
					<p>
						Your equity management platform is a critical piece of technology infrastructure. When
						properly implemented and optimized, it streamlines operations, reduces risk, and
						provides valuable insights. But getting there requires expertise that most companies
						don't have in-house.
					</p>
					<p>
						Whether you're selecting a new vendor, implementing a platform, migrating from a legacy
						system, or looking to optimize your current setup, AEP provides the specialized
						knowledge and hands-on support you need. Our team has implemented and administered
						equity systems across all major platforms, giving us unique insight into what works,
						what doesn't, and how to avoid common pitfalls.
					</p>
					<p>
						We take a vendor-agnostic approach, focused solely on your success rather than platform
						sales or vendor relationships. This objectivity, combined with our deep technical
						expertise and practical implementation experience, helps you make smart decisions and
						achieve better outcomes from your equity technology investments.
					</p>
				</div>
			</div>

			<div class="grid gap-8 mt-20">
				<RedBar />
				<h2 class={styles.h2}>Our Vendor Support Services</h2>
				<div class={clsx('grid gap-6 mt-8', 'md:grid-cols-2')}>
					{#each features as feature}
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
				<h2 class={styles.h2}>Platforms We Support</h2>
				<p class="text-lg font-light text-stone-300 max-w-3xl mx-auto">
					Our team has hands-on experience with all major equity management platforms. We stay
					current with platform updates, new features, and industry best practices.
				</p>
			</div>

			<div class={clsx('grid gap-4 mt-12', 'sm:grid-cols-2', 'lg:grid-cols-3')}>
				{#each platforms as platform}
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

	<section class={clsx('py-24 px-6 bg-stone-100')}>
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-12">
				<RedBar />
				<h2 class={styles.h2}>Why Partner with AEP for Vendor Support</h2>
			</div>

			<div class={clsx('grid gap-6', 'md:grid-cols-2')}>
				{#each benefits as benefit}
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
				<h2 class={styles.h2}>Our Implementation Approach</h2>
			</div>

			<div class="grid gap-8 text-stone-700 prose prose-lg max-w-none">
				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>1. Discovery & Planning</h3>
					<p class="font-light">
						We begin every engagement with a thorough assessment of your requirements, current
						state, and success criteria. This foundation ensures alignment and sets clear
						expectations for the project.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>2. Design & Configuration</h3>
					<p class="font-light">
						Working collaboratively with your team, we design the optimal system configuration, data
						structure, and workflows. We document all decisions and obtain sign-off before
						proceeding to build.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>3. Data Migration & Testing</h3>
					<p class="font-light">
						Our rigorous data migration process includes multiple validation checkpoints and
						complete reconciliation. We conduct comprehensive testing of all functionality before
						allowing any production use.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>4. Training & Go-Live</h3>
					<p class="font-light">
						We provide comprehensive training for administrators and end users, create
						documentation, and deliver hands-on support during go-live. Our goal is a smooth
						transition with confident users.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>5. Optimization & Support</h3>
					<p class="font-light">
						Post-implementation, we help you continuously improve your use of the platform through
						optimization consulting, advanced feature adoption, and ongoing support as your needs
						evolve.
					</p>
				</div>
			</div>
		</div>
	</section>

	<FAQ {faqs} serviceName="Vendor Support" />

	<CustomerReviews />

	<FooterCallout />
</main>
