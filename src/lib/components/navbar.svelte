<script>
	import { navigating } from '$app/stores';
	import clsx from 'clsx';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	$: if ($navigating) mobileMenuOpen = false;

	export let navLinks;
</script>

<div class={`fixed top-0 z-20 w-screen px-6 py-2 bg-opacity-100 bg-black backdrop-blur`}>
	<div>
		<nav class="flex items-center justify-between xl:px-12" aria-label="Global">
			<div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
				<a href="/" class="-m-1.5 p-2">
					<span class="sr-only">Accelerated Equity Plans</span>
					<img
						class="w-full py-2 max-w-[180px]"
						src="/images/brand/aep-logo-white.svg"
						alt="Accelerated Equity Plans Logo"
					/>
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
			<div class="hidden lg:flex lg:min-w-0 lg:justify-center lg:items-center lg:gap-x-2">
				{#each navLinks as navLink}
					<a
						href={navLink.href}
						class={clsx(
							'uppercase py-2.5 px-4 rounded',
							navLink.headerClasses ?? 'text-white hover:text-red-600'
						)}>{navLink.name}</a
					>
				{/each}
			</div>
		</nav>

		{#if mobileMenuOpen}
			<!-- Mobile menu, show/hide based on menu open state. -->
			<div role="dialog" aria-modal="true">
				<div
					class="fixed top-0 left-0 right-0 z-10 overflow-y-visible bg-stone-900 px-6 py-6 lg:hidden"
				>
					<div class="flex h-9 items-center justify-between">
						<div class="flex">
							<a href="/" class="-m-1.5 p-1.5">
								<span class="sr-only">Accelerated Equity Plans</span>
								<img
									class="h-16 max-w-[180px]"
									src="/images/brand/aep-logo-white.svg"
									alt="Accelerated Equity Plans Logo"
								/>
							</a>
						</div>
						<div class="flex">
							<button
								type="button"
								class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
								{#each navLinks as navLink}
									<a
										href={navLink.href}
										class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
										on:click={toggleMobileMenu}
									>
										{navLink.name}
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
