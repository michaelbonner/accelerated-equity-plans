<script lang="ts">
	import { onMount } from 'svelte';

	const partnerImagesPath = '/partner-images/';

	const partnerData = [
		{
			path: 'insightsoftware.png',
			url: 'https://insightsoftware.com/certent/equity-management-software/'
		},
		{ path: 'morganstanley.png', url: 'https://www.morganstanley.com/atwork' },
		{ path: 'equitymethods.png', url: 'https://www.equitymethods.com' },
		{ path: 'schwab.png', url: 'https://workplacefinancialservices.schwab.com/stock-plans' },
		{ path: 'fidelity.png', url: 'https://www.fidelityworkplace.com/s/equity' },
		{ path: 'globalshares.png', url: 'https://www.globalshares.com' },
		{ path: 'eqvista.png', url: 'https://eqvista.com' },
		{ path: 'carta.png', url: 'https://carta.com' },
		{
			path: 'deloitte.png',
			url: 'https://www.deloitte.com/global/en/services/tax/services/equity-and-incentives.html'
		},
		{
			path: 'pwc.png',
			url: 'https://www.pwc.com/us/en/industries/financial-services/private-equity.html'
		},
		{
			path: 'kpmg.png',
			url: 'https://kpmg.com/us/en/home/industries/private-equity.html'
		},
		{
			path: 'ubs.png',
			url: 'https://www.ubs.com/us/en/wealth-management/our-solutions/companies-organizations.html'
		}
	];
	let partnerImages = partnerData.map((partner) => ({
		path: partner.path.replace('/static', ''),
		url: partner.url
	}));

	let ribbonContainer: HTMLElement;

	onMount(() => {
		// Initialize any necessary logic or effects here
	});
</script>

<div class="mx-auto py-4 sm:py-6 md:py-10 bg-[#43626D] bg-opacity-60">
	<div class="container mx-auto flex flex-col">
		<div class="flex items-center justify-center sm:pr-8">
			<h2 class="text-4xl mb-5 flex flex-row md:text-5xl leading-normal font-bold">
				Our Partners Include
			</h2>
		</div>
		<div class="w-full flex justify-center items-center">
			<div class="flex flex-wrap gap-4 px-4 justify-center">
				{#each partnerImages as { path, url }}
					<div class="partner-logo">
						<a href={url} target="_blank">
							<img src={`${partnerImagesPath}${path}`} alt="Partner Logo" class="h-auto" />
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.partner-logo {
		@apply flex items-center justify-center py-4 sm:py-6;
	}

	.partner-logo img {
		@apply max-h-16 max-w-full;
	}
</style>
