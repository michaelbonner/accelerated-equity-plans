<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Autoplay, Navigation } from 'swiper/modules';

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

	onMount(() => {
		new Swiper('.partner-swiper', {
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			centeredSlides: true,
			loop: true,
			modules: [Autoplay, Navigation],
			slidesPerView: 2,
			spaceBetween: 30,
			breakpoints: {
				640: {
					slidesPerView: 4,
					spaceBetween: 60
				}
			}
		});
	});
</script>

<div class="partner-swiper px-8 overflow-hidden">
	<div class="swiper-wrapper items-center">
		{#each partnerImages as { path, url }}
			<a href={url} target="_blank" class="swiper-slide">
				<img class="max-h-[120px] mx-auto" src={`${partnerImagesPath}${path}`} alt="Partner Logo" />
			</a>
		{/each}
	</div>
</div>
