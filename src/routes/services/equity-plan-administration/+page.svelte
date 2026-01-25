<script lang="ts">
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

	const title = 'Expert Equity Plan Administration Services | Accelerated Equity Plans';
	const description =
		'Professional equity plan administration services including comprehensive equity management, employee education, outsourced administration, and scalable support for private and public companies.';
	const path = '/services/equity-plan-administration';

	const features = [
		{
			icon: Bank,
			title: 'Comprehensive Equity Management',
			description:
				'End-to-end management of your equity compensation program, from initial grant issuance through vesting, exercise, and settlement. We handle all aspects of the grant lifecycle while collaborating seamlessly with your Payroll, HR, Accounting, Legal, and Treasury teams to ensure smooth execution and regulatory compliance.'
		},
		{
			icon: Education,
			title: 'Employee Education & Onboarding',
			description:
				'Empower your employees with clear, accessible education about their equity compensation. We provide comprehensive resources, personalized onboarding sessions, and ongoing support to help employees understand the value of their equity awards and make informed decisions throughout their equity journey.'
		},
		{
			icon: People,
			title: 'Outsourced Administration & Scalable Support',
			description:
				'Let us take complete ownership of your equity plan administration. Our team provides ongoing, day-to-day management of your program with flexible staffing solutions that scale with your needs. Whether you need full outsourcing or targeted support for specific functions, we adapt to your workload and business requirements.'
		},
		{
			icon: Graph,
			title: 'Seasonal & Temporary Support',
			description:
				'Navigate peak periods with confidence. Our temporary staffing solutions provide experienced equity professionals exactly when you need them most—during annual grant cycles, year-end reporting, M&A transactions, or other high-volume periods. Seamlessly integrate our experts into your workflow without long-term commitments.'
		}
	];

	const benefits = [
		{
			title: 'Regulatory Compliance Expertise',
			description:
				'Stay ahead of complex regulatory requirements with our deep knowledge of SEC rules, tax regulations, and accounting standards. We ensure your equity program maintains full compliance with all applicable regulations, reducing risk and protecting your organization.'
		},
		{
			title: 'Process Efficiency & Automation',
			description:
				'Streamline your equity administration with optimized workflows and automated processes. We identify opportunities to reduce manual work, minimize errors, and free your team to focus on strategic initiatives rather than administrative tasks.'
		},
		{
			title: 'Vendor Platform Expertise',
			description:
				"Maximize the value of your equity management platform. Our team has extensive experience with all major vendor systems and can help you leverage advanced features, optimize configurations, and ensure you're getting the most from your technology investment."
		},
		{
			title: 'Flexible Engagement Models',
			description:
				'Choose the support model that fits your needs—from full outsourcing to targeted project assistance or temporary staffing. Our flexible engagement options let you access precisely the expertise you need, when you need it, without over-committing resources.'
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
				'<p>The onboarding timeline varies based on your plan complexity and data quality, but typically ranges from 2-6 weeks. We begin with a comprehensive assessment of your current processes and systems, followed by data migration, process documentation, and team training. Our structured onboarding approach ensures a smooth transition with minimal disruption to your operations.</p>'
		},
		{
			question: 'Do you work with our existing equity management system?',
			answer:
				'<p>Yes, we have extensive experience with all major equity management platforms including E*TRADE, Fidelity, Shareworks, Certent, Equity Edge Online, Carta, and many others. We can work within your existing system or help you evaluate and implement a new platform if needed. Our team stays current with platform updates and best practices across all major vendors.</p>'
		},
		{
			question: 'What level of support do you provide to our employees?',
			answer:
				'<p>We offer comprehensive participant support including educational materials, onboarding sessions for new grant recipients, ongoing Q&A support, and resources to help employees understand their equity compensation. We can serve as the first point of contact for employee questions or work in partnership with your internal team, depending on your preferences.</p>'
		},
		{
			question: 'How do you ensure data security and confidentiality?',
			answer:
				'<p>Data security is paramount in our operations. We implement industry-standard security protocols including encrypted data transmission, secure access controls, regular security audits, and strict confidentiality agreements. Our team is trained on data privacy best practices and we maintain comprehensive documentation of our security procedures.</p>'
		},
		{
			question: 'Can you help with equity compensation reporting and compliance?',
			answer:
				'<p>Absolutely. We provide comprehensive support for all equity-related reporting requirements including Form 3, 4, and 5 filings for Section 16 officers, proxy statement preparation, ASC 718 expense calculations, 423(b) ESPP compliance, and more. We stay current with regulatory changes and proactively adapt your program to maintain compliance.</p>'
		},
		{
			question: 'What makes your equity administration services different?',
			answer:
				'<p>Our team brings deep industry expertise combined with a client-first approach. Unlike large outsourcing firms, we provide personalized service with direct access to senior professionals. We focus on understanding your unique needs and designing solutions that fit your organization, rather than forcing you into a one-size-fits-all model. Our flexible engagement options and scalable support ensure you get exactly what you need.</p>'
		},
		{
			question: 'Do you provide support during peak periods only?',
			answer:
				'<p>We offer both ongoing administration and seasonal support options. Whether you need year-round management of your equity program or temporary assistance during peak periods like annual grant cycles, board meetings, or M&A transactions, we can tailor our services to your needs. Many clients start with project-based or seasonal support and expand to ongoing partnerships as their needs evolve.</p>'
		}
	];

	function generateServiceSchema() {
		return {
			'@context': 'https://schema.org',
			'@type': 'Service',
			name: 'Equity Plan Administration',
			provider: {
				'@type': 'Organization',
				name: 'Accelerated Equity Plans',
				url: 'https://www.acceleratedep.com'
			},
			description:
				'Specialized equity plan administration services including comprehensive equity management, employee education, outsourced administration, and scalable support solutions.',
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
	{@html `<script type="application/ld+json">${JSON.stringify(generateServiceSchema())}</script>`}
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
				<h1 class={clsx(styles.h1, 'text-white')}>Equity Plan Administration</h1>
			</div>
			<p class="mx-auto max-w-3xl text-lg font-light text-white">
				Expert administration services that simplify your equity compensation program. From grant
				management to employee education, we handle the complexity so you can focus on growing your
				business.
			</p>
		</div>
	</section>

	<section class="py-24 px-6 bg-white">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 mb-16">
				<RedBar />
				<h2 class={styles.h2}>Comprehensive Equity Plan Administration</h2>
				<div class="prose max-w-4xl text-lg text-stone-700 font-light">
					<p>
						Managing equity compensation programs has become increasingly complex. Between evolving
						regulatory requirements, sophisticated technology platforms, and the need to provide
						excellent participant experiences, many companies find themselves stretched thin trying
						to manage it all internally.
					</p>
					<p>
						At Accelerated Equity Plans, we specialize in taking this burden off your shoulders. Our
						team of dedicated equity professionals delivers tailored solutions that ensure
						regulatory compliance, streamline operations, and create positive experiences for your
						employees. Whether you need full outsourcing, targeted support for specific functions,
						or temporary assistance during peak periods, we have the expertise and flexibility to
						meet your needs.
					</p>
					<p>
						Our approach is built on three core principles: expertise, efficiency, and partnership.
						We bring deep knowledge of equity compensation regulations, best practices, and vendor
						platforms. We design streamlined processes that reduce manual work and minimize errors.
						And we work collaboratively with your team, adapting our services to complement your
						organization's unique structure and culture.
					</p>
				</div>
			</div>

			<div class="grid gap-8 mt-20">
				<RedBar />
				<h2 class={styles.h2}>Our Equity Administration Services</h2>
				<div class={clsx('grid gap-6 mt-8', 'md:grid-cols-2')}>
					{#each features as feature}
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
				<h2 class={styles.h2}>Benefits of Partnering with AEP</h2>
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
				<h2 class={styles.h2}>Who We Serve</h2>
			</div>

			<div class="grid gap-8 text-stone-700 prose prose-lg max-w-none">
				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>Private Companies</h3>
					<p class="font-light">
						For pre-IPO companies, we provide the expertise you need without the overhead of a
						full-time equity team. We help you establish solid processes from the start, implement
						best practices, and prepare for the complexities that come with growth. Our team has
						extensive experience supporting companies through rapid scaling, funding rounds, and
						eventual public offerings.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>Public Companies</h3>
					<p class="font-light">
						Public company equity administration demands expertise in SEC compliance, Section 16
						reporting, proxy statement preparation, and more. Our team brings deep knowledge of
						these requirements along with experience managing the high volumes and complexity that
						come with public company programs. We can augment your existing team or take full
						ownership of your equity administration.
					</p>
				</div>

				<div>
					<h3 class={clsx(styles.h3, 'text-stone-900')}>Companies Undergoing Transitions</h3>
					<p class="font-light">
						Whether you're preparing for an IPO, navigating an M&A transaction, implementing a new
						equity platform, or experiencing rapid growth, transitions create unique challenges. Our
						team has extensive experience supporting companies through these critical periods,
						providing the expertise and bandwidth you need exactly when you need it most.
					</p>
				</div>
			</div>
		</div>
	</section>

	<FAQ {faqs} serviceName="Equity Plan Administration" />

	<CustomerReviews />

	<FooterCallout />
</main>
