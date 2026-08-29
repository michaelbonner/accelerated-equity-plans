<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import * as Dialog from '$lib/components/ui/dialog';

	let applyModalOpen = $state(false);
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
			body: '<p>People at AEP take ownership of their work, share what they know, and make time to help one another. We take the work seriously without making the workplace stiff.</p>'
		},
		{
			icon: Key,
			title: 'Employee ownership',
			body: '<p>We believe employee ownership works best when people understand it. That belief shapes both our client work and the way we run AEP.</p>'
		},
		{
			icon: Growth,
			title: 'Growth',
			body: "<p>Whether you already know equity compensation or are building your career in the field, you'll have room to take on harder work and learn from experienced consultants.</p>"
		},
		{
			icon: LightningBolt,
			title: 'Dynamic team',
			body: '<p>Our team brings different backgrounds and specialties to the work. You will collaborate closely with colleagues while building expertise of your own.</p>'
		}
	];

	const careerOpportunities = [
		{
			icon: Bank,
			title: 'Equity consultant',
			description:
				'Manage day-to-day equity plan operations including grant processing, vesting schedules, exercises, and settlements. Work with RSUs, stock options, ESPPs, and other equity vehicles across major platforms like E*TRADE, Fidelity, and Shareworks.'
		},
		{
			icon: Education,
			title: 'Senior equity consultant',
			description:
				'Handle the more complex day-to-day operations across multiple systems and competing deadlines, run employee education sessions, and become the client contact your accounts rely on.'
		},
		{
			icon: Graph,
			title: 'Consulting manager',
			description:
				'Work with clients to improve their equity programs, implement new platforms, redesign processes, and advise on plan structure.'
		},
		{
			icon: DocumentCheck,
			title: 'Consulting director',
			description:
				'Build in-depth relationships, handle complex equity compensation scenarios, support SEC reporting for public companies, assist with ASC 718 calculations, and provide expertise on equity plan design and compliance matters.'
		}
	];

	const qualifications = [
		{
			title: 'Experience with equity platforms',
			description:
				'Familiarity with major equity management systems such as E*TRADE Corporate Services, Fidelity Stock Plan Services, Morgan Stanley Shareworks, Certent, Carta, or Equity Edge Online.'
		},
		{
			title: 'Knowledge of equity compensation',
			description:
				'Understanding of stock options (ISOs/NSOs), restricted stock units (RSUs), employee stock purchase plans (ESPPs), performance shares, and other equity award types.'
		},
		{
			title: 'Attention to detail',
			description:
				'The work involves sensitive financial data, calculations that have to be right the first time, and filings with deadlines. Small errors get expensive.'
		},
		{
			title: 'Communication skills',
			description:
				'Ability to explain complex equity concepts clearly to employees, collaborate with cross-functional teams, and build strong client relationships.'
		}
	];

	const faqs = [
		{
			question: 'What does an equity plan administration career involve?',
			answer:
				'<p>A career in equity plan administration involves supporting company stock ' +
				'compensation programs through transaction processing, data reconciliation, ' +
				'participant support, reporting coordination, and platform administration. If your ' +
				'company is looking for equity administration support rather than a job, visit our ' +
				'<a href="/services/equity-plan-administration">equity plan administration services</a> ' +
				'page.</p>'
		},
		{
			question: 'What qualifications do I need for an equity plan administration job?',
			answer:
				'<p>While formal degrees in finance, accounting, or business are helpful, many successful equity professionals come from diverse backgrounds including HR, operations, and customer service. Key qualifications include experience with equity management platforms, understanding of stock compensation mechanics, strong attention to detail, and excellent communication skills. Certifications like the Certified Equity Professional (CEP) designation can enhance your credentials.</p>'
		},
		{
			question: 'Do you offer remote or hybrid work options?',
			answer:
				'<p>Yes. Many positions are remote or hybrid. We care that you are reachable during client hours and present for the team, not where you sit.</p>'
		},
		{
			question: 'What career growth opportunities exist in equity compensation?',
			answer:
				'<p>Equity compensation is a growing field with strong career prospects. Starting roles often focus on transaction processing and participant support, with advancement opportunities into senior analyst positions, consulting roles, and management. Many professionals also specialize in areas like SEC compliance, international equity, M&A transactions, or equity plan design.</p>'
		},
		{
			question: 'What benefits does AEP offer employees?',
			answer:
				'<p>Health insurance, retirement plans, equity participation in AEP itself, and paid support for the CEP designation, including exam fees and study time. We also send people to industry conferences.</p>'
		},
		{
			question: 'How do I apply for a position at Accelerated Equity Plans?',
			answer:
				"<p>To apply, simply use the form above to submit your resume with a brief introduction about yourself and the type of role you're interested in. We review all applications and will reach out if there's a potential fit. Even if we don't have an immediate opening that matches your background, we keep qualified candidates in mind for future opportunities.</p>"
		},
		{
			question: 'What is the typical career path for an equity administrator?',
			answer:
				'<p>Many equity professionals start in entry-level roles processing transactions, managing participant inquiries, or supporting data reconciliation. With experience, you can advance to senior administrator or analyst roles handling more complex scenarios. From there, career paths diverge into consulting, management, specialization (such as SEC reporting or international equity), or strategic roles in equity plan design and program management.</p>'
		},
		{
			question: 'Do I need a Certified Equity Professional (CEP) certification to work at AEP?',
			answer:
				'<p>While CEP certification is not required to join our team, we highly value the designation and actively support employees pursuing it. The CEP is the credential the field recognizes. We provide study resources, exam preparation support, and cover certification costs for team members.</p>'
		}
	];

	function jsonLDScript() {
		const schema = JSON.stringify(generateCareersSchema());

		return `<script type="application/ld+json">${schema}</${'script'}>`;
	}

	function generateCareersSchema() {
		return {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: 'Equity Plan Administration Jobs & Careers',
			url: 'https://www.acceleratedep.com/careers',
			description,
			about: {
				'@type': 'Thing',
				name: 'Equity plan administration careers'
			},
			isPartOf: {
				'@type': 'WebSite',
				name: 'Accelerated Equity Plans',
				url: 'https://www.acceleratedep.com'
			},
			publisher: {
				'@type': 'Organization',
				name: 'Accelerated Equity Plans',
				url: 'https://www.acceleratedep.com'
			}
		};
	}

	function loadJobListingWidget() {
		if (document.getElementById('joblisting-widget-script')) return;

		const script = document.createElement('script');
		script.id = 'joblisting-widget-script';
		script.src = 'https://joblisting.app/widget.js';
		script.async = true;
		script.defer = true;
		script.onerror = () => {
			script.remove();
		};
		document.head.appendChild(script);
	}

	function openApplyModal() {
		applyModalOpen = true;
		loadJobListingWidget();
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
	{@html jsonLDScript()}
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
				<h1 class={styles.h1}>Equity plan administration jobs & careers</h1>
				<div class="max-w-full prose">
					<p class="mx-auto mt-6 max-w-3xl text-lg font-light leading-8 text-white">
						We hire equity professionals at every level, from people processing their first grants
						to consultants who have taken a company public. Ten of the seventeen people here are
						Certified Equity Professionals, and we pay for the next person to sit the exam.
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
				<h2 class={styles.h3}>Send us your resume</h2>
				<p>We keep resumes on file and reach out when a role opens that fits.</p>
				<div class="mt-2">
					<button onclick={openApplyModal} class={styles.redButton}>Join the AEP Team!</button>
				</div>
			</div>
		</div>
	</section>

	<Breadcrumbs items={[{ name: 'Careers', href: '/careers' }]} />

	<div class="px-6">
		<section class={clsx('max-w-7xl mx-auto py-24', 'md:py-36')}>
			<div class="grid gap-2">
				<RedBar />
				<h2 class={styles.h2}>Why work for us?</h2>
			</div>
			<div class={clsx('max-w-7xl mx-auto grid gap-4 mt-12', 'sm:grid-cols-2', 'lg:grid-cols-4')}>
				{#each reasonsToWorkForUs as reason (reason.title)}
					<div
						class={clsx(
							'p-6 flex flex-col justify-start items-start gap-4 rounded-xl text-white transition-transform bg-black',
							'hover:-translate-y-1'
						)}
					>
						<div class="inline-block p-3 rounded-2xl bg-white/10">
							<reason.icon />
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
					<h2 class={styles.h2}>Careers in equity plan administration</h2>
					<div class="prose max-w-4xl text-lg text-stone-700 font-light">
						<p>
							Equity plan administration sits between finance, HR, and the systems that hold the
							records. It is a small field, and the people in it tend to stay, because the knowledge
							takes years to build and transfers well between companies.
						</p>
						<p>
							At AEP you work across several client programs instead of one. In a year you might
							process routine grants, migrate a company onto a new platform, and work an M&A award
							conversion, which is more variety than most in-house roles offer.
						</p>
					</div>
				</div>

				<div class="grid gap-8 mt-24">
					<RedBar />
					<h2 class={styles.h2}>Types of equity administration roles</h2>
					<div class={clsx('grid gap-6 mt-4', 'md:grid-cols-2')}>
						{#each careerOpportunities as opportunity (opportunity.title)}
							<div
								class={clsx(
									'p-8 flex flex-col gap-4 rounded-xl bg-red-700 text-white transition-transform',
									'hover:-translate-y-1'
								)}
							>
								<div class="inline-block p-3 rounded-2xl bg-white/10 w-fit">
									<opportunity.icon />
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
					<h2 class={styles.h2}>What we look for</h2>
					<p class="text-lg text-stone-700 font-light max-w-4xl">
						Requirements vary by role, but these four come up in every one.
					</p>
				</div>

				<div class={clsx('grid gap-6', 'md:grid-cols-2')}>
					{#each qualifications as qualification (qualification.title)}
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
					<h2 class={styles.h2}>Your path to a stock compensation career</h2>
				</div>

				<div class="grid gap-8 text-stone-700 prose prose-lg max-w-none">
					<div>
						<h3 class={clsx(styles.h3, 'text-stone-900')}>Entry-level opportunities</h3>
						<p class="font-light">
							We take candidates from finance, accounting, HR, and operations with no equity
							background. Entry-level roles cover transaction processing, data management, and
							participant support, which is where everyone in this field starts.
						</p>
					</div>

					<div>
						<h3 class={clsx(styles.h3, 'text-stone-900')}>Experienced professionals</h3>
						<p class="font-light">
							We look for experience in stock option administration, RSU processing, ESPP
							management, SEC compliance, and platform administration. Senior roles include
							mentoring and scoping client work.
						</p>
					</div>

					<div>
						<h3 class={clsx(styles.h3, 'text-stone-900')}>Career changers</h3>
						<p class="font-light">
							Good equity administrators come out of customer service, banking, legal support, and
							corporate HR. The work rewards people who are careful with detail and comfortable
							explaining a number to someone who is worried about it.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="py-24 bg-white">
			<div class="mx-auto max-w-4xl">
				<div class="grid gap-8 mb-12">
					<RedBar />
					<h2 class={styles.h2}>Professional development</h2>
				</div>

				<div class="grid gap-8 text-stone-700 prose prose-lg max-w-none">
					<p class="font-light">What we provide:</p>

					<ul class="font-light space-y-4">
						<li>
							<strong class="text-stone-900">Certified Equity Professional (CEP) support.</strong> We
							cover exam fees, provide study materials, and offer paid study time for team members pursuing
							their CEP designation.
						</li>
						<li>
							<strong class="text-stone-900">Industry conferences.</strong> We send people to the major
							equity compensation conferences each year.
						</li>
						<li>
							<strong class="text-stone-900">Cross-training.</strong> You rotate across client assignments
							rather than staying on one account.
						</li>
						<li>
							<strong class="text-stone-900">Mentorship.</strong> You learn directly from consultants
							who have run these programs at issuers and at vendors.
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>

	<FAQ {faqs} serviceName="Equity Plan Administration Careers" />

	<FooterCallout />
</main>

<Dialog.Root bind:open={applyModalOpen}>
	<Dialog.Content
		showCloseButton={false}
		class="flex flex-col w-full p-0 gap-0 max-h-[min(90dvh,90vh)] sm:max-w-3xl overflow-hidden border-0"
	>
		<Dialog.Header
			class="shrink-0 bg-black px-6 py-4 rounded-t-xl flex-row items-center justify-between"
		>
			<Dialog.Title class="font-headings text-xl font-medium italic text-white"
				>Open Positions</Dialog.Title
			>
			<Dialog.Close
				aria-label="Close"
				class="cursor-pointer text-white/60 transition-colors hover:text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</Dialog.Close>
		</Dialog.Header>

		<div class="h-1 shrink-0 bg-red-800"></div>

		<div class="min-h-0 overflow-y-auto px-6 py-6 bg-white">
			<p class="mb-4 text-stone-600">Select a position below to learn more and apply.</p>
			<div data-joblisting-widget="bd38efd6-f022-484f-afe8-0226533213fe"></div>
		</div>
	</Dialog.Content>
</Dialog.Root>
