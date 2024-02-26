<script lang="ts">
	import '../app.css';

	import Analytics from '$lib/analytics.svelte';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	import { onMount } from 'svelte';

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
</svelte:head>

<Analytics />
<div class="flex flex-col min-h-screen">
	<Navbar />
		<div class="flex flex-col flex-grow bg-white">
			<slot />
		</div>
	<Footer />
</div>
