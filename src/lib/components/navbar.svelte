<script>
	import { navigating, page } from '$app/stores';
	import { clsx } from 'clsx';
	import { Icon } from 'svelte-icons-pack';
	import { blur } from 'svelte/transition';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	$: if ($navigating) mobileMenuOpen = false;

	export let navLinks;
</script>

<div class={`fixed top-0 z-20 w-screen px-6 py-2 bg-opacity-100 bg-black backdrop-blur-sm`}>
	<div>
		<nav class="flex justify-between items-center xl:px-12" aria-label="Global">
			<div class="flex flex-1">
				<a href="/" class="flex-1 py-1">
					<span class="sr-only">Accelerated Equity Plans</span>
					<img
						alt="Accelerated Equity Plans Logo"
						class={clsx('w-full py-2 max-w-[140px]', 'lg:max-w-[180px]')}
						height="50"
						src="/images/brand/aep-logo-white.svg"
						width="180"
					/>
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="inline-flex justify-center items-center p-2.5 -m-2.5 text-white rounded-md cursor-pointer"
					on:click={toggleMobileMenu}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-6 h-6"
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
			<div class="hidden lg:flex lg:gap-x-2 lg:justify-center lg:items-center lg:min-w-0">
				{#each navLinks as navLink}
					<a
						href={navLink.href}
						class={clsx(
							'uppercase py-2.5 px-4 rounded-sm tracking-wide',
							$page.url.pathname === navLink.href && 'font-medium',
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
					class="overflow-y-visible fixed top-2 right-2 left-2 z-10 px-4 pb-4 rounded-xl shadow-xl lg:hidden bg-aep-red-700"
					transition:blur={{ duration: 300 }}
				>
					<div class="flex justify-between items-center">
						<a href="/" class="flex-1 py-1">
							<span class="sr-only">Accelerated Equity Plans</span>
							<img
								alt="Accelerated Equity Plans Logo"
								class={clsx('w-full py-2 max-w-[140px]', 'lg:max-w-[180px]')}
								height="50"
								src="/images/brand/aep-logo-white-full.svg"
								width="180"
							/>
						</a>
						<div class="flex">
							<button
								type="button"
								class="inline-flex justify-center items-center p-2.5 -m-2.5 text-white rounded-md cursor-pointer"
								on:click={toggleMobileMenu}
							>
								<span class="sr-only">Close menu</span>
								<svg
									class="w-6 h-6"
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
					<div class="flow-root mt-4">
						{#each navLinks as navLink}
							<a
								href={navLink.href}
								class={clsx(
									'flex items-center gap-6 py-3 leading-7 text-aep-red-100 text-xl font-headings px-4 rounded-xl',
									$page.url.pathname === navLink.href && 'bg-aep-red-800',
									'hover:bg-aep-red-600'
								)}
								on:click={toggleMobileMenu}
							>
								<span class="text-black/80">
									<Icon size={26} src={navLink.icon} />
								</span>
								<span class="pb-0.5">
									{navLink.name}
								</span>
							</a>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
