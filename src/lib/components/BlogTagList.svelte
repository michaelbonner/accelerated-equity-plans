<script lang="ts">
	import { blogFilterHref } from '$lib/utils/tags';
	import { clsx } from 'clsx';

	interface Props {
		tags: string[];
		selectedTag?: string | null;
		labelledBy?: string;
	}

	let { tags, selectedTag = null, labelledBy }: Props = $props();
</script>

<ul
	role="list"
	aria-labelledby={labelledBy}
	class="flex relative z-10 flex-wrap gap-1.5 items-center"
>
	{#each tags as tag (tag)}
		{@const isSelected = tag === selectedTag}
		<li>
			<a
				href={isSelected ? blogFilterHref() : blogFilterHref({ tag })}
				aria-current={isSelected ? 'true' : undefined}
				class={clsx(
					'inline-flex py-0.5 px-2.5 text-xs no-underline rounded-full ring-1 transition-colors first-letter:uppercase',
					'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aep-red-700',
					isSelected
						? 'bg-aep-red-50 text-aep-red-800 ring-aep-red-700/30'
						: 'text-zinc-500 ring-zinc-900/10 hover:bg-white hover:text-aep-red-700 hover:ring-aep-red-700/30'
				)}
			>
				{tag}
			</a>
		</li>
	{/each}
</ul>
