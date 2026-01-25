<script lang="ts">
	import BlackBar from '$lib/components/BlackBar.svelte';
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
			title: 'Streamlined & Optimized Equity Management',
			description:
				'Transform your equity program through comprehensive review and optimization. We analyze your current processes, identify inefficiencies and risks, document workflows, and implement best practices that enhance efficiency while minimizing compliance risk. The result is a streamlined program that runs smoothly and supports your business objectives.'
		},
		{
			icon: Presentation,
			title: 'Expert Administrator Training & Support',
			description:
				'Empower your team with the knowledge and skills they need for success. We provide comprehensive training on equity administration fundamentals, platform-specific system training, process documentation, and ongoing coaching. Your administrators gain confidence and competence to manage your program effectively.'
		},
		{
			icon: Stars,
			title: 'Data-Driven Decision Making',
			description:
				'Make informed decisions about your equity compensation strategy with industry intelligence and competitive insights. We provide ongoing trend analysis, peer benchmarking, regulatory updates, and strategic recommendations to keep your Long-Term Incentive plans competitive and effective.'
		},
		{
			icon: Umbrella,
			title: 'Risk Mitigation Through Best Practices',
			description:
				'Protect your organization by incorporating proven best practices into your equity program. We help you establish strong controls, implement proper governance, ensure regulatory compliance, and create audit trails that stand up to scrutiny. Reduce risk while maintaining operational efficiency.'
		}
	];

	const designServices = [
		{
			title: 'Equity Plan Design & Strategy',
			description:
				'Design equity compensation programs aligned with your business strategy and talent objectives. We help you select appropriate grant types, structure vesting schedules, set grant levels, and create plan documents that provide flexibility while ensuring compliance.'
		},
		{
			title: 'Process Assessment & Optimization',
			description:
				'Comprehensive review of your current equity administration processes to identify improvement opportunities. We document workflows, highlight inefficiencies, recommend optimizations, and help you implement streamlined processes that reduce manual work and risk.'
		},
		{
			title: 'Governance & Controls',
			description:
				'Establish strong governance frameworks for your equity program. We help you design approval workflows, implement segregation of duties, create control documentation, and establish monitoring procedures that ensure proper oversight and compliance.'
		},
		{
			title: 'Compliance Program Development',
			description:
				'Build comprehensive compliance programs tailored to your requirements. Whether you need Section 16 programs for public companies, insider trading policies, 409A compliance for private companies, or international regulatory compliance, we provide expert guidance and implementation support.'
		},
		{
			title: 'Plan Document Services',
			description:
				'Expert review and drafting of equity plan documents, grant agreements, policies, and procedures. We ensure your documents are legally sound, operationally practical, and aligned with your program objectives while providing the flexibility you need.'
		},
		{
			title: 'Change Management',
			description:
				'Successfully navigate changes to your equity program through structured change management. We help you communicate changes effectively, train stakeholders, manage resistance, and ensure smooth adoption of new processes, systems, or plan designs.'
		}
	];

	const benefits = [
		{
			title: 'Strategic Alignment',
			description:
				'Your equity program should support your broader business and talent strategies, not exist in isolation. We ensure your plan design, grant practices, and operational processes align with and reinforce your organizational objectives.'
		},
		{
			title: 'Operational Excellence',
			description:
				'Well-designed processes run smoothly, require less manual effort, and produce better outcomes. Our process optimization approach eliminates waste, reduces errors, and frees your team to focus on strategic initiatives rather than firefighting.'
		},
		{
			title: 'Risk Management',
			description:
				'Equity administration carries regulatory, financial, and reputational risks. Our best practice approach helps you identify and mitigate these risks through proper controls, clear documentation, and compliance programs that protect your organization.'
		},
		{
			title: 'Knowledge & Capability Building',
			description:
				'Our consulting engagements build internal capability, not dependency. Through training, documentation, and knowledge transfer, we ensure your team has the skills and confidence to sustain excellence after our engagement concludes.'
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
				'<p>We begin by documenting your current equity administration processes through interviews, observation, and document review. We then analyze these processes to identify inefficiencies, risks, manual work that could be automated, and gaps in controls or documentation. We provide detailed recommendations for improvements and help you prioritize and implement optimizations. Many clients see significant time savings, reduced errors, and improved compliance from process optimization engagements.</p>'
		},
		{
			question: 'Can you help us establish best practices for our equity program?',
			answer:
				'<p>Absolutely. We bring extensive knowledge of industry best practices across equity administration. This includes operational best practices (process design, quality control, documentation), compliance best practices (regulatory requirements, internal controls, audit readiness), and strategic best practices (plan design, competitive positioning, participant experience). We help you implement practices appropriate for your size, industry, and maturity level.</p>'
		},
		{
			question: 'Do you provide training for our equity administration team?',
			answer:
				"<p>Yes, we offer comprehensive training programs tailored to your team's needs. This can include equity compensation fundamentals, platform-specific system training, process-specific training (e.g., grant processing, vesting, exercise), regulatory compliance training, and train-the-trainer programs. We customize content and delivery to match your team's experience level and learning preferences, combining presentations, hands-on exercises, and reference materials.</p>"
		},
		{
			question: 'How do you help with compliance requirements?',
			answer:
				'<p>We provide expert guidance on all equity-related compliance requirements including Section 16 compliance for public companies, insider trading policy development and implementation, 409A compliance for private companies, securities law compliance, international tax and regulatory requirements, and audit readiness. We help you understand requirements, design compliant processes, implement necessary controls, and document everything appropriately.</p>'
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
	{@html `<script type="application/ld+json">${JSON.stringify(generateServiceSchema())}</script>`}
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
				<h1 class={clsx(styles.h1, 'text-white')}>Equity Plan & Process Design Services</h1>
			</div>
			<p class="mx-auto max-w-3xl text-lg font-light text-white">
				Design and optimize your equity compensation program for maximum effectiveness. Strategic
				guidance from plan design through operational excellence.
			</p>
		</div>
	</section>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-16">
				<RedBar />
				<h2 class={styles.h2}>Strategic Equity Program Design & Optimization</h2>
				<div class="prose max-w-4xl text-lg text-stone-700 font-light">
					<p>
						Effective equity compensation programs don't happen by accident. They require thoughtful
						design, efficient processes, strong controls, and continuous refinement. Whether you're
						establishing a new equity program, optimizing an existing one, or preparing for a major
						transition, strategic planning and smart process design create the foundation for
						success.
					</p>
					<p>
						At AEP, we help both private and public companies design equity programs that align with
						business objectives, attract and retain talent, and operate efficiently. Our consulting
						approach combines strategic thinking with operational practicality. We don't just
						recommend what sounds good in theory—we design solutions that actually work in your
						environment with your constraints.
					</p>
					<p>
						Our team brings deep expertise in equity plan design, regulatory compliance, operational
						best practices, and industry trends. We've worked with hundreds of companies across
						industries and stages, giving us perspective on what works, what doesn't, and how to
						avoid common pitfalls. We partner with you to build programs and processes that deliver
						results while managing risk and controlling costs.
					</p>
				</div>
			</div>

			<div class="grid gap-8 mt-20">
				<RedBar />
				<h2 class={styles.h2}>Our Plan & Process Design Services</h2>
				<div class={clsx('grid gap-6 mt-8', 'md:grid-cols-2')}>
					{#each features as feature}
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
				<h2 class={styles.h2}>Comprehensive Design & Consulting Services</h2>
				<p class="text-lg text-stone-600 font-light max-w-3xl">
					From initial plan design to ongoing optimization, we provide expert guidance across all
					aspects of your equity program
				</p>
			</div>

			<div class={clsx('grid gap-6', 'md:grid-cols-2', 'lg:grid-cols-3')}>
				{#each designServices as service}
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
				<h2 class={styles.h2}>The Value of Expert Design & Optimization</h2>
			</div>

			<div class={clsx('grid gap-6', 'md:grid-cols-2')}>
				{#each benefits as benefit}
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
				<h2 class={styles.h2}>Our Consulting Approach</h2>
			</div>

			<div class="grid gap-8 text-white prose prose-lg max-w-none prose-invert">
				<div>
					<h3 class={clsx(styles.h3)}>1. Understand Your Context</h3>
					<p class="font-light text-white/90">
						We begin by deeply understanding your business, culture, objectives, and constraints.
						This context is essential for designing solutions that fit your organization rather than
						forcing you into generic frameworks.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3)}>2. Analyze Current State</h3>
					<p class="font-light text-white/90">
						Through document review, process observation, stakeholder interviews, and data analysis,
						we gain a complete picture of your current program, processes, and challenges. This
						assessment forms the foundation for our recommendations.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3)}>3. Design Optimal Solutions</h3>
					<p class="font-light text-white/90">
						We develop recommendations grounded in best practices but tailored to your specific
						needs. Our designs balance competing objectives—effectiveness vs. simplicity, automation
						vs. control, flexibility vs. governance—to create practical solutions.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3)}>4. Support Implementation</h3>
					<p class="font-light text-white/90">
						Good ideas only create value when successfully implemented. We provide hands-on support
						to help you execute changes, including project management, change management, training,
						documentation, and ongoing coaching until new processes are fully adopted.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3)}>5. Enable Continuous Improvement</h3>
					<p class="font-light text-white/90">
						We equip your team with frameworks, tools, and knowledge to sustain improvements and
						continue optimizing over time. Our goal is building internal capability, not creating
						dependency on external consultants.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-4xl">
			<div class="grid gap-8 mb-12">
				<RedBar />
				<h2 class={styles.h2}>Who Benefits from Our Consulting Services</h2>
			</div>

			<div class="grid gap-8 text-stone-700 prose prose-lg max-w-none">
				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>
						Companies Establishing New Equity Programs
					</h3>
					<p class="font-light">
						Getting it right from the start prevents costly mistakes and rework. We help you design
						plans, select platforms, establish processes, and build internal capability to manage
						your program effectively from day one.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>
						Organizations with Underperforming Programs
					</h3>
					<p class="font-light">
						If your equity program feels inefficient, risky, or misaligned with objectives, we can
						help. Through comprehensive assessment and redesign, we transform struggling programs
						into well-oiled operations that support your business.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>
						Companies Preparing for Major Transitions
					</h3>
					<p class="font-light">
						IPOs, significant growth, M&A, and other transitions often require program redesign. We
						help you proactively adapt your equity program to meet new requirements and scale with
						your evolving business.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>
						Teams Needing Knowledge & Skill Development
					</h3>
					<p class="font-light">
						Build internal expertise through our training and coaching services. We transfer
						knowledge that empowers your team to manage your program confidently and competently
						without continuous external support.
					</p>
				</div>
			</div>
		</div>
	</section>

	<FAQ {faqs} serviceName="Plan & Process Design" />

	<CustomerReviews />

	<FooterCallout />
</main>
