<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { clsx } from 'clsx';
	import { Icon } from 'svelte-icons-pack';
	import { blur } from 'svelte/transition';

	interface SubNavLink {
		name: string;
		href: string;
		description?: string;
	}

	interface NavLink {
		name: string;
		href: string;
		icon: any;
		headerClasses?: string;
		subNav?: SubNavLink[];
	}

	interface Props {
		navLinks: NavLink[];
	}

	let { navLinks }: Props = $props();

	let mobileMenuOpen = $state(false);
	let openDesktopDropdown = $state<string | null>(null);
	let mobileServicesOpen = $state(false);
	let closeTimeout: ReturnType<typeof setTimeout> | null = null;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		mobileServicesOpen = false;
	}

	function toggleMobileServices() {
		mobileServicesOpen = !mobileServicesOpen;
	}

	function handleDesktopMouseEnter(navLinkName: string) {
		// Clear any pending close timeout
		if (closeTimeout) {
			clearTimeout(closeTimeout);
			closeTimeout = null;
		}
		openDesktopDropdown = navLinkName;
	}

	function handleDesktopMouseLeave() {
		// Add a small delay before closing to allow users to move mouse to dropdown
		closeTimeout = setTimeout(() => {
			openDesktopDropdown = null;
		}, 200);
	}

	$effect(() => {
		if ($navigating) {
			mobileMenuOpen = false;
			mobileServicesOpen = false;
		}
	});
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
					onclick={toggleMobileMenu}
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
					{#if navLink.subNav && navLink.subNav.length > 0}
						<!-- Services dropdown -->
						<div
							role="group"
							class="relative"
							onmouseenter={() => handleDesktopMouseEnter(navLink.name)}
							onmouseleave={handleDesktopMouseLeave}
						>
							<a
								href={navLink.href}
								class={clsx(
									'uppercase py-2.5 px-4 rounded-sm tracking-wide inline-flex items-center gap-1',
									$page.url.pathname.startsWith(navLink.href) && 'font-medium',
									navLink.headerClasses ?? 'text-white hover:text-red-600'
								)}
							>
								{navLink.name}
								<svg
									class={clsx(
										'w-4 h-4 transition-transform',
										openDesktopDropdown === navLink.name && 'rotate-180'
									)}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</a>

							{#if openDesktopDropdown === navLink.name}
								<div class="absolute left-0 mt-0 pt-2 w-80" transition:blur={{ duration: 150 }}>
									<div
										class="bg-white rounded-lg shadow-2xl overflow-hidden border border-stone-200"
									>
										<div class="py-2">
											{#each navLink.subNav as subLink}
												<a
													href={subLink.href}
													class={clsx(
														'block px-6 py-3 hover:bg-stone-50 transition-colors',
														$page.url.pathname === subLink.href && 'bg-red-50'
													)}
												>
													<div class="font-medium text-stone-900">{subLink.name}</div>
													{#if subLink.description}
														<div class="text-sm text-stone-600 mt-0.5">{subLink.description}</div>
													{/if}
												</a>
											{/each}
										</div>
									</div>
								</div>
							{/if}
						</div>
					{:else}
						<!-- Regular nav link -->
						<a
							href={navLink.href}
							class={clsx(
								'uppercase py-2.5 px-4 rounded-sm tracking-wide',
								$page.url.pathname === navLink.href && 'font-medium',
								navLink.headerClasses ?? 'text-white hover:text-red-600'
							)}>{navLink.name}</a
						>
					{/if}
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
								onclick={toggleMobileMenu}
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
							{#if navLink.subNav && navLink.subNav.length > 0}
								<!-- Services with submenu -->
								<div class="mb-2">
									<button
										type="button"
										onclick={toggleMobileServices}
										class={clsx(
											'flex items-center justify-between w-full gap-6 py-3 leading-7 text-aep-red-100 text-xl font-headings px-4 rounded-xl',
											$page.url.pathname.startsWith(navLink.href) && 'bg-aep-red-800',
											'hover:bg-aep-red-600'
										)}
									>
										<div class="flex items-center gap-6">
											<span class="text-black/80">
												<Icon size={26} src={navLink.icon} />
											</span>
											<span class="pb-0.5">
												{navLink.name}
											</span>
										</div>
										<svg
											class={clsx(
												'w-5 h-5 transition-transform text-white',
												mobileServicesOpen && 'rotate-180'
											)}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</button>

									{#if mobileServicesOpen}
										<div class="ml-4 mt-2 space-y-1" transition:blur={{ duration: 200 }}>
											<!-- All Services link -->
											<a
												href={navLink.href}
												class={clsx(
													'block py-2 px-4 text-base text-aep-red-100 rounded-lg font-medium',
													$page.url.pathname === navLink.href && 'bg-aep-red-800',
													'hover:bg-aep-red-600'
												)}
												onclick={toggleMobileMenu}
											>
												All Services
											</a>
											<!-- Individual service pages -->
											{#each navLink.subNav as subLink}
												<a
													href={subLink.href}
													class={clsx(
														'block py-2 px-4 text-base text-aep-red-100 rounded-lg',
														$page.url.pathname === subLink.href && 'bg-aep-red-800',
														'hover:bg-aep-red-600'
													)}
													onclick={toggleMobileMenu}
												>
													{subLink.name}
												</a>
											{/each}
										</div>
									{/if}
								</div>
							{:else}
								<!-- Regular mobile nav link -->
								<a
									href={navLink.href}
									class={clsx(
										'flex items-center gap-6 py-3 leading-7 text-aep-red-100 text-xl font-headings px-4 rounded-xl',
										$page.url.pathname === navLink.href && 'bg-aep-red-800',
										'hover:bg-aep-red-600'
									)}
									onclick={toggleMobileMenu}
								>
									<span class="text-black/80">
										<Icon size={26} src={navLink.icon} />
									</span>
									<span class="pb-0.5">
										{navLink.name}
									</span>
								</a>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
