<script lang="ts">
	import '../app.css';

	import Analytics from '$lib/analytics.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelectorAll('link[rel="preload"]').forEach((link) => {
			link.setAttribute('rel', 'stylesheet');
		});
	});

	const navLinks = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Careers',
			href: '/careers'
		},
		{
			name: 'Services',
			href: '/services'
		},
		{
			name: 'Contact Us',
			href: '/contact',
			headerClasses: 'bg-white text-black hover:text-red-600 ml-4'
		}
	];
</script>

<svelte:head>
	<meta name="google-site-verification" content="P9yZQUWa7MG_9CkMXW0nuZ0yUkn95LNLzUQMdNJOBtU" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="color-scheme" content="light only" />
	<meta name="theme-color" content="#ac2228" />
</svelte:head>

<Analytics />
<div class="flex flex-col min-h-screen">
	<Navbar {navLinks} />
	<div class="flex flex-col flex-grow bg-white">
		<slot />
	</div>
	<Footer {navLinks} />
</div>
