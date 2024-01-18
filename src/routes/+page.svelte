<script>
	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
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
		content="https://accelerated-equity-plans.vercel.app/images/og-image.jpg"
	/>
</svelte:head>

<div class="isolate bg-white">
	<div
		class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
	>
		<svg
			class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
			viewBox="0 0 1155 678"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
				fill-opacity=".3"
				d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
			/>
			<defs>
				<linearGradient
					id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
					x1="1155.49"
					x2="-78.208"
					y1=".177"
					y2="474.645"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#9089FC" />
					<stop offset="1" stop-color="#FF80B5" />
				</linearGradient>
			</defs>
		</svg>
	</div>
	<div class="sticky top-0 z-10 bg-white px-6 py-4 lg:px-8 lg:py-6">
		<div>
			<nav class="flex items-center justify-between" aria-label="Global">
				<div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Accelerated Equity Plans</span>
						<img
							class="h-12"
							src="/images/accelerated-equity-plans.png"
							alt="Accelerated Equity Plans Logo"
						/>
					</a>
				</div>
				<div class="flex lg:hidden">
					<button
						type="button"
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						on:click={toggleMobileMenu}
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
				<div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
					<a href="#administration-support" class="font-semibold text-gray-900 hover:text-gray-900"
						>Administration Support</a
					>

					<a href="#project-management" class="font-semibold text-gray-900 hover:text-gray-900"
						>Project Management</a
					>

					<a href="#equity-ateam" class="font-semibold text-gray-900 hover:text-gray-900"
						>Equity A-Team</a
					>
				</div>
			</nav>

			{#if mobileMenuOpen}
				<!-- Mobile menu, show/hide based on menu open state. -->
				<div role="dialog" aria-modal="true">
					<div class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
						<div class="flex h-9 items-center justify-between">
							<div class="flex">
								<a href="/" class="-m-1.5 p-1.5">
									<span class="sr-only">Accelerated Equity Plans</span>
									<img
										class="h-12"
										src="/images/accelerated-equity-plans.png"
										alt="Accelerated Equity Plans Logo"
									/>
								</a>
							</div>
							<div class="flex">
								<button
									type="button"
									class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
									on:click={toggleMobileMenu}
								>
									<span class="sr-only">Close menu</span>
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>
						<div class="mt-6 flow-root">
							<div class="-my-6 divide-y divide-gray-500/10">
								<div class="space-y-2 py-6">
									<a
										href="#administration-support"
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
										on:click={toggleMobileMenu}
									>
										Administration Support
									</a>

									<a
										href="#project-management"
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
										on:click={toggleMobileMenu}
									>
										Project Management
									</a>

									<a
										href="#equity-ateam"
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
										on:click={toggleMobileMenu}
									>
										Equity A-Team
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<main>
		<div class="relative px-6 lg:px-8">
			<div class="mx-auto grid min-h-[60vh] max-w-3xl items-center pt-20 pb-32 sm:pt-48 sm:pb-40">
				<div>
					<div>
						<h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
							Accelerated Equity Plans
						</h1>
						<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
							Bringing industry leading expertise and support to your equity programs to deliver a
							best-in-class experience for your team, partners and participants. Founded by <span
								class="font-bold">industry experts</span
							> with issuer and vendor experience for both Private and Public organizations, we can handle
							all of your Equity Administration needs
						</p>
						<div class="mt-8 flex gap-x-4 sm:justify-center">
							<a
								href="mailto:info@acceleratedep.com"
								class="inline-block rounded-lg bg-red-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800"
							>
								Get in touch
								<span class="text-red-200" aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
					<div
						class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					>
						<svg
							class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
							viewBox="0 0 1155 678"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
								fill-opacity=".3"
								d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
							/>
							<defs>
								<linearGradient
									id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
									x1="1155.49"
									x2="-78.208"
									y1=".177"
									y2="474.645"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="hsl(358deg 66% 40%)" />
									<stop offset="1" stop-color="#dbdbdb" />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div
			class="mx-auto min-h-[40vh] max-w-7xl px-8 pt-8 lg:grid lg:grid-cols-3 lg:gap-8"
			id="administration-support"
		>
			<h2 class="mb-8 shrink-0 text-3xl font-bold tracking-tight sm:text-4xl lg:mb-0">
				Administration Support
			</h2>
			<div class="col-span-2 lg:text-left">
				<p class="text-lg leading-8 text-gray-600">
					Let us be a knowledgeable extension of your in-house equity team!
				</p>
				<ul class="mt-8 ml-8 list-outside list-disc text-lg">
					<li>Last minute and emergency coverage for all Plan matters</li>
					<li>Ownership of assigned/daily tasks</li>
					<li>
						Process review, enhancement, and documentation &ndash; setting your team up for success
						for years to come!
					</li>
				</ul>
			</div>
		</div>
		<div
			class="mx-auto min-h-[40vh] max-w-7xl px-8 pt-8 lg:grid lg:grid-cols-3 lg:gap-8"
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
		<div class="mx-auto max-w-7xl px-8 pt-8 lg:grid lg:grid-cols-3 lg:gap-8" id="equity-ateam">
			<h2 class="mb-8 text-3xl font-bold tracking-tight sm:text-4xl lg:mb-0">Equity A-Team</h2>

			<div class="col-span-2 pb-12">
				<p>
					As subject matter experts, we can provide your organization with a complete Stock Plan
					Administration team to handle all equity concerns!
				</p>
				<p class="mt-8">
					Contact us: <a
						class="text-red-800 underline underline-offset-4 transition-colors hover:text-red-900"
						href="mailto:info@acceleratedep.com">info@acceleratedep.com</a
					>
				</p>
			</div>
		</div>

		<div class="mx-auto max-w-7xl px-8 pt-8 pb-8">
			<div class="grid lg:grid-cols-2 gap-8 mb-12">
				<div class="prose pt-6 pb-12 px-8 rounded-lg shadow-2xl min-w-full">
					<div class="flex items-center gap-4">
						<img src="/images/emily-headshot.jpg" alt="Emily Bone" class="rounded-full w-24" />
						<h3 class="m-0">Emily Bone, MBA, CEP</h3>
						<a href="https://www.linkedin.com/in/emily-bone-mba-cep/" target="_blank">
							<svg
								class="w-5 h-5 text-blue-600"
								stroke="currentColor"
								fill="currentColor"
								stroke-width="0"
								viewBox="0 0 24 24"
								height="200px"
								width="200px"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"
								></path></svg
							></a
						>
					</div>
					<p>
						Through positions held with both equity compensation issuers and administration vendors,
						Emily's career has equipped her with extensive knowledge in equity matters for both
						private and public equity plans. Her unique blend of hands-on experience and exposure to
						the intricacies of many equity plans positions her as a trusted partner in the ever
						evolving landscape of equity compensation.
					</p>
					<p>
						With specialties in plan administration, process analysis and design, system and
						functionality implementation, as well as project management and execution, she has
						empowered organizations to optimize their equity compensation procedures, strategies and
						overall value.
					</p>
					<p>
						Emily has obtained her Certified Equity Professional (CEP) designation, and has also
						earned an MBA in Finance from Pepperdine University.
					</p>
				</div>
				<div class="prose pt-6 pb-12 px-8 rounded-lg shadow-2xl min-w-full">
					<div class="flex items-center gap-4">
						<img src="/images/neil-headshot.jpg" alt="Neil Birrell" class="rounded-full w-24" />
						<h3 class="m-0">Neil Birrell, CEP</h3>
						<a href="https://www.linkedin.com/in/neil-birrell-cep-0985185/" target="_blank">
							<svg
								class="w-5 h-5 text-blue-600"
								stroke="currentColor"
								fill="currentColor"
								stroke-width="0"
								viewBox="0 0 24 24"
								height="200px"
								width="200px"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"
								></path></svg
							></a
						>
					</div>
					<p>
						Neil's career, shaped by roles at Deloitte and equity administration vendors, reflects
						his deep expertise in guiding both private and public organizations through the
						complexities of equity compensation. His consulting expertise extends across vital
						domains, including payroll and mobility, financial reporting, HR, and the nuanced global
						tax implications associated with equity compensation.
					</p>
					<p>
						Neil specializes in establishing innovative processes for organizations seeking
						efficiency and strategic alignment - empowering companies to seamlessly integrate and
						automate essential functions including equity administration, payroll and HRIS system
						integrations.
					</p>
					<p>
						Neil holds his Certified Equity Professional (CEP) designation and has also obtained a
						BS in Finance from the University of Utah.
					</p>
				</div>
			</div>
		</div>
	</main>
	<footer class="bg-gray-800 px-8 py-12 text-gray-100">
		<div class="mx-auto max-w-7xl">
			&copy; {new Date().getFullYear()} Accelerated Equity Plans
		</div>
	</footer>
</div>
