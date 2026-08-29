<script lang="ts">
	import BlackBar from '$lib/components/BlackBar.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CustomerReviews from '$lib/components/CustomerReviews.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import FolderEdit from '$lib/components/icons/FolderEdit.svelte';
	import Presentation from '$lib/components/icons/Presentation.svelte';
	import Stars from '$lib/components/icons/Stars.svelte';
	import Umbrella from '$lib/components/icons/Umbrella.svelte';
	import HeroBg from '$lib/images/backgrounds/high-rise-buildings-2.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';

	const title = 'Equity Plan & Process Design Consulting | Accelerated Equity Plans';
	const description =
		'Expert consulting for equity plan design, process optimization, administrator training, and best practice implementation. Strategic guidance for private and public company stock compensation programs.';
	const path = '/services/plan-process-design';

	const features = [
		{
			icon: FolderEdit,
			title: 'Process review and documentation',
			description:
				'We review how your equity program operates, identify weak controls and wasted effort, and document the workflows that need to change. Then we help put the new process into daily use.'
		},
		{
			icon: Presentation,
			title: 'Administrator training',
			description:
				'We train administrators on equity fundamentals, the company’s platform, and its own procedures. Training can include working sessions, reference materials, and follow-up coaching.'
		},
		{
			icon: Stars,
			title: 'Industry trends and analysis',
			description:
				'We use peer benchmarks, market trends, and regulatory updates to inform Long-Term Incentive plan decisions. Recommendations connect that data to the company’s talent goals and operating constraints.'
		},
		{
			icon: Umbrella,
			title: 'Controls and compliance',
			description:
				'We help establish approval workflows, ownership, compliance checks, and audit records. These controls reduce risk without adding review steps that the team cannot maintain.'
		}
	];

	const designServices = [
		{
			title: 'Equity plan design & strategy',
			description:
				'We help you select grant types, structure vesting schedules, set grant levels, and draft plan documents with enough room to change later without a shareholder vote.'
		},
		{
			title: 'Process assessment & optimization',
			description:
				'We document current equity administration workflows, identify weak points, and help implement changes that reduce manual work and risk.'
		},
		{
			title: 'Governance & controls',
			description:
				'We design approval workflows, separate the duties that should not sit with one person, document the controls, and set up the monitoring that proves they ran.'
		},
		{
			title: 'Compliance program development',
			description:
				'We help build Section 16 programs, insider trading policies, private-company 409A processes, and international compliance workflows around the company’s actual requirements.'
		},
		{
			title: 'Plan document services',
			description:
				'We review and draft equity plan documents, grant agreements, policies, and procedures, with your counsel on the legal terms and us on whether the document can actually be administered.'
		},
		{
			title: 'Change management',
			description:
				'When a process, system, or plan changes, we prepare communications, train the affected teams, and track whether the new way of working has taken hold.'
		}
	];

	const benefits = [
		{
			title: 'Strategic alignment',
			description:
				'We connect plan design and grant practice back to what the company is trying to do: who it needs to hire, how long it needs them, and what it can afford to dilute.'
		},
		{
			title: 'Less manual work',
			description:
				'We cut the duplicate entry, the reconciliations that exist because two systems disagree, and the review steps nobody reads. Your team gets the hours back.'
		},
		{
			title: 'Risk management',
			description:
				'A missed Section 16 filing or a mispriced grant is expensive and public. We put controls, documentation, and compliance checks around the transactions most likely to produce one.'
		},
		{
			title: 'Knowledge & capability building',
			description:
				'We train your administrators and document what we build, so the program does not depend on us being available.'
		}
	];

	const faqs = [
		{
			question: 'How do you approach equity plan design?',
			answer:
				'<p>Our plan design process begins with understanding your business strategy, talent objectives, and competitive positioning. We then help you make informed decisions about grant types (options, RSUs, PSUs, etc.), vesting schedules, performance metrics, grant levels, and plan features. We ensure your design is competitive, cost-effective, aligned with accounting and tax considerations, and operationally practical to administer. The result is a plan that attracts and retains talent while supporting your business objectives.</p>'
		},
		{
			question: 'What does a process review and optimization engagement involve?',
			answer:
				'<p>We document your current processes through interviews, observation, and document review, then identify the wasted steps, the risks, the manual work worth automating, and the gaps in controls or documentation. You get prioritized recommendations, and we help implement them.</p>'
		},
		{
			question: 'Can you help us establish best practices for our equity program?',
			answer:
				'<p>Yes. That covers process design, quality control, and documentation on the operational side; regulatory requirements, internal controls, and audit readiness on the compliance side; and plan design and participant experience on the strategic side. We scale what we recommend to your size and stage.</p>'
		},
		{
			question: 'Do you provide training for our equity administration team?',
			answer:
				"<p>Yes. Training can cover equity compensation fundamentals, your specific platform, individual processes such as grant processing, vesting, and exercise, regulatory compliance, and train-the-trainer sessions. We match the content to your team's experience level and combine presentations, hands-on exercises, and reference materials.</p>"
		},
		{
			question: 'How do you help with compliance requirements?',
			answer:
				'<p>We cover Section 16 compliance for public companies, insider trading policy development and implementation, 409A compliance for private companies, securities law compliance, international tax and regulatory requirements, and audit readiness. We help you understand requirements, design compliant processes, implement necessary controls, and document everything appropriately.</p>'
		},
		{
			question: 'What kind of ongoing support do you provide?',
			answer:
				'<p>Beyond project-based consulting, we offer ongoing advisory services including industry trend updates, regulatory change notifications, peer benchmarking, strategic recommendations, ad-hoc consulting on specific questions or issues, and periodic process reviews. Many clients maintain advisory relationships that provide access to expertise as needs arise without full-time headcount commitments.</p>'
		},
		{
			question: 'How do you stay current with industry trends and regulations?',
			answer:
				'<p>Our team actively participates in industry organizations, attends conferences, maintains relationships with legal and accounting firms, monitors regulatory developments, and studies public company proxy disclosures. This ongoing research keeps us informed of emerging trends, regulatory changes, and evolving best practices that we share with our clients through advisory services.</p>'
		},
		{
			question: 'Can you help us prepare for an IPO from an equity perspective?',
			answer:
				'<p>Yes, IPO preparation is a common engagement. We help private companies prepare their equity programs for public markets by reviewing and updating plan documents, establishing Section 16 compliance programs, developing insider trading policies, optimizing grant practices for public company realities, implementing necessary process changes, and training your team on new requirements. We typically recommend beginning this work 12-18 months before your target IPO date.</p>'
		}
	];

	function jsonLDScript() {
		return `<script type="application/ld+json">${JSON.stringify(generateServiceSchema())}</${'script'}>`;
	}

	function generateServiceSchema() {
		return {
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: 'Equity Plan & Process Design',
			provider: {
				'@type': 'Organization',
				name: 'Accelerated Equity Plans',
				url: 'https://www.acceleratedep.com'
			},
			description:
				'Expert consulting services for equity plan design, process optimization, administrator training, compliance programs, and best practice implementation.',
			areaServed: 'United States',
			serviceType: 'Plan & Process Design',
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Plan & Process Design Services',
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
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-plan-design.jpg" />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />
	{@html jsonLDScript()}
</svelte:head>

<main>
	<section class={styles.heroSection}>
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="Strategic planning and process design for equity compensation"
				class="object-cover size-full"
				fetchpriority="high"
				src={HeroBg}
			/>
		</div>
		<div class="absolute inset-0 bg-black/80"></div>
		<div class={clsx('relative grid gap-8', 'md:text-center')}>
			<div class="grid gap-4">
				<RedBar classes="md:mx-auto" />
				<h1 class={clsx(styles.h1, 'text-white')}>Equity plan & process design services</h1>
			</div>
			<p class="mx-auto max-w-3xl text-lg font-light text-white">
				We design equity programs and the processes that run them, then help your team put both into
				daily use.
			</p>
		</div>
	</section>

	<Breadcrumbs
		items={[
			{ name: 'Services', href: '/services' },
			{ name: 'Plan & Process Design', href: '/services/plan-process-design' }
		]}
	/>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-16">
				<RedBar />
				<h2 class={styles.h2}>Strategic equity program design & optimization</h2>
				<div class="prose max-w-4xl text-lg text-stone-700 font-light">
					<p>
						Most equity programs are not designed so much as accumulated. A grant type gets added
						for one hire, a spreadsheet fills a gap in the platform, an approval step outlives the
						person who asked for it. The result works until volume, an audit, or a transaction tests
						it.
					</p>
					<p>
						We help private and public companies design programs that hold up under that pressure.
						Every recommendation has to be something your team can run on a Tuesday, with the
						headcount and systems you actually have.
					</p>
					<p>
						Our consultants have designed and administered these programs from inside issuer teams,
						at vendors, and in advisory practices, at companies from pre-IPO through large
						multinational public filers.
					</p>
				</div>
			</div>

			<div class="grid gap-8 mt-20">
				<RedBar />
				<h2 class={styles.h2}>Our plan & process design services</h2>
				<div class={clsx('grid gap-6 mt-8', 'md:grid-cols-2')}>
					{#each features as feature (feature.title)}
						<div
							class={clsx(
								'p-8 flex flex-col gap-4 rounded-xl bg-aep-teal-dark text-white transition-transform',
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

	<section class={clsx('py-24 px-6 bg-stone-100')}>
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-12">
				<RedBar />
				<h2 class={styles.h2}>Comprehensive design & consulting services</h2>
				<p class="text-lg text-stone-600 font-light max-w-3xl">
					From initial plan design to ongoing optimization, we provide expert guidance across all
					aspects of your equity program
				</p>
			</div>

			<div class={clsx('grid gap-6', 'md:grid-cols-2', 'lg:grid-cols-3')}>
				{#each designServices as service (service.title)}
					<div class="p-8 bg-white rounded-lg border border-stone-200">
						<h3 class={clsx(styles.h3, 'mb-4 text-stone-900')}>{service.title}</h3>
						<p class="text-stone-700 font-light leading-relaxed">{service.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-12">
				<RedBar />
				<h2 class={styles.h2}>The value of expert design & optimization</h2>
			</div>

			<div class={clsx('grid gap-6', 'md:grid-cols-2')}>
				{#each benefits as benefit (benefit.title)}
					<div class="p-8 bg-stone-50 rounded-lg">
						<h3 class={clsx(styles.h3, 'mb-4 text-stone-900')}>{benefit.title}</h3>
						<p class="text-stone-700 font-light leading-relaxed">{benefit.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class={clsx('py-24 px-6 bg-red-700 text-white')}>
		<div class="mx-auto max-w-5xl">
			<div class="grid gap-8 mb-12 text-center">
				<BlackBar classes="mx-auto" />
				<h2 class={styles.h2}>Our consulting approach</h2>
			</div>

			<div class="grid gap-8 text-white prose prose-lg max-w-none prose-invert">
				<div>
					<h3 class={clsx(styles.h3)}>1. Understand your context</h3>
					<p class="font-light text-white/90">
						We learn your business, your constraints, and the history behind the current setup
						before recommending anything.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3)}>2. Analyze current state</h3>
					<p class="font-light text-white/90">
						We review documents, watch the processes run, interview the people who own them, and
						check the data against what the process is supposed to produce.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3)}>3. Design optimal solutions</h3>
					<p class="font-light text-white/90">
						Every design trades something off: automation against control, flexibility against
						governance, thoroughness against the hours your team has. We make those trades
						explicitly and tell you what each one costs.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3)}>4. Support implementation</h3>
					<p class="font-light text-white/90">
						We stay through the change itself: project management, training, documentation, and
						coaching until the new process is the one people actually use.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3)}>5. Enable continuous improvement</h3>
					<p class="font-light text-white/90">
						We hand over the tools and the reasoning behind each decision, so your team can keep
						adjusting the program without calling us back.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-4xl">
			<div class="grid gap-8 mb-12">
				<RedBar />
				<h2 class={styles.h2}>Who benefits from our consulting services</h2>
			</div>

			<div class="grid gap-8 text-stone-700 prose prose-lg max-w-none">
				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>
						Companies establishing new equity programs
					</h3>
					<p class="font-light">
						Early decisions about grant types, vesting, and record-keeping are expensive to reverse
						later. We help you design the plan, pick the platform, and set up the processes before
						the first grant goes out.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>
						Organizations with underperforming programs
					</h3>
					<p class="font-light">
						If your program takes too many hours, produces surprises at audit, or no longer matches
						what you promised employees, we assess it and rebuild the parts that are failing.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>
						Companies preparing for major transitions
					</h3>
					<p class="font-light">
						IPOs, significant growth, M&A, and other transitions often require program redesign. We
						help you proactively adapt your equity program to meet new requirements and scale with
						your evolving business.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>
						Teams needing knowledge & skill development
					</h3>
					<p class="font-light">
						We train and coach your administrators so the program does not depend on an outside
						consultant staying on retainer.
					</p>
				</div>
			</div>
		</div>
	</section>

	<FAQ {faqs} serviceName="Plan & Process Design" />

	<CustomerReviews />

	<FooterCallout />
</main>
