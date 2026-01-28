<script>
	import { page } from '$app/state';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';
</script>

<svelte:head>
	<title>{page.status} | Accelerated Equity Plans</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main>
	<section class={styles.heroSection}>
		<!-- Background with gradient overlay -->
		<div class="absolute inset-0 bg-gradient-to-b from-stone-900 to-black"></div>

		<!-- Content -->
		<div class={clsx('relative z-10 h-full text-center', 'sm:px-8')}>
			<div class={clsx('grid gap-6 prose-white max-w-3xl', 'sm:mx-auto')}>
				<p class="text-9xl font-bold font-headings text-red-700">{page.status}</p>
				<h1 class={styles.h1}>
					{#if page.status === 404}
						Page Not Found
					{:else}
						Something Went Wrong
					{/if}
				</h1>
				<p class="mx-auto mt-4 max-w-xl text-lg font-light leading-8 text-stone-300">
					{#if page.status === 404}
						The page you're looking for doesn't exist or has been moved. Let's get you back on
						track.
					{:else}
						{page.error?.message || 'An unexpected error occurred. Please try again later.'}
					{/if}
				</p>
				<div class="flex flex-wrap gap-4 justify-center mt-4">
					<a href="/" class={styles.redButton}>Go to Homepage</a>
					<a href="/contact" class={styles.darkButton}>Contact Us</a>
				</div>
			</div>
		</div>
	</section>
</main>
