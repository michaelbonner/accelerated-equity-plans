<script>
	import { reviews } from '$lib/reviews';
	import { styles } from '$lib/styles';
	import RedBar from './RedBar.svelte';
	import ReviewList from './ReviewList.svelte';
</script>

<section class="py-24 bg-black md:py-32">
	<div
		class="flex overflow-hidden relative flex-col justify-between items-center px-6 text-center text-white sm:px-16 isolate"
	>
		<div class="grid gap-2">
			<RedBar classes="mx-auto" />
			<h2 class={styles.h2}>What Our Customers are Saying</h2>
		</div>

		<div class="mx-auto w-full max-w-7xl">
			<ReviewList {reviews} />
		</div>
	</div>
</section>
