<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import Bank from '$lib/components/icons/Bank.svelte';
	import Document from '$lib/components/icons/Document.svelte';
	import DocumentCheck from '$lib/components/icons/DocumentCheck.svelte';
	import Education from '$lib/components/icons/Education.svelte';
	import Graph from '$lib/components/icons/Graph.svelte';
	import Growth from '$lib/components/icons/Growth.svelte';
	import Key from '$lib/components/icons/Key.svelte';
	import LightningBolt from '$lib/components/icons/LightningBolt.svelte';
	import People from '$lib/components/icons/People.svelte';
	import HeroBg from '$lib/images/backgrounds/office-picture.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';

	const title = 'Equity Plan Administration Jobs & Careers | Accelerated Equity Plans';
	const description =
		'Explore equity plan administration jobs and stock compensation careers at Accelerated Equity Plans. Join our team of equity compensation professionals and build your career in equity administration.';
	const path = '/careers';

	const reasonsToWorkForUs = [
		{
			icon: People,
			title: 'Community',
			body: "<p>At AEP, we're more than just a workplace; we're a community of passionate individuals united by a shared commitment to a culture of ownership, continuous learning, and fostering an environment where growth and fun go hand in hand.</p>"
		},
		{
			icon: Key,
			title: 'Employee Ownership',
			body: "<p>If you're someone who believes in the transformative power of employee ownership and thrives in an environment that values collaboration, innovation, and personal development, then we want to hear from you.</p>"
		},
		{
			icon: Growth,
			title: 'Growth',
			body: "<p>We're seeking dedicated professionals to join our team. Whether you're an industry veteran or just starting your career, AEP offers exciting opportunities for growth, advancement, and making a meaningful impact.</p>"
		},
		{
			icon: LightningBolt,
			title: 'Dynamic Team',
			body: '<p>Join our dynamic team to make a meaningful impact, grow your skills, and have fun. At AEP, we value your unique talents and offer a supportive environment for career advancement.</p>'
		}
	];

	const careerOpportunities = [
		{
			icon: Bank,
			title: 'Equity Consultant',
			description:
				'Manage day-to-day equity plan operations including grant processing, vesting schedules, exercises, and settlements. Work with RSUs, stock options, ESPPs, and other equity vehicles across major platforms like E*TRADE, Fidelity, and Shareworks.'
		},
		{
			icon: Education,
			title: 'Senior Equity Consultant',
			description:
				"Manage more complex day-to-day equity plan operations, multiple system expertise, ability to handle multiple competing priorities, employee education, and build a foundational relationship to meet and exceed all clients' needs."
		},
		{
			icon: Graph,
			title: 'Consulting Manager',
			description:
				'Partner with clients to optimize their equity programs, implement new platforms, design efficient processes, and provide strategic guidance on equity compensation best practices.'
		},
		{
			icon: DocumentCheck,
			title: 'Consulting Director',
			description:
				'Build in-depth relationships, handle complex equity compensation scenarios, support SEC reporting for public companies, assist with ASC 718 calculations, and provide expertise on equity plan design and compliance matters.'
		}
	];

	const qualifications = [
		{
			title: 'Experience with Equity Platforms',
			description:
				'Familiarity with major equity management systems such as E*TRADE Corporate Services, Fidelity Stock Plan Services, Morgan Stanley Shareworks, Certent, Carta, or Equity Edge Online.'
		},
		{
			title: 'Knowledge of Equity Compensation',
			description:
				'Understanding of stock options (ISOs/NSOs), restricted stock units (RSUs), employee stock purchase plans (ESPPs), performance shares, and other equity award types.'
		},
		{
			title: 'Attention to Detail',
			description:
				'Strong analytical skills and meticulous attention to detail for handling sensitive financial data, complex calculations, and regulatory compliance requirements.'
		},
		{
			title: 'Communication Skills',
			description:
				'Ability to explain complex equity concepts clearly to employees, collaborate with cross-functional teams, and build strong client relationships.'
		}
	];

	const faqs = [
		{
			question: 'What is equity plan administration?',
			answer:
				"<p>Equity plan administration involves managing all aspects of a company's stock compensation programs. This includes processing stock option grants, managing RSU vesting schedules, handling ESPP enrollments and purchases, ensuring regulatory compliance, and supporting employees with their equity awards. It's a specialized field that combines finance, HR, legal, and technology expertise.</p>"
		},
		{
			question: 'What qualifications do I need for an equity plan administration job?',
			answer:
				'<p>While formal degrees in finance, accounting, or business are helpful, many successful equity professionals come from diverse backgrounds including HR, operations, and customer service. Key qualifications include experience with equity management platforms, understanding of stock compensation mechanics, strong attention to detail, and excellent communication skills. Certifications like the Certified Equity Professional (CEP) designation can enhance your credentials.</p>'
		},
		{
			question: 'Do you offer remote or hybrid work options?',
			answer:
				'<p>Yes, we offer flexible work arrangements including remote and hybrid options for many positions. We believe in empowering our team members to work in environments where they can be most productive while maintaining strong collaboration and communication with colleagues and clients.</p>'
		},
		{
			question: 'What career growth opportunities exist in equity compensation?',
			answer:
				'<p>Equity compensation is a growing field with strong career prospects. Starting roles often focus on transaction processing and participant support, with advancement opportunities into senior analyst positions, consulting roles, and management. Many professionals also specialize in areas like SEC compliance, international equity, M&A transactions, or equity plan design.</p>'
		},
		{
			question: 'What benefits does AEP offer employees?',
			answer:
				'<p>AEP offers a comprehensive benefits package including competitive compensation, health insurance, retirement plans, professional development opportunities, and equity participation in the company. We invest in our team through ongoing training, industry conference attendance, and support for professional certifications like the CEP program.</p>'
		},
		{
			question: 'How do I apply for a position at Accelerated Equity Plans?',
			answer:
				'<p>To apply, simply send your resume to <a href="mailto:info@acceleratedep.com" class="text-red-700 hover:text-red-800 underline">info@acceleratedep.com</a> with a brief introduction about yourself and the type of role you\'re interested in. We review all applications and will reach out if there\'s a potential fit. Even if we don\'t have an immediate opening that matches your background, we keep qualified candidates in mind for future opportunities.</p>'
		},
		{
			question: 'What is the typical career path for an equity administrator?',
			answer:
				'<p>Many equity professionals start in entry-level roles processing transactions, managing participant inquiries, or supporting data reconciliation. With experience, you can advance to senior administrator or analyst roles handling more complex scenarios. From there, career paths diverge into consulting, management, specialization (such as SEC reporting or international equity), or strategic roles in equity plan design and program management.</p>'
		},
		{
			question: 'Do I need a Certified Equity Professional (CEP) certification to work at AEP?',
			answer:
				'<p>While CEP certification is not required to join our team, we highly value the designation and actively support employees pursuing it. The CEP program demonstrates deep knowledge of equity compensation and commitment to the profession. We provide study resources, exam preparation support, and cover certification costs for team members.</p>'
		}
	];

	function generateJobPostingSchema() {
		return {
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Accelerated Equity Plans',
			url: 'https://www.acceleratedep.com',
			description:
				'Accelerated Equity Plans provides specialized equity plan administration services and employs equity compensation professionals across the United States.',
			sameAs: ['https://www.linkedin.com/company/accelerated-equity-plans/'],
			jobPostingAvailable: true,
			knowsAbout: [
				'Equity Plan Administration',
				'Stock Compensation',
				'RSU Administration',
				'Stock Option Management',
				'ESPP Administration',
				'SEC Compliance',
				'ASC 718 Reporting'
			]
		};
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-careers.jpg" />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />
	{@html `<script type="application/ld+json">${JSON.stringify(generateJobPostingSchema())}</script>`}
</svelte:head>

<main>
	<section class={styles.heroSection}>
		<!-- Background Div -->
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="Meeting in an office"
				class="object-cover size-full"
				fetchpriority="high"
				src={HeroBg}
			/>
		</div>
		<div class="absolute inset-0 bg-black/80 bg-blend-screen"></div>

		<!-- Should be foreground div in same container -->
		<div class={clsx('relative z-10 h-full', 'sm:px-8 sm:text-center')}>
			<div class={clsx('grid gap-4 prose-white max-w-5xl', 'sm:mx-auto')}>
				<h1 class={styles.h1}>Equity Plan Administration Jobs & Careers</h1>
				<div class="max-w-full prose">
					<p class="mx-auto mt-6 max-w-3xl text-lg font-light leading-8 text-white">
						Build your career in equity compensation with Accelerated Equity Plans. We're seeking
						talented professionals passionate about stock compensation, employee ownership, and
						delivering exceptional client service. Join a team where your expertise in equity plan
						administration makes a real impact.
					</p>
				</div>
			</div>

			<div
				class={clsx(
					'max-w-3xl mx-auto p-8 bg-white rounded-xl text-black text-left flex flex-col gap-4 mt-12',
					styles.cardHover
				)}
			>
				<div>
					<div class="inline-block p-3 bg-black rounded-2xl">
						<Document />
					</div>
				</div>
				<h2 class={styles.h3}>Send Us Your Resume</h2>
				<p>
					Interested in an equity plan administration career? We're always looking for talented
					professionals to join our team. Send your resume to <a
						class="underline text-red-700 hover:text-red-800"
						href="mailto:&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;"
						>&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;</a
					>.
				</p>
				<div class="mt-2">
					<a
						href="mailto:&#105;&#110;&#102;&#111;&#064;&#097;&#099;&#099;&#101;&#108;&#101;&#114;&#097;&#116;&#101;&#100;&#101;&#112;&#046;&#099;&#111;&#109;?subject=I'm interested in joining the AEP team!"
						class={styles.redButton}>Join the AEP Team!</a
					>
				</div>
			</div>
		</div>
	</section>

	<Breadcrumbs items={[{ name: 'Careers', href: '/careers' }]} />

	<div class="px-6">
		<section class={clsx('max-w-7xl mx-auto py-24', 'md:py-36')}>
			<div class="grid gap-2">
				<RedBar />
				<h2 class={styles.h2}>Why Work For Us?</h2>
			</div>
			<div class={clsx('max-w-7xl mx-auto grid gap-4 mt-12', 'sm:grid-cols-2', 'lg:grid-cols-4')}>
				{#each reasonsToWorkForUs as reason}
					<div
						class={clsx(
							'p-6 flex flex-col justify-start items-start gap-4 rounded-xl text-white transition-transform bg-black',
							'hover:-translate-y-1'
						)}
					>
						<div class="inline-block p-3 rounded-2xl bg-white/10">
							<svelte:component this={reason.icon} />
						</div>
						<h3 class={clsx(styles.h4)}>{reason.title}</h3>
						<div class="mx-auto max-w-3xl font-light text-white prose">
							{@html reason.body}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section class="py-24 bg-stone-100">
			<div class="mx-auto max-w-7xl">
				<div class="grid gap-8 mb-16">
					<RedBar />
					<h2 class={styles.h2}>Careers in Equity Plan Administration</h2>
					<div class="prose max-w-4xl text-lg text-stone-700 font-light">
						<p>
							Equity plan administration is a specialized and rewarding field at the intersection of
							finance, human resources, and technology. As more companies embrace employee ownership
							through stock compensation, the demand for skilled equity professionals continues to
							grow. Whether you're an experienced equity administrator or looking to transition into
							this dynamic field, AEP offers opportunities to build your expertise and advance your
							career.
						</p>
						<p>
							At Accelerated Equity Plans, you'll work with leading companies across industries,
							gaining exposure to diverse equity programs and complex scenarios. Our team handles
							everything from routine grant processing to sophisticated M&A transactions, giving you
							the breadth of experience that accelerates professional growth.
						</p>
					</div>
				</div>

				<div class="grid gap-8 mt-24">
					<RedBar />
					<h2 class={styles.h2}>Types of Equity Administration Roles</h2>
					<div class={clsx('grid gap-6 mt-4', 'md:grid-cols-2')}>
						{#each careerOpportunities as opportunity}
							<div
								class={clsx(
									'p-8 flex flex-col gap-4 rounded-xl bg-red-700 text-white transition-transform',
									'hover:-translate-y-1'
								)}
							>
								<div class="inline-block p-3 rounded-2xl bg-white/10 w-fit">
									<svelte:component this={opportunity.icon} />
								</div>
								<h3 class={styles.h3}>{opportunity.title}</h3>
								<p class="font-light leading-relaxed">{opportunity.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<section class="py-24 bg-white">
			<div class="mx-auto max-w-7xl">
				<div class="grid gap-8 mb-12">
					<RedBar />
					<h2 class={styles.h2}>What We Look For</h2>
					<p class="text-lg text-stone-700 font-light max-w-4xl">
						We hire equity compensation professionals at all experience levels. While specific
						requirements vary by role, here are the core skills and qualifications we value in
						candidates for equity plan administration jobs.
					</p>
				</div>

				<div class={clsx('grid gap-6', 'md:grid-cols-2')}>
					{#each qualifications as qualification}
						<div class="p-8 bg-stone-100 rounded-lg">
							<h3 class={clsx(styles.h3, 'mb-4 text-stone-900')}>{qualification.title}</h3>
							<p class="text-stone-700 font-light leading-relaxed">{qualification.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="py-24 bg-stone-100">
			<div class="mx-auto max-w-4xl">
				<div class="grid gap-8 mb-12">
					<RedBar />
					<h2 class={styles.h2}>Your Path to a Stock Compensation Career</h2>
				</div>

				<div class="grid gap-8 text-stone-700 prose prose-lg max-w-none">
					<div>
						<h3 class={clsx(styles.h3, 'text-stone-900')}>Entry-Level Opportunities</h3>
						<p class="font-light">
							New to equity compensation? We welcome candidates from finance, accounting, HR, and
							operations backgrounds who are eager to learn. Entry-level roles focus on transaction
							processing, data management, and participant support, providing a solid foundation in
							equity plan administration fundamentals.
						</p>
					</div>

					<div>
						<h3 class={clsx(styles.h3, 'text-stone-900')}>Experienced Professionals</h3>
						<p class="font-light">
							Bring your equity expertise to AEP and expand your skills working with diverse clients
							and complex scenarios. We value professionals with experience in stock option
							administration, RSU processing, ESPP management, SEC compliance, and equity platform
							management. Senior roles offer opportunities to mentor others and shape client
							solutions.
						</p>
					</div>

					<div>
						<h3 class={clsx(styles.h3, 'text-stone-900')}>Career Changers</h3>
						<p class="font-light">
							Considering a transition into equity compensation? Your transferable skills matter.
							We've seen successful equity professionals emerge from customer service, banking,
							legal support, and corporate HR roles. If you're detail-oriented, analytically minded,
							and passionate about learning, we'd love to hear from you.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="py-24 bg-white">
			<div class="mx-auto max-w-4xl">
				<div class="grid gap-8 mb-12">
					<RedBar />
					<h2 class={styles.h2}>Professional Development</h2>
				</div>

				<div class="grid gap-8 text-stone-700 prose prose-lg max-w-none">
					<p class="font-light">
						We invest in our team's growth because your success drives our success. AEP provides
						comprehensive professional development opportunities to help you build expertise in
						equity plan administration and advance your career.
					</p>

					<ul class="font-light space-y-4">
						<li>
							<strong class="text-stone-900">Certified Equity Professional (CEP) Support:</strong> We
							cover exam fees, provide study materials, and offer paid study time for team members pursuing
							their CEP designation.
						</li>
						<li>
							<strong class="text-stone-900">Industry Conferences:</strong> Attend leading equity compensation
							conferences to stay current on trends, expand your network, and learn from industry experts.
						</li>
						<li>
							<strong class="text-stone-900">Cross-Training:</strong> Gain exposure to different aspects
							of equity administration through cross-training opportunities and diverse client assignments.
						</li>
						<li>
							<strong class="text-stone-900">Mentorship:</strong> Learn from experienced equity professionals
							who are invested in your growth and success.
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>

	<FAQ {faqs} serviceName="Equity Plan Administration Careers" />

	<FooterCallout />
</main>
