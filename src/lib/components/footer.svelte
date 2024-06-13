<script>
	import clsx from 'clsx';
	import { page } from '$app/stores';

	export let navLinks;
</script>

<footer class="bg-white">
	<div class={clsx('grid gap-12 mx-auto max-w-7xl overflow-hidden px-8 pt-20 pb-12', 'md:gap-8')}>
		<nav class="-mb-6 grid grid-cols-2 sm:flex sm:justify-center sm:space-x-10" aria-label="Footer">
			{#each navLinks as navLink}
				<div class="pb-6">
					<a
						href={navLink.href}
						class={clsx(
							'leading-6 hover:underline',
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
					class="max-w-[200px] sm:mx-auto"
					height="56"
					loading="lazy"
					src="/images/brand/aep-logo.svg"
					width="200"
				/>
			</a>
			<p class="text-left text-xs leading-5 text-stone-500 sm:text-center mt-4">
				&copy; {new Date().getFullYear()} Accelerated Equity Plans. All rights reserved.
			</p>
			<p class="text-left text-xs leading-5 text-stone-500 sm:text-center mt-4">
				<a
					href="https://www.bootpackdigital.com"
					target="_blank"
					rel="noopener noreferrer"
					class="text-stone-500 hover:text-stone-900">Web design by Bootpack Digital</a
				>
			</p>
		</div>
	</div>
</footer>
