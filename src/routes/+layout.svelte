<script lang="ts">
	import '../app.css';

	import Analytics from '$lib/analytics.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	$: showBackground = $page.url.pathname !== '/';
	console.log('Show background', showBackground);

	onMount(() => {
		document.querySelectorAll('link[rel="preload"]').forEach((link) => {
			link.setAttribute('rel', 'stylesheet');
		});
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		as="style"
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lora:wght@400;500;700&display=swap"
		rel="preload"
	/>
	<meta name="google-site-verification" content="P9yZQUWa7MG_9CkMXW0nuZ0yUkn95LNLzUQMdNJOBtU" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<Analytics />
<div class="flex flex-col min-h-screen">
	<Navbar {showBackground} />
	<div class="flex flex-col flex-grow bg-white">
		<slot />
	</div>
	<!-- <Footer /> -->
</div>
