<script lang="ts">
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Autoplay, Navigation } from 'swiper/modules';

	const partnerImagesPath = '/images/partners/';

	const partnerData = [
		{
			altText: 'Insightsoftware',
			path: 'insightsoftware.svg',
			url: 'https://insightsoftware.com/certent/equity-management-software/'
		},
		{
			altText: 'Morgan Stanley at Work',
			path: 'morgan-stanley-at-work.png.webp',
			url: 'https://www.morganstanley.com/atwork'
		},
		{
			altText: 'Equity Methods',
			path: 'equitymethods.png.webp',
			url: 'https://www.equitymethods.com'
		},
		{
			altText: 'Charles Schwab',
			path: 'schwab.svg',
			url: 'https://workplacefinancialservices.schwab.com/stock-plans'
		},
		{
			altText: 'Fidelity',
			path: 'fidelity.svg',
			url: 'https://www.fidelityworkplace.com/s/equity'
		},
		{
			altText: 'Global Shares',
			path: 'globalshares.png.webp',
			url: 'https://www.globalshares.com'
		},
		{ altText: 'Eqvista', path: 'eqvista.png.webp', url: 'https://eqvista.com' },
		{ altText: 'Carta', path: 'carta.svg', url: 'https://carta.com' },
		{
			altText: 'Deloitte',
			path: 'deloitte.svg',
			url: 'https://www.deloitte.com/global/en/services/tax/services/equity-and-incentives.html'
		},
		{
			altText: 'PwC',
			path: 'pwc.svg',
			url: 'https://www.pwc.com/us/en/industries/financial-services/private-equity.html'
		},
		{
			altText: 'KPMG',
			path: 'kpmg.svg',
			url: 'https://kpmg.com/us/en/home/industries/private-equity.html'
		},
		{
			altText: 'UBS',
			path: 'ubs.png.webp',
			url: 'https://www.ubs.com/us/en/wealth-management/our-solutions/companies-organizations.html'
		}
	];
	let partnerImages = partnerData.map((partner) => ({
		altText: partner.altText,
		path: partner.path.replace('/static', ''),
		url: partner.url
	}));

	onMount(() => {
		new Swiper('.partner-swiper', {
			autoplay: {
				delay: 2500
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
		{#each partnerImages as { altText, path, url }}
			<a href={url} target="_blank" class="swiper-slide">
				<img
					alt={`${altText} Logo`}
					class={clsx(
						'max-h-[120px] md:max-w-[240px] mx-auto opacity-100 transition-colors duration-300',
						'md:opacity-80',
						'hover:opacity-100'
					)}
					loading="lazy"
					src={`${partnerImagesPath}${path}`}
				/>
			</a>
		{/each}
	</div>
</div>
