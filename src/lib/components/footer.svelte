<script>
	import { clsx } from 'clsx';
	import { page } from '$app/stores';

	export let navLinks;
</script>

<footer class="bg-white">
	<div class={clsx('grid gap-12 mx-auto max-w-7xl overflow-hidden px-8 pt-20 pb-12', 'md:gap-8')}>
		<nav class="grid grid-cols-2 -mb-6 sm:flex sm:justify-center sm:space-x-10" aria-label="Footer">
			{#each navLinks as navLink}
				<div class="pb-6">
					<a
						href={navLink.href}
						class={clsx(
							'leading-6 underline-offset-2',
							'hover:underline',
							$page.url.pathname === navLink.href
								? 'text-red-800 hover:text-red-900'
								: 'text-stone-600 hover:text-stone-900'
						)}>{navLink.name}</a
					>
				</div>
			{/each}
		</nav>

		<div>
			<a href="/">
				<img
					alt="Accelerated Equity Plans"
					class="sm:mx-auto max-w-[200px]"
					height="56"
					loading="lazy"
					src="/images/brand/aep-logo.svg"
					width="200"
				/>
			</a>
			<p class="mt-4 text-xs leading-5 text-left sm:text-center text-stone-500">
				&copy; {new Date().getFullYear()} Accelerated Equity Plans. All rights reserved.
			</p>
			<p class="mt-4 text-xs leading-5 text-left sm:text-center text-stone-500">
				<a
					href="https://bootpackdigital.com"
					target="_blank"
					rel="noopener noreferrer"
					class="text-stone-500 hover:text-stone-900"
					>Web design and development by Bootpack Digital</a
				>
			</p>
		</div>
	</div>
</footer>
