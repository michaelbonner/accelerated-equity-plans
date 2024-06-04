<script lang="ts">
	import { reviews } from '$lib/dataSets';
	import ReviewList from '$lib/components/ReviewList.svelte';
</script>

<div>
	<div class="flex flex-col justify-center min-h-screen mt-28 sm:mt-36 font-eurostile">
		<!-- hero -->
		<div
			class="relative isolate overflow-hidden bg-[#2B454E] px-6 py-8 text-center sm:px-16 flex flex-col items-center justify-between"
		>
			<h1 class="text-2xl font-bold tracking-wide text-white sm:text-4xl mb-4">Services</h1>
			<!-- <svg
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
			</svg> -->
		</div>
		<!-- end hero -->
		<!-- Start Testimonials Section -->
		<section
			class="py-14 py-sm-10 bg-[#43626D] bg-opacity-60"
			style="background-image: linear-gradient(120deg, #AC2228 0%, #43626D 35%, #E1E4E7 100%);"
		>
			<h2
				class="mb-10 sm:my-0 sm:top-14 font-bold text-center w-full text-[#E1E4E7] text-base sm:text-4xl"
			>
				What people are saying about us!
			</h2>
			<ReviewList {reviews} />
		</section>
		<!-- End testimonials -->
		<div class="w-full flex flex-col justify-center items-center">
			<div class=" sm:w-5/6">
				<!-- todo put these in an array and iterate over that -->
				<div
					class="sm:my-6 leading-8 tracking-wide flex flex-col-reverse sm:flex-row justify-center items-center sm:rounded-xl"
					style="background-image: linear-gradient(120deg, #CCFFFF 0%, #E0F7FA 50%, #F6FDFE 100%);"
				>
					<div class="sm:w-3/4 px-12 py-5">
						<h2 class="mt-10 text-2xl sm:text-4xl font-bold">IPOs and SPACs</h2>
						<div class="flex flex-col justify-center items-center mt-8 mb-4 w-full">
							<p class="text-base sm:text-2xl">
								We provide expert support throughout the IPO process, guiding companies through the
								complexities and challenges of going public to ensure a successful transition. We
								can also be a resource as work volumes pick up and you need extra support.
							</p>
						</div>
					</div>
					<img
						src="/images/stocks.jpg"
						alt="stocks"
						class=" h-96 w-96 object-cover sm:rounded-r-xl"
					/>
				</div>

				<div
					class="sm:my-6 leading-8 tracking-wide flex flex-col sm:flex-row justify-center items-center sm:rounded-xl"
					style="background-image: linear-gradient(120deg, #F6FDFE 0%, #E0F7FA 50%, #CCFFFF 100%);"
				>
					<img
						src="/images/stocks2.jpg"
						alt="stocks"
						class=" h-96 w-96 object-cover sm:rounded-l-xl"
					/>
					<div class="sm:w-3/4 px-12 py-5">
						<h2 class="mt-10 text-2xl sm:text-4xl font-bold">Corporate Actions</h2>
						<div class="flex flex-col mt-8 mb-4 text-2xl w-full">
							<ol class="list-disc text-base sm:text-2xl pl-8">
								<li class="mb-6">Mergers and Acquisitions</li>
								<li class="mb-6">Stock Splits</li>
								<li>Spinoffs</li>
							</ol>
						</div>
					</div>
				</div>

				<div
					class="sm:my-6 leading-8 tracking-wide flex flex-col-reverse sm:flex-row justify-center items-center sm:rounded-xl"
					style="background-image: linear-gradient(120deg, #CCFFFF 0%, #E0F7FA 50%, #F6FDFE 100%);"
				>
					<div class="sm:w-3/4 px-12 py-5">
						<h2 class="mt-10 text-2xl sm:text-4xl font-bold">Automation Design and Resources</h2>
						<div
							class="flex flex-col justify-center items-center mt-4 sm:mt-8 mb-4 text-2xl w-full"
						>
							<ol class="list-disc pl-8 text-base sm:text-2xl">
								<li class="mb-6">
									Driving efficiency and innovation through Automation Design and Resources,
									empowering organizations to streamline processes and enhance productivity.
								</li>
								<li>
									Integrate you equity systems with your payroll and HRIS systems to automate data
									and reduce risk
								</li>
							</ol>
						</div>
					</div>
					<img src="/images/automation.jpg" alt="stocks" class=" h-96 w-96 md:rounded-r-xl" />
				</div>

				<div
					class="sm:my-6 leading-8 tracking-wide flex flex-col sm:flex-row justify-center items-center sm:rounded-xl"
					style="background-image: linear-gradient(120deg, #F6FDFE 0%, #E0F7FA 50%, #CCFFFF 100%);"
				>
					<img
						src="/images/taxes.jpg"
						alt="stocks"
						class=" h-96 w-96 object-cover sm:rounded-l-xl"
					/>
					<div class="sm:w-3/4 px-12 py-5">
						<h2 class="mt-10 text-2xl sm:text-4xl font-bold">
							Tax and Mobility implementation and support
						</h2>
						<div
							class="flex flex-col justify-center items-center mt-4 sm:mt-8 mb-4 text-2xl w-full"
						>
							<ol class="list-disc pl-8 text-base sm:text-2xl">
								<li class="mb-6">Review of tax withholding set up and advise on best practices.</li>
								<li>Help setting up a mobility process, review and testing and ongoing support</li>
							</ol>
						</div>
					</div>
				</div>

				<div
					class="sm:my-6 leading-8 tracking-wide flex flex-col-reverse sm:flex-row justify-center items-center sm:rounded-xl"
					style="background-image: linear-gradient(120deg, #CCFFFF 0%, #E0F7FA 50%, #F6FDFE 100%);"
				>
					<div class="sm:w-3/4 px-12 py-5">
						<h2 class="mt-10 text-2xl sm:text-4xl font-bold">System implementation</h2>
						<div class="flex flex-col justify-center items-center mt-8 mb-4 text-2xl w-full">
							<ol class="list-disc pl-8 text-base sm:text-2xl">
								<li class="mb-6">Support implementing a new equity system</li>
								<li>
									Support converting data from one equity system to another or from spreadsheets to
									an equity system. Reconcile equity data and financial reporting data
								</li>
							</ol>
						</div>
					</div>
					<img
						src="/images/system.jpg"
						alt="stocks"
						class=" h-96 w-96 object-cover sm:rounded-r-xl"
					/>
				</div>

				<div
					class="sm:my-6 leading-8 tracking-wide flex flex-col sm:flex-row justify-center items-center sm:rounded-xl"
					style="background-image: linear-gradient(120deg, #F6FDFE 0%, #E0F7FA 50%, #CCFFFF 100%);"
				>
					<img src="/images/rfp.jpg" alt="stocks" class=" h-96 w-96 object-cover sm:rounded-l-xl" />
					<div class="sm:w-3/4 px-12 py-5">
						<h2 class="mt-10 text-2xl sm:text-4xl font-bold">Vendor Selection and RFP</h2>
						<div class="flex flex-col justify-center items-center mt-8 mb-4 w-full">
							<p class="text-base sm:text-2xl">
								We provide expert vendor selection support, guiding businesses through the process
								of identifying and choosing the right partners to meet their specific needs and
								goals
							</p>
						</div>
					</div>
				</div>

				<div
					class="sm:my-6 leading-8 tracking-wide flex flex-col-reverse sm:flex-row justify-center items-center sm:rounded-xl"
					style="background-image: linear-gradient(120deg, #CCFFFF 0%, #E0F7FA 50%, #F6FDFE 100%);"
				>
					<div class="sm:w-3/4 px-12 py-5">
						<h2 class="mt-10 text-2xl sm:text-4xl font-bold">
							System functionality incorporation and testing
						</h2>
						<div class="flex flex-col justify-center items-center mt-8 mb-4 w-full">
							<p class="text-base sm:text-2xl">
								We offer comprehensive support for implementing system functionality and testing to
								ensure you are getting the most out of your equity systems and reducing manual
								processes that take away time from more strategic initiatives.
							</p>
						</div>
					</div>
					<img
						src="/images/stocks.jpg"
						alt="stocks"
						class=" h-96 w-96 object-cover sm:rounded-r-xl"
					/>
				</div>

				<div
					class="sm:my-6 leading-8 tracking-wide flex flex-col sm:flex-row justify-center items-center sm:rounded-xl"
					style="background-image: linear-gradient(120deg, #F6FDFE 0%, #E0F7FA 50%, #CCFFFF 100%);"
				>
					<img
						src="/images/system2.jpg"
						alt="stocks"
						class=" h-96 w-96 object-cover sm:rounded-l-xl"
					/>
					<div class="sm:w-3/4 px-12 py-5">
						<h2 class="mt-10 text-2xl sm:text-4xl font-bold">Process review and documentation</h2>
						<div class="flex flex-col justify-center items-center mt-8 mb-4 w-full">
							<p class="text-base sm:text-2xl">
								We review and document your current processes, interview stakeholders and recommend
								best practices
							</p>
						</div>
					</div>
				</div>

				<div
					class="sm:my-6 leading-8 tracking-wide flex flex-col-reverse sm:flex-row justify-center items-center sm:rounded-xl"
					style="background-image: linear-gradient(120deg, #CCFFFF 0%, #E0F7FA 50%, #F6FDFE 100%);"
				>
					<div class="sm:w-3/4 px-12 py-5">
						<h2 class="mt-10 text-2xl sm:text-4xl font-bold">Training</h2>
						<div class="flex flex-col justify-center items-center mt-8 mb-4 w-full">
							<p class="text-base sm:text-2xl">
								AEP helps to train your employees on administering your equity plans, best practices
								and creating processes that will save time and reduce risk.
							</p>
						</div>
					</div>
					<img
						src="/images/training.jpg"
						alt="stocks"
						class=" h-96 w-96 object-cover sm:rounded-r-xl"
					/>
				</div>

				<div
					class="sm:my-6 leading-8 tracking-wide flex flex-col sm:flex-row justify-center items-center sm:rounded-xl"
					style="background-image: linear-gradient(120deg, #F6FDFE 0%, #E0F7FA 50%, #CCFFFF 100%);"
				>
					<img
						src="/images/education.jpg"
						alt="stocks"
						class=" h-96 w-96 object-cover sm:rounded-l-xl"
					/>
					<div class="sm:w-3/4 px-12 py-5">
						<h2 class="mt-10 text-2xl sm:text-4xl font-bold">Education</h2>
						<div class="flex flex-col justify-center items-center mt-8 mb-4 w-full">
							<p class="text-base sm:text-2xl">
								We specialize in educating employees on their equity awards, providing comprehensive
								guidance and resources to ensure they understand the value and implications of their
								stock compensation plans.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Start Project Management -->
	<section
		class="mx-auto min-h-[40vh] py-14 sm:py-32 px-10 pt-8 lg:grid lg:grid-cols-3 lg:gap-8"
		style="background-image: linear-gradient(120deg, #E1E4E7 0%, #43626D 50%, #AC2228 100%);"
		id="project-management"
	>
		<h2 class="mb-8 shrink-0 text-3xl font-bold tracking-tight sm:text-4xl lg:mb-0">
			Project Management
		</h2>
		<div class="col-span-2 lg:text-left">
			<ul class="ml-8 list-outside list-disc text-lg text-[#E1E4E7]">
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
	</section>
</div>
