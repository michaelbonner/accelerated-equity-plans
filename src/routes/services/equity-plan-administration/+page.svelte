<script lang="ts">
	import { resolve } from '$app/paths';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CustomerReviews from '$lib/components/CustomerReviews.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import Bank from '$lib/components/icons/Bank.svelte';
	import Education from '$lib/components/icons/Education.svelte';
	import Graph from '$lib/components/icons/Graph.svelte';
	import People from '$lib/components/icons/People.svelte';
	import HeroBg from '$lib/images/backgrounds/high-rise-buildings-2.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';

	const title =
		'Stock Plan Administration & Equity Administration Services | Accelerated Equity Plans';
	const description =
		'Outsourced stock plan administration and equity administration services for private and public companies, including compliance, employee support, and flexible coverage.';
	const path = '/services/equity-plan-administration';

	const features = [
		{
			icon: Bank,
			title: 'Full grant lifecycle management',
			description:
				'We manage the grant lifecycle from issuance through vesting, exercise, and settlement. Our administrators coordinate directly with Payroll, HR, Accounting, Legal, and Treasury so transactions are processed correctly and on time.'
		},
		{
			icon: Education,
			title: 'Employee education & onboarding',
			description:
				'We give employees clear materials, onboarding sessions, and a place to bring their questions. They learn what they have been granted, how it works, and where to find the information they need.'
		},
		{
			icon: People,
			title: 'Outsourced administration & scalable support',
			description:
				'Our team can own day-to-day administration or take responsibility for selected workflows. You can increase or reduce support as transaction volume, deadlines, and internal capacity change.'
		},
		{
			icon: Graph,
			title: 'Interim, fractional & on-demand support',
			description:
				'Bring in an interim administrator for a vacancy, a fractional administrator for ongoing part-time coverage, or short-term help for annual grants, year-end reporting, and M&A. You get an experienced equity professional for the period you need.'
		}
	];

	const benefits = [
		{
			title: 'Regulatory compliance expertise',
			description:
				'Our team works with SEC reporting, tax rules, accounting standards, and plan requirements every day. We build the required checks and deadlines into the administration process to reduce missed filings and avoidable errors.'
		},
		{
			title: 'Process efficiency & automation',
			description:
				'We find repetitive work, unnecessary handoffs, and places where errors enter the process. Then we simplify or automate those steps so your team spends less time correcting data and moving files.'
		},
		{
			title: 'Vendor platform expertise',
			description:
				'Our team works across major equity platforms. We can correct configurations, introduce useful features, and remove workarounds that no longer make sense.'
		},
		{
			title: 'Flexible engagement models',
			description:
				'Choose full outsourcing, support for a defined set of tasks, or temporary staffing. The engagement can change when your workload or internal team changes.'
		}
	];

	const faqs = [
		{
			question: 'What types of equity plans can you administer?',
			answer:
				'<p>We administer all types of equity compensation plans including Stock Options (ISO and NSO), Restricted Stock Units (RSUs), Restricted Stock Awards (RSAs), Performance Share Units (PSUs), Employee Stock Purchase Plans (ESPPs), Phantom Stock, Stock Appreciation Rights (SARs), and more. Our experience spans both private and public companies across various industries.</p>'
		},
		{
			question: 'How quickly can you onboard our equity plan?',
			answer:
				'<p>The timeline varies with plan complexity and data quality, but it typically runs 2-6 weeks. We start by assessing your current processes and systems, then migrate the data, document the processes, and train your team.</p>'
		},
		{
			question: 'Do you work with our existing equity management system?',
			answer:
				'<p>Yes. We work across E*TRADE, Fidelity, Shareworks, Certent, Equity Edge Online, and Carta. We can work inside your existing system, or help you evaluate and implement a new one.</p>'
		},
		{
			question: 'What level of support do you provide to our employees?',
			answer:
				'<p>We provide educational materials, onboarding sessions for new grant recipients, ongoing Q&A, and resources that explain how an award works. We can be the first point of contact for employee questions, or back up your internal team.</p>'
		},
		{
			question: 'How do you ensure data security and confidentiality?',
			answer:
				'<p>We use encrypted data transmission, access controls, regular security audits, and signed confidentiality agreements, and we document those procedures. Our team is trained on data privacy handling.</p>'
		},
		{
			question: 'Can you help with equity compensation reporting and compliance?',
			answer:
				'<p>Yes. We support Form 3, 4, and 5 filings for Section 16 officers, proxy statement preparation, ASC 718 expense calculations, Section 6039 information returns, and 423(b) ESPP compliance. We track regulatory changes and adjust your program when the rules change.</p>'
		},
		{
			question: 'Do you handle Section 6039 reporting for ISOs and ESPPs?',
			answer:
				'<p>Yes. We manage the full Section 6039 reporting process, including preparing and furnishing Form 3921 for incentive stock option (ISO) exercises and Form 3922 for ESPP share transfers, distributing participant statements by the January 31 deadline, and filing the corresponding information returns with the IRS. We reconcile the underlying transaction data against your equity platform to ensure every reportable event is captured accurately and on time.</p>'
		},
		{
			question: 'Can you provide an interim or fractional stock plan administrator?',
			answer:
				'<p>Yes. We offer interim stock plan administrators to cover a vacancy or leave of absence, fractional administrators who manage your program on a part-time, ongoing basis, and on-demand stock administration for short-term, project-based needs. This keeps required administration and compliance work moving without the cost or commitment of a full-time hire.</p>'
		},
		{
			question: 'What makes your equity administration services different?',
			answer:
				'<p>You work directly with senior administrators rather than a support queue. Ten of the seventeen people on our team are Certified Equity Professionals, and we scope each engagement around the tasks you actually need covered.</p>'
		},
		{
			question: 'Do you provide support during peak periods only?',
			answer:
				'<p>We offer both ongoing administration and seasonal support options. Whether you need year-round management of your equity program or temporary assistance during peak periods like annual grant cycles, board meetings, or M&A transactions, we can tailor our services to your needs. Many clients start with project-based or seasonal support and expand to ongoing partnerships as their needs evolve.</p>'
		}
	];

	function jsonLDScript() {
		return `<script type="application/ld+json">${JSON.stringify(generateServiceSchema())}</${'script'}>`;
	}

	function generateServiceSchema() {
		return {
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: 'Stock Plan Administration & Equity Administration Services',
			provider: {
				'@type': 'Organization',
				name: 'Accelerated Equity Plans',
				url: 'https://www.acceleratedep.com'
			},
			description,
			areaServed: 'United States',
			serviceType: 'Equity Plan Administration',
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Equity Plan Administration Services',
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
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-equity-admin.jpg" />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />
	{@html jsonLDScript()}
</svelte:head>

<main>
	<section class={styles.heroSection}>
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="High rise buildings representing corporate equity administration"
				class="object-cover size-full"
				fetchpriority="high"
				src={HeroBg}
			/>
		</div>
		<div class="absolute inset-0 bg-black/80"></div>
		<div class={clsx('relative grid gap-8', 'md:text-center')}>
			<div class="grid gap-4">
				<RedBar classes="md:mx-auto" />
				<h1 class={clsx(styles.h1, 'text-white')}>
					Expert stock plan & equity plan administration services
				</h1>
			</div>
			<p class="mx-auto max-w-3xl text-lg font-light text-white">
				We run your equity compensation program day to day, from grant processing and vesting
				through employee questions and year-end reporting.
			</p>
		</div>
	</section>

	<Breadcrumbs
		items={[
			{ name: 'Services', href: '/services' },
			{ name: 'Equity Plan Administration', href: '/services/equity-plan-administration' }
		]}
	/>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-16">
				<RedBar />
				<h2 class={styles.h2}>Comprehensive stock plan administration for growing companies</h2>
				<div class="prose max-w-4xl text-lg text-stone-700 font-light">
					<p>
						Most equity teams are small, and often it is one person. That person is expected to know
						SEC reporting, tax withholding, an administration platform, and how to answer a
						participant who does not understand their grant.
					</p>
					<p>
						AEP takes that work on. You can hand us the whole program, a defined set of tasks, or an
						interim, fractional, or on-demand stock plan administrator during peak periods.
					</p>
					<p>
						We work in your systems, on your calendar, and alongside the people who already own the
						plan. Where a process creates manual work or repeat errors, we redesign it and document
						what changed.
					</p>
					<p>
						If you are evaluating whether to keep equity administration in-house or partner with an
						equity management company, our team can support the operating model that fits your
						business: fully outsourced administration, co-sourced support, temporary coverage, or
						project-based help during reporting cycles and strategic transactions.
					</p>
				</div>
			</div>

			<div class="grid gap-8 mt-20">
				<RedBar />
				<h2 class={styles.h2}>What our equity administration team handles</h2>
				<div class="grid gap-6 md:grid-cols-3">
					<div class="rounded-lg border border-stone-200 bg-stone-50 p-6">
						<h3 class={clsx(styles.h4, 'mb-3 text-stone-900')}>Day-to-day stock plan operations</h3>
						<p class="font-light leading-relaxed text-stone-700">
							Grant processing, vesting events, exercises, releases, ESPP activity, data
							reconciliation, participant support, and recurring administration workflows.
						</p>
					</div>
					<div class="rounded-lg border border-stone-200 bg-stone-50 p-6">
						<h3 class={clsx(styles.h4, 'mb-3 text-stone-900')}>Reporting & compliance support</h3>
						<p class="font-light leading-relaxed text-stone-700">
							Section 16, ASC 718 coordination, proxy and audit support, Section 6039 reporting,
							participant statements, and controls that reduce filing and data risk.
						</p>
					</div>
					<div class="rounded-lg border border-stone-200 bg-stone-50 p-6">
						<h3 class={clsx(styles.h4, 'mb-3 text-stone-900')}>Flexible administration coverage</h3>
						<p class="font-light leading-relaxed text-stone-700">
							Interim, fractional, outsourced, and on-demand stock plan administrator support when
							your team needs specialist capacity without adding a full-time hire.
						</p>
					</div>
				</div>
				<div class="prose max-w-4xl text-lg text-stone-700 font-light">
					<p>
						For additional context, read our guides to
						<a href={resolve('/blog/stock-plan-administration-guide')}>stock plan administration</a
						>,
						<a href={resolve('/blog/section-6039-reporting-guide')}>Section 6039 reporting</a>, and
						<a href={resolve('/blog/equity-compensation-services')}>equity compensation services</a
						>.
					</p>
				</div>
			</div>

			<div class="grid gap-8 mt-20">
				<RedBar />
				<h2 class={styles.h2}>Our equity administration services</h2>
				<div class={clsx('grid gap-6 mt-8', 'md:grid-cols-2')}>
					{#each features as feature (feature.title)}
						<div
							class={clsx(
								'p-8 flex flex-col gap-4 rounded-xl bg-red-700 text-white transition-transform',
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
				<h2 class={styles.h2}>Benefits of partnering with AEP</h2>
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
				<h2 class={styles.h2}>Who we serve</h2>
			</div>

			<div class="grid gap-8 text-stone-700 prose prose-lg max-w-none">
				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>Private companies</h3>
					<p class="font-light">
						Pre-IPO companies get an experienced administrator without a full-time hire. We set up
						the processes and records early, which is what makes a later funding round, audit, or
						public offering manageable.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>Public companies</h3>
					<p class="font-light">
						Public company programs run on deadlines: Section 16 filings, proxy season, ASC 718
						support, and Section 6039 statements by January 31. We can take those on, or add
						capacity to the team that already does.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>Companies undergoing transitions</h3>
					<p class="font-light">
						Whether you're <a href={resolve('/services/advanced-project-support')}
							>preparing for an IPO or navigating an M&A transaction</a
						>,
						<a href={resolve('/services/vendor-support')}>implementing a new equity platform</a>, or
						experiencing rapid growth, these are the periods when equity work outruns the team that
						handles it. We add administrators for the duration.
					</p>
				</div>
			</div>
		</div>
	</section>

	<FAQ {faqs} serviceName="Equity Plan Administration" />

	<CustomerReviews />

	<FooterCallout />
</main>
