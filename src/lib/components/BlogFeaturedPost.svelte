<script lang="ts">
	import { resolve } from '$app/paths';
	import EmilyHeadShot from '$lib/images/head-shots/emily-head-shot.jpg?enhanced';
	import { styles } from '$lib/styles';
	import type { BlogPost } from '$lib/types';
	import { formatDisplayDate } from '$lib/utils/date';
	import { ArrowRight } from '@lucide/svelte';
	import { clsx } from 'clsx';
	import BlogTagList from './BlogTagList.svelte';
	import RedBar from './RedBar.svelte';

	interface Props {
		post: BlogPost;
		label?: string;
		selectedTag?: string | null;
	}

	let { post, label = 'Featured', selectedTag = null }: Props = $props();
</script>

<article
	class={clsx(
		'group relative p-8 bg-zinc-50 rounded-2xl ring-1 transition-colors ring-zinc-900/10',
		'hover:bg-white hover:ring-zinc-900/20',
		'md:p-12'
	)}
>
	<div
		class={clsx(
			'grid gap-8',
			'lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-16 lg:items-end'
		)}
	>
		<div class="grid gap-5">
			<div class="grid gap-2">
				<RedBar />
				<p class="text-xs font-medium tracking-widest text-zinc-500 uppercase">{label}</p>
			</div>

			<h3 class={clsx(styles.h2, 'max-w-[26ch]')}>
				<a
					href={resolve('/blog/[slug]', { slug: post.slug })}
					class={clsx(
						'no-underline transition-colors group-hover:text-aep-red-700',
						'after:absolute after:inset-0 after:content-[""] after:rounded-2xl',
						'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aep-red-700'
					)}
				>
					{post.title}
				</a>
			</h3>

			<p class="max-w-[62ch] text-lg font-light text-zinc-600 text-pretty">
				{post.excerpt}
			</p>

			<BlogTagList tags={post.tags} {selectedTag} />
		</div>

		<div class="grid gap-6 lg:border-l lg:border-zinc-900/10 lg:pl-8">
			<div class="grid gap-1 text-sm">
				<p class="text-xs font-medium tracking-widest text-aep-red-700 uppercase">
					{post.category}
				</p>
				<p class="text-zinc-500">{post.readingTime} min read</p>
			</div>

			<div class="flex gap-3 items-center">
				<enhanced:img
					src={EmilyHeadShot}
					alt={post.author.name}
					class="object-cover rounded-full size-11"
					sizes="44px"
				/>
				<div class="text-sm">
					<p class="font-medium text-zinc-900">{post.author.name}</p>
					<time datetime={post.publishedDate} class="text-zinc-500">
						{formatDisplayDate(post.publishedDate)}
					</time>
				</div>
			</div>

			<p class="flex gap-1.5 items-center text-base font-medium text-aep-red-700">
				<span>Read the article</span>
				<ArrowRight
					class="transition-transform size-4 shrink-0 group-hover:translate-x-1"
					aria-hidden="true"
				/>
			</p>
		</div>
	</div>
</article>
