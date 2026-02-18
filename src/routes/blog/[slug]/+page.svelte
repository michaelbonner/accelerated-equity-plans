<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import EmilyHeadShot from '$lib/images/head-shots/emily-head-shot.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { toISODateTime } from '$lib/utils/date';
	import { clsx } from 'clsx';

	let { data } = $props();

	const post = $derived(data.post);

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	const jsonLD = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.metaDescription,
		datePublished: toISODateTime(post.publishedDate),
		dateModified: toISODateTime(post.updatedDate || post.publishedDate),
		author: {
			'@type': 'Person',
			name: post.author.name,
			jobTitle: post.author.title
		},
		publisher: {
			'@type': 'Organization',
			name: 'Accelerated Equity Plans',
			url: 'https://www.acceleratedep.com',
			logo: {
				'@type': 'ImageObject',
				url: 'https://www.acceleratedep.com/images/brand/aep-logo.svg'
			}
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://www.acceleratedep.com/blog/${post.slug}`
		},
		keywords: post.tags.join(', '),
		articleSection: post.category,
		wordCount: post.content
			.replace(/<[^>]*>/g, '')
			.split(/\s+/)
			.filter(Boolean).length,
		timeRequired: `PT${post.readingTime}M`
	});
</script>

<svelte:head>
	<title>{post.metaTitle}</title>
	<meta name="description" content={post.metaDescription} />
	<meta property="og:title" content={post.metaTitle} />
	<meta property="og:description" content={post.metaDescription} />
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-image.jpg" />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={toISODateTime(post.publishedDate)} />
	{#if post.updatedDate}
		<meta property="article:modified_time" content={toISODateTime(post.updatedDate)} />
	{/if}
	<meta property="article:author" content={post.author.name} />
	<meta property="article:section" content={post.category} />
	{#each post.tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}
	<link rel="canonical" href={`https://www.acceleratedep.com/blog/${post.slug}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com/blog/${post.slug}`} />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLD)}</script>`}
</svelte:head>

<main>
	<section
		class={clsx(
			'flex flex-col justify-center relative pt-36 pb-12 px-6 text-white bg-black',
			'md:pt-24 md:pb-16'
		)}
	>
		<div class="absolute inset-0 bg-gradient-to-b from-black to-stone-900"></div>

		<div class={clsx('relative z-10 max-w-4xl mx-auto w-full')}>
			<div class="grid gap-6">
				<a
					href="/blog"
					class="text-stone-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
				>
					<span>&larr;</span>
					<span>Back to all articles</span>
				</a>

				<div class="flex items-center gap-3 text-sm text-stone-400">
					<span
						class="px-2 py-1 bg-red-900/50 text-red-200 rounded-full text-xs font-medium uppercase tracking-wide"
					>
						{post.category}
					</span>
					<span>{post.readingTime} min read</span>
				</div>

				<h1 class={clsx(styles.h1, 'text-white')}>{post.title}</h1>

				<div class="flex items-center gap-4 text-stone-300">
					<enhanced:img
						src={EmilyHeadShot}
						alt={post.author.name}
						class="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
					/>
					<div>
						<p class="font-medium text-white">{post.author.name}</p>
						{#if post.author.title}
							<p class="text-sm text-stone-400">{post.author.title}</p>
						{/if}
					</div>
					<span class="text-stone-600">|</span>
					<time datetime={post.publishedDate} class="text-stone-400">
						{formatDate(post.publishedDate)}
					</time>
				</div>
			</div>
		</div>
	</section>

	<div class="max-w-4xl mx-auto">
		<Breadcrumbs
			items={[
				{ name: 'Blog', href: '/blog' },
				{ name: post.title, href: `/blog/${post.slug}` }
			]}
		/>
	</div>

	<article class={clsx('px-6 max-w-4xl mx-auto py-16', 'md:py-24')}>
		<div
			class={clsx(
				'prose prose-lg max-w-none',
				'prose-headings:font-headings prose-headings:font-medium',
				'prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6',
				'prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4',
				'prose-p:text-stone-700 prose-p:leading-relaxed',
				'prose-li:text-stone-700',
				'prose-a:text-red-700 prose-a:no-underline hover:prose-a:underline',
				'prose-strong:text-stone-900',
				'prose-p.lead:text-xl prose-p.lead:text-stone-600 prose-p.lead:leading-relaxed'
			)}
		>
			{@html post.content}
		</div>

		<div class="mt-16 pt-8 border-t border-stone-200">
			<div class="flex flex-wrap gap-2">
				{#each post.tags as tag}
					<span class="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm">
						{tag}
					</span>
				{/each}
			</div>
		</div>
	</article>

	<section class={clsx('px-6 max-w-4xl mx-auto pb-16', 'md:pb-24')}>
		<div class="bg-stone-50 rounded-xl p-8">
			<div class="grid gap-4">
				<RedBar />
				<h2 class={styles.h3}>Need Help With Your Equity Plan?</h2>
			</div>
			<p class="mt-4 text-stone-600 font-light">
				Our team of equity compensation experts is ready to help you navigate the complexities of
				stock plan administration. Whether you need full outsourcing or targeted support, we're here
				to help.
			</p>
			<div class="mt-6">
				<a href="/contact" class={styles.redButton}>Get in touch</a>
			</div>
		</div>
	</section>

	<FooterCallout />
</main>
