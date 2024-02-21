<script>
	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

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
					<a href="/about" class="font-semibold text-gray-900 hover:text-gray-900"
						>About</a
					>

					<a href="/careers" class="font-semibold text-gray-900 hover:text-gray-900"
						>Careers</a
					>

					<a href="/testimonials" class="font-semibold text-gray-900 hover:text-gray-900"
						>Testimonials</a
					>

          <a href="/services" class="font-semibold text-gray-900 hover:text-gray-900"
						>Services</a
					>
          
          <a href="/contact" class="font-semibold text-gray-900 hover:text-gray-900"
						>Contact Us</a
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
										href="/about"
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
										on:click={toggleMobileMenu}
									>
										About
									</a>

									<a
										href="/careers"
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
										on:click={toggleMobileMenu}
									>
										Careers
									</a>

									<a
										href="/testimonials"
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
										on:click={toggleMobileMenu}
									>
										Testimonials
									</a>
                  <a
										href="/services"
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
										on:click={toggleMobileMenu}
									>
										Services
									</a>
                  <a
										href="/contact"
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
										on:click={toggleMobileMenu}
									>
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>