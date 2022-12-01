<script lang="ts">
	import '../app.css';

	import Analytics from '$lib/analytics.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelectorAll('link[rel="preload"]').forEach((link) => {
			link.setAttribute('rel', 'stylesheet');
		});
	});
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-252472179V"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-252472179V');
	</script>

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

<slot />
