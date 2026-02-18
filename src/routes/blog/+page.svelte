<script lang="ts">
	import BlogPostCard from '$lib/components/BlogPostCard.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import { getPublishedBlogPosts } from '$lib/data/blogPosts';
	import HeroBg from '$lib/images/backgrounds/high-rise-looking-up.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { toISODateTime } from '$lib/utils/date';
	import { clsx } from 'clsx';

	const title = 'Insights & Resources | Accelerated Equity Plans Blog';
	const description =
		'Expert insights on equity compensation, stock plan administration, IPO readiness, and more. Stay informed with the latest from the AEP team.';
	const path = '/blog';

	const posts = getPublishedBlogPosts();

	const jsonLD = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'Accelerated Equity Plans Blog',
		description:
			'Expert insights on equity compensation, stock plan administration, and equity plan management.',
		url: 'https://www.acceleratedep.com/blog',
		publisher: {
			'@type': 'Organization',
			name: 'Accelerated Equity Plans',
			url: 'https://www.acceleratedep.com'
		},
		blogPost: posts.map((post) => ({
			'@type': 'BlogPosting',
			headline: post.title,
			description: post.excerpt,
			datePublished: toISODateTime(post.publishedDate),
			dateModified: toISODateTime(post.updatedDate || post.publishedDate),
			author: {
				'@type': 'Person',
				name: post.author.name
			},
			url: `https://www.acceleratedep.com/blog/${post.slug}`
		}))
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-image.jpg" />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLD)}</script>`}
</svelte:head>

<main>
	<section
		class={clsx(
			'flex flex-col justify-center relative pt-36 pb-8 px-6 text-white bg-black',
			'md:min-h-[50vh] md:pt-24 pb-6'
		)}
	>
		<div class="overflow-hidden absolute inset-0">
			<enhanced:img
				alt="Looking up at high-rise buildings"
				class="object-cover size-full"
				fetchpriority="high"
				src={HeroBg}
			/>
		</div>
		<div class="absolute inset-0 bg-black/80"></div>

		<div class={clsx('relative z-10 h-full', 'sm:px-8 sm:text-center')}>
			<div class={clsx('grid gap-4 prose-white max-w-5xl', 'sm:mx-auto')}>
				<h1 class={styles.h1}>Insights & Resources</h1>
				<p class="mx-auto mt-6 max-w-3xl text-lg font-light leading-8">
					Expert perspectives on equity compensation, stock plan administration, and building
					world-class equity programs. Stay informed with insights from the AEP team.
				</p>
			</div>
		</div>
	</section>

	<Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />

	<div class="px-6">
		<section class={clsx('max-w-7xl mx-auto py-24', 'md:py-36')}>
			<div class="grid gap-2 mb-12">
				<RedBar />
				<h2 class={styles.h2}>Latest Articles</h2>
			</div>

			{#if posts.length === 0}
				<p class="text-stone-600 text-lg">
					Check back soon for new articles on equity compensation and administration.
				</p>
			{:else}
				<div class={clsx('grid gap-8', 'md:grid-cols-2', 'lg:grid-cols-3')}>
					{#each posts as post}
						<BlogPostCard {post} />
					{/each}
				</div>
			{/if}
		</section>
	</div>

	<FooterCallout />
</main>
