<script>
	export let navLinks;
</script>

<footer class="bg-white">
	<div class="grid gap-8 mx-auto max-w-7xl overflow-hidden px-8 py-20 sm:py-24">
		<nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-10" aria-label="Footer">
			{#each navLinks as navLink}
				<div class="pb-6">
					<a
						href={navLink.href}
						class="text-sm leading-6 text-gray-600 hover:text-gray-900 hover:underline"
						>{navLink.name}</a
					>
				</div>
			{/each}
		</nav>

		<div>
			<a href="/">
				<img
					src="/images/aep-logo.svg"
					alt="Accelerated Equity Plans"
					class="max-w-[200px] sm:mx-auto"
				/>
			</a>
		</div>
		<p class="text-left text-xs leading-5 text-gray-500 sm:text-center">
			&copy; {new Date().getFullYear()} Accelerated Equity Plans. All rights reserved.
		</p>
	</div>
</footer>
