<script lang="ts">
	type BreadcrumbItem = {
		name: string;
		href: string;
	};

	let { items }: { items: BreadcrumbItem[] } = $props();

	const fullItems = [{ name: 'Home', href: '/' }, ...items];

	const jsonLD = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: fullItems.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: `https://www.acceleratedep.com${item.href}`
		}))
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLD)}</script>`}
</svelte:head>

<div class="px-6">
	<nav aria-label="Breadcrumb" class="mx-auto w-full max-w-7xl pt-4 pb-2">
		<ol class="flex flex-wrap items-center gap-1 text-sm text-stone-500">
			{#each fullItems as item, index}
				{#if index > 0}
					<li class="flex items-center gap-1" aria-hidden="true">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="size-3.5 text-stone-400"
						>
							<path
								fill-rule="evenodd"
								d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
								clip-rule="evenodd"
							/>
						</svg>
					</li>
				{/if}
				<li>
					{#if index < fullItems.length - 1}
						<a href={item.href} class="transition-colors hover:text-red-700 hover:underline">
							{item.name}
						</a>
					{:else}
						<span aria-current="page" class="text-stone-700 font-medium">{item.name}</span>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>
</div>
