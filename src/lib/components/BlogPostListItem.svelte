<script lang="ts">
	import { resolve } from '$app/paths';
	import { styles } from '$lib/styles';
	import type { BlogPost } from '$lib/types';
	import { formatShortDate } from '$lib/utils/date';
	import { ArrowRight } from '@lucide/svelte';
	import { clsx } from 'clsx';
	import BlogTagList from './BlogTagList.svelte';

	interface Props {
		post: BlogPost;
		selectedTag?: string | null;
	}

	let { post, selectedTag = null }: Props = $props();
</script>

<article
	class={clsx(
		'group relative grid gap-3 py-8 px-4 -mx-4 rounded-xl transition-colors',
		'hover:bg-zinc-50',
		'lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-12 lg:py-10'
	)}
>
	<div class="flex flex-wrap gap-x-3 gap-y-1 items-baseline text-sm lg:flex-col lg:gap-1">
		<p class="text-xs font-medium tracking-widest text-aep-red-700 uppercase">
			{post.category}
		</p>
		<time datetime={post.publishedDate} class="text-zinc-500">
			{formatShortDate(post.publishedDate)}
		</time>
		<p class="text-zinc-500 lg:text-zinc-400">{post.readingTime} min read</p>
	</div>

	<div class="grid gap-3">
		<h3 class={clsx(styles.h4, 'text-zinc-900')}>
			<a
				href={resolve('/blog/[slug]', { slug: post.slug })}
				class={clsx(
					'no-underline transition-colors group-hover:text-aep-red-700',
					'after:absolute after:inset-0 after:content-[""] after:rounded-xl',
					'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aep-red-700'
				)}
			>
				{post.title}
			</a>
		</h3>

		<p class="max-w-[70ch] font-light text-zinc-600 line-clamp-2 text-pretty">
			{post.excerpt}
		</p>

		<div class="flex flex-wrap gap-x-6 gap-y-3 justify-between items-center">
			<BlogTagList tags={post.tags} {selectedTag} />

			<p class="flex gap-1.5 items-center text-sm font-medium text-aep-red-700">
				<span>Read the article</span>
				<ArrowRight
					class="transition-transform size-4 shrink-0 group-hover:translate-x-1"
					aria-hidden="true"
				/>
			</p>
		</div>
	</div>
</article>
