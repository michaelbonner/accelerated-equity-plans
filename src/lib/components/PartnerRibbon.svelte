<script lang="ts">
	import { onMount } from 'svelte';

	const partnerImagesPath = '/partner-images/';

	const partnerData = [
		{
			path: 'insightsoftware.svg',
			url: 'https://insightsoftware.com/certent/equity-management-software/'
		},
		{ path: 'morgan-stanley-at-work.png.webp', url: 'https://www.morganstanley.com/atwork' },
		{ path: 'equitymethods.png.webp', url: 'https://www.equitymethods.com' },
		{ path: 'schwab.png.webp', url: 'https://workplacefinancialservices.schwab.com/stock-plans' },
		{ path: 'fidelity.svg', url: 'https://www.fidelityworkplace.com/s/equity' },
		{ path: 'globalshares.png.webp', url: 'https://www.globalshares.com' },
		{ path: 'eqvista.png.webp', url: 'https://eqvista.com' },
		{ path: 'carta.png.webp', url: 'https://carta.com' },
		{
			path: 'deloitte.png.webp',
			url: 'https://www.deloitte.com/global/en/services/tax/services/equity-and-incentives.html'
		},
		{
			path: 'pwc.png.webp',
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
</script>

<div class="mx-auto py-4 sm:py-6 md:py-10 bg-slate-50">
	<div class="container mx-auto flex flex-col py-12 px-8">
		<div class="prose font-eurostile text-slate-800 mx-auto">
			<h2>Our Partners</h2>
		</div>
		<div class="w-full flex justify-center items-center lg:max-w-5xl mx-auto mt-8">
			<div
				class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 lg:gap-y-8 gap-x-4 px-4 justify-center"
			>
				{#each partnerImages as { path, url }}
					<div class="flex items-center justify-center">
						<a
							href={url}
							target="_blank"
							class="flex items-center justify-center w-full h-full bg-slate-50 hover:bg-white rounded-xl p-4 transition-colors duration-300 group"
						>
							<img
								src={`${partnerImagesPath}${path}`}
								alt="Partner Logo"
								class="h-auto max-h-16 w-full max-w-[120px] translate-y-1 group-hover:-translate-y-0 transition-transform duration-300"
							/>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
