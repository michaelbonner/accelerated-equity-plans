<script lang="ts">
	import { onMount } from 'svelte';

	const partnerImagesPath = '/partner-images/';

	const partnerData = [
		{
			path: 'insightsoftware.png',
			url: 'https://insightsoftware.com/certent/equity-management-software/'
		},
		{
			path: 'etrade.png',
			url: 'https://www.morganstanley.com/atwork/equity-solutions-public-companies'
		},
		{
			path: 'shareworks.png',
			url: 'https://www.morganstanley.com/atwork/workplace-solutions-for-private-companies'
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

<div class="mx-auto py-4 sm:py-6 md:py-10 bg-gray-100">
	<div class="container mx-auto flex flex-col md:flex-row">
		<div class="w-screen md:w-1/3 flex items-center justify-center sm:pr-8">
			<h2
				class="text-4xl flex flex-row sm:flex-col md:text-5xl leading-normal font-bold text-gray-600"
			>
				<div class="hidden md:block">
					<div>Our</div>
					<div>Partners</div>
					<div>Include</div>
				</div>
				<div class="md:hidden">Our Partners Include</div>
			</h2>
		</div>
		<div class="w-screen md:w-2/3 flex justify-center items-center">
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-0">
				{#each partnerImages as { path, url }}
					<div class="partner-logo">
						<a href={url} target="_blank">
							<img
								src={`${partnerImagesPath}${path}`}
								alt="Partner Logo"
								class="max-w-full h-auto"
							/>
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
