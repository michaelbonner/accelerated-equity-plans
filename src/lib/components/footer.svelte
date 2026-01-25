<script lang="ts">
	import { page } from '$app/stores';
	import { clsx } from 'clsx';

	export let navLinks: NavLink[];

	interface NavLink {
		name: string;
		href: string;
		icon: any;
		headerClasses?: string;
		subNav?: SubNavLink[];
	}

	interface SubNavLink {
		name: string;
		href: string;
		description?: string;
	}

	// Separate navLinks into different groups
	$: homeLink = navLinks.find((link) => link.name === 'Home');
	$: servicesLink = navLinks.find((link) => link.name === 'Services');
	$: companyLinks = navLinks.filter((link) =>
		['About', 'Careers', 'Contact Us'].includes(link.name)
	);
</script>

<footer class="bg-white">
	<div
		class={clsx(
			'flex flex-col-reverse gap-12 mx-auto max-w-7xl overflow-hidden px-8 pt-20 pb-12',
			'lg:flex-row lg:gap-12'
		)}
	>
		<!-- Logo and Copyright (left on desktop) -->
		<div class={clsx('lg:max-w-lg')}>
			<a href="/">
				<img
					alt="Accelerated Equity Plans"
					class="max-w-[200px]"
					height="56"
					loading="lazy"
					src="/images/brand/aep-logo.svg"
					width="200"
				/>
			</a>
			<p class="text-stone-600 font-light leading-relaxed pt-8">
				We provide expertise and support for your equity programs, ensuring a great experience for
				your team, partners, and participants. Founded by industry experts with experience in both
				private and public organizations, we can manage all your equity administration needs.
			</p>
			<p class="mt-4 text-xs leading-5 text-stone-500">
				&copy; 2023-{new Date().getFullYear()} Accelerated Equity Plans. All rights reserved.
			</p>
		</div>

		<!-- Navigation (right on desktop) -->
		<nav
			class={clsx(
				'grid gap-8 order-1',
				'sm:flex sm:flex-wrap sm:gap-x-12',
				'lg:pl-16 lg:order-2 lg:col-span-2 lg:gap-18'
			)}
			aria-label="Footer"
		>
			<!-- Home -->
			{#if homeLink}
				<div class="flex flex-col gap-3">
					<a
						href={homeLink.href}
						class={clsx(
							'font-medium leading-6 underline-offset-2',
							'hover:underline',
							$page.url.pathname === homeLink.href
								? 'text-red-800 hover:text-red-900'
								: 'text-stone-900 hover:text-red-700'
						)}>{homeLink.name}</a
					>
				</div>
			{/if}

			<!-- Services with submenu -->
			{#if servicesLink}
				<div class="flex flex-col gap-3">
					<a
						href={servicesLink.href}
						class={clsx(
							'font-medium leading-6 underline-offset-2',
							'hover:underline',
							$page.url.pathname === servicesLink.href
								? 'text-red-800 hover:text-red-900'
								: 'text-stone-900 hover:text-red-700'
						)}>{servicesLink.name}</a
					>
					{#if servicesLink.subNav && servicesLink.subNav.length > 0}
						<div class="flex flex-col gap-2 ml-3">
							{#each servicesLink.subNav as subLink}
								<a
									href={subLink.href}
									class={clsx(
										'text-sm leading-6 underline-offset-2',
										'hover:underline',
										$page.url.pathname === subLink.href
											? 'text-red-800 hover:text-red-900'
											: 'text-stone-600 hover:text-stone-900'
									)}>{subLink.name}</a
								>
							{/each}
						</div>
					{/if}
				</div>
			{/if}

			<!-- Company links grouped in one column -->
			{#if companyLinks.length > 0}
				<div class="flex flex-col gap-3">
					{#each companyLinks as link}
						<a
							href={link.href}
							class={clsx(
								'font-medium leading-6 underline-offset-2',
								'hover:underline',
								$page.url.pathname === link.href
									? 'text-red-800 hover:text-red-900'
									: 'text-stone-900 hover:text-red-700'
							)}>{link.name}</a
						>
					{/each}
				</div>
			{/if}
		</nav>
	</div>

	<div class={clsx('mx-auto max-w-7xl overflow-hidden px-8 pb-4')}>
		<p class="mt-4 text-xs leading-5 text-stone-500">
			<a
				href="https://bootpackdigital.com"
				target="_blank"
				rel="noopener noreferrer"
				class="text-stone-500 hover:text-stone-900"
				>Web design and development by Bootpack Digital</a
			>
		</p>
	</div>
</footer>
