<script lang="ts">
	import BlogFeaturedPost from '$lib/components/BlogFeaturedPost.svelte';
	import BlogPostListItem from '$lib/components/BlogPostListItem.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import FooterCallout from '$lib/components/FooterCallout.svelte';
	import RedBar from '$lib/components/RedBar.svelte';
	import { getPublishedBlogPosts } from '$lib/data/blogPosts';
	import HeroBg from '$lib/images/backgrounds/high-rise-looking-up.jpg?enhanced';
	import { styles } from '$lib/styles';
	import { toISODateTime } from '$lib/utils/date';
	import { blogFilterHref, matchSlug } from '$lib/utils/tags';
	import { page } from '$app/state';
	import { clsx } from 'clsx';

	const title = 'Insights & Resources | Accelerated Equity Plans Blog';
	const description =
		'Expert insights on equity compensation, stock plan administration, IPO readiness, and more. Stay informed with the latest from the AEP team.';
	const path = '/blog';

	const posts = getPublishedBlogPosts();

	const allTags = [...new Set(posts.flatMap((post) => post.tags))];

	// The tag filter lives in the URL so a filtered view can be linked to from
	// anywhere, including the tag lists on individual articles.
	const selectedTag = $derived(matchSlug(allTags, page.url.searchParams.get('tag')));

	const filteredPosts = $derived(
		selectedTag ? posts.filter((post) => post.tags.includes(selectedTag)) : posts
	);

	const featuredPost = $derived(filteredPosts[0]);
	const remainingPosts = $derived(filteredPosts.slice(1));

	const jsonLD = $derived({
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
		blogPost: filteredPosts.map((post) => ({
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
	});

	const jsonLDScript = $derived(
		`<script type="application/ld+json">${JSON.stringify(jsonLD)}</${'script'}>`
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-image.jpg" />
	<link rel="canonical" href={`https://www.acceleratedep.com${path}`} />
	<meta property="og:url" content={`https://www.acceleratedep.com${path}`} />

	{@html jsonLDScript}
</svelte:head>

<main class="bg-white isolate antialiased">
	<section
		class={clsx(
			'flex flex-col justify-center relative pt-36 pb-12 px-6 text-white bg-black',
			'md:min-h-[46vh] md:pt-28 md:pb-16'
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
		<div
			class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent"
			aria-hidden="true"
		></div>

		<div class="relative z-10 mx-auto w-full max-w-7xl">
			<div class="grid gap-6 max-w-4xl">
				<p class="text-base font-medium text-aep-red-100 sm:text-lg">Insights & Resources</p>
				<h1 class={clsx(styles.h1, 'max-w-[22ch]')}>Equity compensation, explained clearly</h1>
				<p class="max-w-[62ch] text-lg/8 font-light text-white/90 text-pretty">
					Practical guidance on stock plan administration, compliance, and equity program design
					from the people who run these programs every day.
				</p>
				<ul
					role="list"
					class="grid gap-3 pt-2 max-w-3xl text-base text-white/75 sm:grid-cols-3 sm:text-sm"
				>
					<li class="pl-4 border-l border-white/20">Plan administration</li>
					<li class="pl-4 border-l border-white/20">Compliance and reporting</li>
					<li class="pl-4 border-l border-white/20">IPO and M&A readiness</li>
				</ul>
			</div>
		</div>
	</section>

	<Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />

	<div class="px-6">
		<section id="articles" class={clsx('max-w-7xl mx-auto py-20 scroll-mt-20', 'md:py-28')}>
			{#if posts.length === 0}
				<div class="grid gap-2">
					<RedBar />
					<h2 class={styles.h2}>Articles are on the way</h2>
					<p class="mt-2 max-w-[60ch] text-lg font-light text-zinc-600">
						Check back soon for new articles on equity compensation and administration.
					</p>
				</div>
			{:else}
				<div class="grid gap-2">
					<RedBar />
					<h2 class={clsx(styles.h2, 'max-w-[24ch]')}>Latest Articles</h2>
				</div>

				{#if selectedTag}
					<div class="flex flex-wrap gap-x-4 gap-y-2 items-center mt-8 text-sm" aria-live="polite">
						<p class="text-zinc-600">
							Showing {filteredPosts.length}
							{filteredPosts.length === 1 ? 'article' : 'articles'} tagged
							<span class="font-medium text-zinc-900 first-letter:uppercase">{selectedTag}</span>
						</p>
						<a
							href={blogFilterHref()}
							class={clsx(
								'font-medium text-aep-red-700 underline hover:text-aep-red-600',
								'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aep-red-700'
							)}
						>
							Clear filter
						</a>
					</div>
				{/if}

				<div class="mt-12">
					<BlogFeaturedPost
						post={featuredPost}
						label={selectedTag ? 'Latest' : 'Featured'}
						{selectedTag}
					/>
				</div>

				{#if remainingPosts.length > 0}
					<div class="mt-16 md:mt-20">
						<h3 class="text-xs font-medium tracking-widest text-zinc-500 uppercase">
							{selectedTag ? `More on ${selectedTag}` : 'More articles'}
						</h3>
						<ul role="list" class="mt-6 border-t divide-y border-zinc-200 divide-zinc-200">
							{#each remainingPosts as post (post.slug)}
								<li>
									<BlogPostListItem {post} {selectedTag} />
								</li>
							{/each}
						</ul>
					</div>
				{:else if selectedTag}
					<p class="mt-8 font-light text-zinc-600">
						That's the only {selectedTag.toLowerCase()} article for now.
					</p>
				{/if}
			{/if}
		</section>
	</div>

	<FooterCallout />
</main>
