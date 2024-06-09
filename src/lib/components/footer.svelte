<script>
	import clsx from 'clsx';

	export let navLinks;
</script>

<footer class="bg-white">
	<div class={clsx('grid gap-12 mx-auto max-w-7xl overflow-hidden px-8 pt-20 pb-12', 'md:gap-8')}>
		<nav class="-mb-6 grid grid-cols-2 sm:flex sm:justify-center sm:space-x-10" aria-label="Footer">
			{#each navLinks as navLink}
				<div class="pb-6">
					<a href={navLink.href} class="leading-6 text-gray-600 hover:text-gray-900 hover:underline"
						>{navLink.name}</a
					>
				</div>
			{/each}
		</nav>

		<div>
			<a href="/">
				<img
					alt="Accelerated Equity Plans"
					class="max-w-[200px] sm:mx-auto"
					loading="lazy"
					src="/images/brand/aep-logo.svg"
				/>
			</a>
			<p class="text-left text-xs leading-5 text-gray-500 sm:text-center mt-4">
				&copy; {new Date().getFullYear()} Accelerated Equity Plans. All rights reserved.
			</p>
			<p class="text-left text-xs leading-5 text-gray-500 sm:text-center mt-4">
				<a
					href="https://www.bootpackdigital.com"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-500 hover:text-gray-900">Web design by Bootpack Digital</a
				>
			</p>
		</div>
	</div>
</footer>
