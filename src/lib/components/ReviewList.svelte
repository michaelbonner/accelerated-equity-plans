<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import Swiper from 'swiper';
	import { Navigation, Pagination, Autoplay } from 'swiper/modules';
	import BsArrowLeftCircle from 'svelte-icons-pack/bs/BsArrowLeftCircle';
	import BsArrowRightCircle from 'svelte-icons-pack/bs/BsArrowRightCircle';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	import type { Review } from '$lib/types';

	export let reviews: Review[] = [];

	let swiperContainer: HTMLElement;

	onMount(() => {
		new Swiper(swiperContainer, {
			modules: [Navigation, Pagination, Autoplay],
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			loop: true,
			speed: 1000
		});
	});
</script>

<div class="relative h-full" bind:this={swiperContainer}>
	<div class="swiper-wrapper">
		{#each reviews as review}
			<div class="swiper-slide">
				<div class="carousel-item">
					<div class="flex flex-col w-5/6 sm:w-1/2 h-auto py-10">
						<h3 class=" text-2xl font-semibold">{review.name}</h3>
						<p class="text-gray-600">{review.reviewText}</p>
						<p class="text-gray-600">{review.name}</p>
						<p class="text-gray-600">{review.title}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="swiper-button-prev">
		<button class="carousel-arrow hidden sm:block">
			<Icon src={BsArrowLeftCircle} />
		</button>
	</div>
	<div class="swiper-button-next">
		<button class="carousel-arrow hidden sm:block">
			<Icon src={BsArrowRightCircle} />
		</button>
	</div>

	<div class="swiper-pagination"></div>
</div>

<style lang="postcss">
	.carousel-item {
		@apply flex items-center justify-center h-64;
	}

	.swiper-wrapper {
		@apply py-28;
	}

	.swiper-button-prev,
	.swiper-button-next {
		@apply text-gray-800;
	}

	.swiper-button-prev::after,
	.swiper-button-next::after {
		content: '';
	}

	.swiper-pagination {
		@apply mt-4;
	}

	:global(.swiper-pagination-bullet) {
		@apply bg-gray-300 opacity-50 w-3 h-3 rounded-full mx-1;
	}

	:global(.swiper-pagination-bullet-active) {
		@apply bg-gray-800 opacity-100;
	}
</style>
