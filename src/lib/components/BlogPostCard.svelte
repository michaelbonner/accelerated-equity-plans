<script lang="ts">
	import type { BlogPost } from '$lib/types';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';
	import EmilyHeadShot from '$lib/images/head-shots/emily-head-shot.jpg?enhanced';

	interface Props {
		post: BlogPost;
	}

	let { post }: Props = $props();

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<article class={clsx(styles.cardHover, 'h-full')}>
	<a
		href={`/blog/${post.slug}`}
		class="flex flex-col h-full bg-white rounded-lg border border-stone-200 overflow-hidden no-underline group"
	>
		<div class="p-6 flex flex-col gap-4 grow">
			<div class="flex items-center gap-2 text-sm text-stone-500">
				<span
					class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium uppercase tracking-wide"
				>
					{post.category}
				</span>
				<span>{post.readingTime} min read</span>
			</div>

			<h3
				class={clsx(
					styles.h4,
					'text-stone-900 group-hover:text-red-700 transition-colors line-clamp-2'
				)}
			>
				{post.title}
			</h3>

			<p class="text-stone-600 font-light line-clamp-3 grow">
				{post.excerpt}
			</p>

			<div class="flex items-center gap-3 pt-4 border-t border-stone-100">
				<enhanced:img
					src={EmilyHeadShot}
					alt={post.author.name}
					class="w-10 h-10 rounded-full object-cover"
				/>
				<div class="text-sm">
					<p class="font-medium text-stone-900">{post.author.name}</p>
					<p class="text-stone-500">{formatDate(post.publishedDate)}</p>
				</div>
			</div>
		</div>
	</a>
</article>
