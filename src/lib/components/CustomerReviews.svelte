<script>
	import RedBar from './RedBar.svelte';
	import ReviewList from './ReviewList.svelte';
	import { reviews } from '$lib/reviews';
	import { styles } from '$lib/styles';
</script>

<section class="bg-black py-24 md:py-32">
	<div
		class="relative isolate overflow-hidden px-6 text-center shadow-2xl sm:px-16 flex flex-col items-center justify-between text-white"
	>
		<div class="grid gap-2">
			<RedBar classes="mx-auto" />
			<h2 class={styles.h2}>What Our Customers are Saying</h2>
		</div>

		<div class="max-w-7xl mx-auto w-full">
			<ReviewList {reviews} />
		</div>
	</div>
</section>
