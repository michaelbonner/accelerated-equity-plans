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
			name: 'Services',
			href: '/services',
			icon: BiCustomize
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
			name: 'Contact Us',
			href: '/contact',
			headerClasses: 'bg-white text-black hover:text-red-600 ml-4',
			icon: AiOutlineContacts
		}
	];
</script>

<svelte:head>
	<meta name="google-site-verification" content="P9yZQUWa7MG_9CkMXW0nuZ0yUkn95LNLzUQMdNJOBtU" />
	<meta name="color-scheme" content="light only" />
	<meta name="theme-color" content="#ac2228" />
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-image.jpg" />
	<meta property="og:site_name" content="Accelerated Equity Plans" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Accelerated Equity Plans" />
	<meta
		name="twitter:description"
		content="AEP brings industry expertise and support to deliver a best-in-class equity program experience for teams, partners, and participants."
	/>
	<meta name="twitter:image" content="https://www.acceleratedep.com/images/og-image.jpg" />
</svelte:head>

<Analytics />
<div class="flex flex-col min-h-screen">
	<Navbar {navLinks} />
	<div class="flex flex-col flex-grow bg-white">
		<slot />
	</div>
	<Footer {navLinks} />
</div>
