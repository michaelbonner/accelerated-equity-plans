<script lang="ts">
	import '../app.css';

	import Analytics from '$lib/analytics.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';
	import { AiOutlineContacts } from 'svelte-icons-pack/ai';
	import { BiCustomize, BiHomeAlt } from 'svelte-icons-pack/bi';
	import { FaRectangleList } from 'svelte-icons-pack/fa';
	import { IoPeople } from 'svelte-icons-pack/io';

	onMount(() => {
		document.querySelectorAll('link[rel="preload"]').forEach((link) => {
			link.setAttribute('rel', 'stylesheet');
		});
	});

	const navLinks = [
		{
			name: 'Home',
			href: '/',
			icon: BiHomeAlt
		},
		{
			name: 'About',
			href: '/about',
			icon: IoPeople
		},
		{
			name: 'Careers',
			href: '/careers',
			icon: FaRectangleList
		},
		{
			name: 'Services',
			href: '/services',
			icon: BiCustomize
		},
		{
			name: 'Contact Us',
			href: '/contact',
			headerClasses: 'bg-white text-black hover:text-red-600 ml-4',
			icon: AiOutlineContacts
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
