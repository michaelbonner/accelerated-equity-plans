<script lang="ts">
	import { styles } from '$lib/styles';
	import type { Review } from '$lib/types';
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	import { Icon } from 'svelte-icons-pack';
	import { BsChevronLeft, BsChevronRight } from 'svelte-icons-pack/bs';
	import Swiper from 'swiper';
	import { Navigation } from 'swiper/modules';
	import Quote from './icons/Quote.svelte';

	import 'swiper/css';
	import 'swiper/css/navigation';

	export let reviews: Review[] = [];

	let swiperContainer: HTMLElement;

	onMount(() => {
		new Swiper(swiperContainer, {
			modules: [Navigation],
			slidesPerView: 1,
			loop: true,
			spaceBetween: 10,
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 20
				}
			}
		});
	});

	const nextSlide = () => {
		// @ts-ignore
		swiperContainer.swiper.slideNext();
	};
	const previousSlide = () => {
		// @ts-ignore
		swiperContainer.swiper.slidePrev();
	};
</script>

<div class="mx-18 mt-12">
	<div class="relative" bind:this={swiperContainer}>
		<div class="swiper-wrapper">
			{#each reviews as review}
				<div class={clsx('swiper-slide', styles.blueRedGradientBackground)}>
					<div class="rounded-lg flex flex-col text-left bg-white p-8 text-black gap-2">
						<div>
							<div class="inline-block bg-black p-3 rounded-xl">
								<Quote />
							</div>
						</div>
						<div class="prose">
							<p>{review.reviewText}</p>
						</div>
						<h3 class="font-semibold">{review.name}</h3>
						<p class="font-semibold">{review.title}</p>
					</div>
				</div>
			{/each}
		</div>

		<button
			class="absolute z-10 top-[45%] -left-16 hidden sm:block bg-white hover:bg-stone-100 transition-colors rounded-full p-3 text-black text-xl shadow-md"
			on:click={previousSlide}
			title="Previous review"
		>
			<Icon src={BsChevronLeft} />
		</button>
		<button
			class="absolute z-10 top-[45%] -right-16 hidden sm:block bg-white hover:bg-stone-100 transition-colors rounded-full p-3 text-black text-xl shadow-md"
			on:click={nextSlide}
			title="Next review"
		>
			<Icon src={BsChevronRight} />
		</button>
	</div>
</div>
