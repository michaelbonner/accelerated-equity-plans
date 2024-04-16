<script lang="ts">
	import { reviews } from '$lib/dataSets';
	import ReviewList from '$lib/components/ReviewList.svelte';
	import PartnerRibbon from '$lib/components/PartnerRibbon.svelte';
	import MeetTheTeam from '$lib/components/MeetTheTeam.svelte';
	let activeArticle = 'tempSupport';

	function setActiveArticle(article: string) {
		activeArticle = article;
	}
</script>

<svelte:head>
	<title>Accelerated Equity Plans</title>
	<meta
		name="description"
		content="Accelerated Equity Plans helps you create, manage, and implement equity compensation plans."
	/>
	<meta property="og:title" content="Accelerated Equity Plans" />
	<meta
		property="og:description"
		content="Accelerated Equity Plans helps you create, manage, and implement equity compensation plans."
	/>
	<meta
		property="og:image"
		content="https://accelerated-equity-plans.vercel.app/images/og-image.png"
	/>
</svelte:head>

<div class="isolate bg-white">
	<main>
		<!--  Hero Div -->
		<div class="relative px-6 lg:px-8 text-white bg-black h-content">
			<!-- Background Div -->
			<div
				class="absolute inset-0 bg-cover -z-1"
				style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url('/images/financialchart.png');"
			></div>

			<!-- Should be foreground div in same container -->
			<div class="relative z-10 sm:px-8">
				<div class="flex flex-col md:w-[40vw] pt-20 pb-32 sm:pt-48 sm:pb-20">
					<h1 class="text-2xl mt-10 md:mt-0 font-bold tracking-tight sm:text-6xl">
						Maximize Your Equity's Potential
					</h1>
					<p class="mt-6 text-lg leading-8">
						Bringing industry leading expertise and support to your equity programs to deliver a
						best-in-class experience for your team, partners and participants. Founded by <span
							class="font-bold">industry experts</span
						> with issuer and vendor experience for both Private and Public organizations, we can handle
						all of your Equity Administration needs
					</p>
					<div class="mt-8 flex gap-x-4">
						<a
							href="/contact"
							class="transition ease-in-out duration-300 inline-block rounded-lg w-40 text-center bg-red-700 bg-opacity-30 px-4 py-1.5 text-base font-semibold leading-7 backdrop-blur text-white ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800 no-underline"
						>
							Get in touch
							<span class="text-red-200" aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Start Services Section -->
		<div
			class="py-14 sm:pt-24 sm:pb-32"
			style="background-image: linear-gradient(120deg, #CCFFFF 0%, #E0F7FA 50%, #F6FDFE 100%);"
		>
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto text-center">
					<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Your trusted partner in equity compensation
					</h2>
					<p class="mt-2 text-lg leading-8 text-gray-600">
						Empowering companies to harness the full potential of equity compensation to attract,
						retain, and motivate talent.
					</p>
				</div>

				<div
					class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
				>
					<!-- Temporary Stock Administration Support -->
					<button
						class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
						on:click={() => setActiveArticle('tempSupport')}
					>
						<img
							src="/images/stocks.jpg"
							alt="computer on a table"
							class="absolute inset-0 -z-10 h-full w-full object-cover"
						/>
						<div
							class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
						></div>
						<div
							class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
						></div>
						<h3
							class="mt-3 text-lg font-semibold leading-6 text-white {activeArticle ===
							'tempSupport'
								? 'text-yellow-500'
								: 'text-white'}"
						>
							<p class="relative">Temporary Stock Administration Support</p>
						</h3>
					</button>
					<button
						class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
						on:click={() => setActiveArticle('fullOutsourcing')}
					>
						<img
							src="/images/stocks2.jpg"
							alt="iphone with stock information"
							class="absolute inset-0 -z-10 h-full w-full object-cover"
						/>
						<div
							class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
						></div>
						<div
							class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
						></div>
						<h3
							class="mt-3 text-lg font-semibold leading-6 text-white {activeArticle ===
							'fullOutsourcing'
								? 'text-yellow-500'
								: 'text-white'}"
						>
							<p class="relative">Full Stock Administration Outsourcing</p>
						</h3>
					</button>
					<button
						class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
						on:click={() => setActiveArticle('specialProjects')}
					>
						<img
							src="/images/projectmanagement.jpg"
							alt="team holding hands"
							class="absolute inset-0 -z-10 h-full w-full object-cover"
						/>
						<div
							class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
						></div>
						<div
							class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
						></div>
						<h3
							class="mt-3 text-lg font-semibold leading-6 text-white {activeArticle ===
							'specialProjects'
								? 'text-yellow-500'
								: 'text-white'}"
						>
							<p class="relative">Special Projects and Consulting Services</p>
						</h3>
					</button>
				</div>

				<!-- Displaying the detailed text for the selected article -->
				<div class="mt-10 p-6 bg-gray-100 rounded-lg">
					{#if activeArticle === 'tempSupport'}
						<p class="leading-8 tracking-wide font-bold text-gray-800">
							We offer temporary stock administration services to provide seamless support during
							periods of increased workload or staff shortages. Whether you're facing a surge in
							stock plan activities, experiencing a transition period, or simply need temporary
							assistance, our flexible staffing solutions can help fill the gap. With our temporary
							stock administration services, you can maintain productivity levels, meet deadlines,
							and alleviate the strain on your internal team, allowing you to focus on other
							critical business priorities.
						</p>
						<p class="mt-10 leading-8 tracking-wide font-bold text-gray-800">
							Expand your stock administration team effortlessly with our flexible staffing
							solutions. Our stock plan professionals assist with short and long-term staffing.
						</p>
					{:else if activeArticle === 'fullOutsourcing'}
						<p class="leading-8 tracking-wide font-bold text-gray-800">
							We offer a comprehensive solution to fully outsource your stock plan administration
							needs, providing you with peace of mind and allowing you to focus on your core
							business activities. With our expertise and experience in stock plan administration,
							we handle every aspect of the process, from initial setup to ongoing management and
							compliance. Our dedicated team ensures accurate record-keeping, timely communication
							with participants, and adherence to regulatory requirements, eliminating the burden of
							administration from your shoulders. By outsourcing your stock plan administration to
							us, you can streamline operations, reduce administrative overhead, and ensure that
							your stock compensation programs are efficiently managed and optimized for success.
						</p>
					{:else if activeArticle === 'specialProjects'}
						<p class="leading-8 tracking-wide font-bold text-gray-800">
							At Accelerated Equity Plans, we offer a comprehensive suite of services designed to
							empower businesses across various industries. From guiding organizations through
							complex Mergers and Acquisitions and navigating the intricacies of IPOs and SPACs to
							facilitating seamless Corporate Actions and driving efficiency through Automation
							Design and Resources, we are committed to delivering strategic guidance that fuels
							growth and success.
						</p>
						<p class="mt-10 leading-8 tracking-wide font-bold text-gray-800">
							With a focus on quality, integrity, and client satisfaction, we partner with
							businesses to navigate challenges, optimize operations, and unlock opportunities for
							long-term success.
						</p>
					{/if}
				</div>
				<div class="flex items-center justify-center mt-6">
					<a
						href="/services"
						class="inline-block rounded-lg w-40 text-center bg-red-700 bg-opacity-80 px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800 no-underline"
						>Learn More</a
					>
				</div>
			</div>
		</div>

		<!-- End Services Section -->

		<!-- Start Who We Are -->
		<MeetTheTeam />
		<!-- End who we are Section -->

		<!-- Engaging subheading and text -->
		<div
			class="mx-auto sm:min-h-[40vh] px-4 sm:px-10 py-14 sm:py-32 flex flex-col justify-center"
			style="background-image: linear-gradient(120deg, #F6FDFE 0%, #E0F7FA 50%, #CCFFFF 100%);"
		>
			<h2 class="mb-8 shrink-0 text-3xl font-bold tracking-tight sm:text-4xl text-center">
				Elevate Your Equity Management with Expert Support
			</h2>
			<div class="lg:text-left px-2 sm:px-9">
				<p class="text-lg leading-8 text-gray-600">
					In the fast-paced world of equity compensation, a trusted expert can transform your
					challenges into efficiency and growth. Accelerated Equity Plans isn't just a service;
					we're your partner in boosting your team's effectiveness. We handle everything from urgent
					plan adjustments to daily operations, ensuring no detail is missed. Our strategies not
					only address current needs but also prepare your team for future success. Seamlessly
					integrating with your operations, we offer unmatched expertise and proactive solutions.
					With us, your equity plans are managed expertly, allowing you to concentrate on leading
					your company forward.
				</p>
			</div>
		</div>

		<!-- Start CTA Section -->
		<section>
			<div
				class="relative isolate overflow-hidden bg-gray-900 px-6 py-14 text-center shadow-2xl sm:px-16 flex flex-col items-center justify-between"
			>
				<h2 class="text-3xl font-bold tracking-wide text-white sm:text-4xl mb-4">
					Take your equity management to the next level today
				</h2>
				<div class="flex items-center justify-center gap-x-6 mt-8">
					<a
						href="/"
						class="inline-block rounded-lg w-40 text-center bg-red-700 bg-opacity-30 px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800 no-underline"
						>Learn More</a
					>
				</div>
				<svg
					viewBox="0 0 1024 1024"
					class="absolute left-1/2 top-1 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
					aria-hidden="true"
				>
					<circle
						cx="512"
						cy="512"
						r="512"
						fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
						fill-opacity="0.7"
					/>
					<defs>
						<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
							<stop stop-color="#7775D6" />
							<stop offset="1" stop-color="#E935C1" />
						</radialGradient>
					</defs>
				</svg>
			</div>
		</section>

		<!-- End CTA Section -->

		<!-- Start Testimonials Section -->
		<section
			class="mx-auto min-h-[40vh] relative"
			style="background-image: linear-gradient(120deg, #F6FDFE 0%, #E0F7FA 50%, #CCFFFF 100%);"
		>
			<h2 class="absolute my-6 sm:my-0 sm:top-14 font-bold text-center w-screen text-4xl">
				Testimonials
			</h2>
			<ReviewList {reviews} />
		</section>
		<!-- End testimonials -->

		<!-- Partner Ribbon -->
		<section class="bg-gray-100">
			<PartnerRibbon />
		</section>

		<!-- Start Project Management -->
		<div
			class="mx-auto min-h-[40vh] py-14 sm:py-32 px-10 pt-8 lg:grid lg:grid-cols-3 lg:gap-8"
			style="background-image: linear-gradient(120deg, #CCFFFF 0%, #E0F7FA 50%, #F6FDFE 100%);"
			id="project-management"
		>
			<h2 class="mb-8 shrink-0 text-3xl font-bold tracking-tight sm:text-4xl lg:mb-0">
				Project Management
			</h2>
			<div class="col-span-2 lg:text-left">
				<ul class="ml-8 list-outside list-disc text-lg">
					<li>Equity platform implementation</li>
					<li>3rd party vendor integrations for payroll, HRIS, mobility, etc.</li>
					<li>Administration system functionality adoption and vetting</li>
					<li>Process review and documentation of best practices</li>
					<li>Employee education and resources</li>
					<li>Plan design</li>
					<li>Corporate Actions</li>
					<li>Vendor selection</li>
				</ul>
			</div>
		</div>
		<!-- End Project Management -->
	</main>
</div>
