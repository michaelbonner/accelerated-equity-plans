<script lang="ts">
	import { styles } from '$lib/styles';
	import { ChevronDown, ChevronsUpDown, ChevronUp } from '@lucide/svelte';
	import { clsx } from 'clsx';
	import {
		keywords,
		reportDate,
		previousReportDate,
		type DevicePosition,
		type KeywordRanking
	} from '$lib/data/seoRankings';

	const title = 'SEO Rankings Report | Accelerated Equity Plans';
	const description = 'Private SEO keyword ranking report for Accelerated Equity Plans.';

	const formatDate = (iso: string) =>
		new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});

	// A keyword counts as ranking if it appears in Google on either device.
	const isRanking = (k: KeywordRanking) => k.desktop.current !== null || k.mobile.current !== null;

	// Best (lowest) current position across the two devices.
	const bestPosition = (k: KeywordRanking) => {
		const vals = [k.desktop.current, k.mobile.current].filter((v): v is number => v !== null);
		return vals.length ? Math.min(...vals) : null;
	};

	const deviceImproved = (d: DevicePosition) =>
		!d.isNew && d.previous !== null && d.current !== null && d.current < d.previous;

	const ranking = $derived(keywords.filter(isRanking));
	const topTen = $derived(ranking.filter((k) => (bestPosition(k) as number) <= 10));
	const newlyRanking = $derived(ranking.filter((k) => k.desktop.isNew || k.mobile.isNew));
	const improved = $derived(
		ranking.filter((k) => deviceImproved(k.desktop) || deviceImproved(k.mobile))
	);
	const monthlyTraffic = $derived(
		ranking.reduce((sum, k) => sum + k.desktop.traffic + k.mobile.traffic, 0)
	);

	const summary = $derived([
		{ value: keywords.length, label: 'Keywords tracked' },
		{ value: ranking.length, label: 'Ranking on Google' },
		{ value: topTen.length, label: 'In the top 10' },
		{ value: newlyRanking.length, label: 'New this period' }
	]);

	// Highlights: ranking keywords ordered by best current position (best first).
	const highlights = $derived(
		[...ranking].sort((a, b) => (bestPosition(a) as number) - (bestPosition(b) as number))
	);

	const deviceChange = (d: DevicePosition) => {
		if (d.isNew) return { label: 'New', kind: 'new' as const };
		if (d.previous !== null && d.current === null) return { label: 'Lost', kind: 'down' as const };
		if (d.previous === null || d.current === null) return { label: '—', kind: 'none' as const };
		const delta = d.previous - d.current;
		if (delta > 0) return { label: `▲ ${delta}`, kind: 'up' as const };
		if (delta < 0) return { label: `▼ ${Math.abs(delta)}`, kind: 'down' as const };
		return { label: 'No change', kind: 'none' as const };
	};

	const changeClass = (kind: string) =>
		clsx(
			kind === 'up' && 'text-green-700',
			kind === 'down' && 'text-aep-red-700',
			kind === 'new' && 'font-medium text-blue-700',
			kind === 'none' && 'text-stone-400'
		);

	// Opportunities — derived from the same data so they refresh with each report.

	// Service-intent keywords currently ranking on the careers page rather than a
	// relevant service page. Excludes genuine job-seeker queries.
	const careersMismatch = $derived(
		ranking
			.filter((k) => k.url === '/careers' && !k.keyword.includes('job'))
			.sort((a, b) => (bestPosition(a) as number) - (bestPosition(b) as number))
	);

	// Keywords ranking on page two (best position 11–20) that a focused push could
	// move onto page one. Excludes the careers-page mismatches shown above.
	const nearPageOne = $derived(
		ranking
			.filter((k) => {
				const best = bestPosition(k) as number;
				return best >= 11 && best <= 20 && k.url !== '/careers';
			})
			.sort((a, b) => (bestPosition(a) as number) - (bestPosition(b) as number))
	);

	// High-volume keywords we're targeting but not yet ranking on either device.
	const untappedTargets = $derived(
		keywords
			.filter((k) => !isRanking(k) && k.volume >= 100)
			.sort((a, b) => b.volume - a.volume)
			.slice(0, 5)
	);

	// Sorting for the full keyword table. A null `sortKey` keeps the curated
	// order from the data file: ranking keywords by best position, then the
	// remaining targets by search volume.
	type SortKey = 'keyword' | 'desktop' | 'mobile' | 'volume';

	let sortKey = $state<SortKey | null>(null);
	let sortAsc = $state(true);

	// The direction each column starts in when it's first selected — best
	// position and A–Z ascending, biggest search volume first.
	const initialAsc: Record<SortKey, boolean> = {
		keyword: true,
		desktop: true,
		mobile: true,
		volume: false
	};

	const toggleSort = (key: SortKey) => {
		if (sortKey !== key) {
			sortKey = key;
			sortAsc = initialAsc[key];
		} else if (sortAsc === initialAsc[key]) {
			sortAsc = !sortAsc;
		} else {
			// A third click on the active column restores the default order.
			sortKey = null;
		}
	};

	const sortedKeywords = $derived.by(() => {
		const key = sortKey;
		if (key === null) return keywords;
		const dir = sortAsc ? 1 : -1;
		// Array.prototype.sort is stable, so ties keep the default order.
		return [...keywords].sort((a, b) => {
			if (key === 'keyword') return a.keyword.localeCompare(b.keyword) * dir;
			if (key === 'volume') return (a.volume - b.volume) * dir;
			const posA = a[key].current;
			const posB = b[key].current;
			// Keywords not ranking on that device stay at the bottom either way.
			if (posA === null || posB === null) {
				if (posA === posB) return 0;
				return posA === null ? 1 : -1;
			}
			return (posA - posB) * dir;
		});
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#snippet deviceBadge(label: string, d: DevicePosition)}
	{@const change = deviceChange(d)}
	<div class="rounded-lg bg-stone-50 p-3 ring-1 ring-stone-900/5">
		<div class="text-xs font-medium tracking-wide text-stone-400 uppercase">{label}</div>
		<div class="mt-1">
			{#if d.current !== null}
				<span
					class={clsx(
						'text-2xl font-semibold',
						d.current <= 3 ? 'text-aep-red-700' : 'text-stone-900'
					)}>#{d.current}</span
				>
			{:else}
				<span class="text-2xl font-semibold text-stone-300">—</span>
			{/if}
		</div>
		<div class={clsx('mt-1 text-xs', changeClass(change.kind))}>{change.label}</div>
	</div>
{/snippet}

{#snippet sortHeader(key: SortKey, label: string, align: string)}
	{@const active = sortKey === key}
	<th
		scope="col"
		class={clsx('px-5 py-3 font-medium', align)}
		aria-sort={active ? (sortAsc ? 'ascending' : 'descending') : 'none'}
	>
		<button
			type="button"
			onclick={() => toggleSort(key)}
			class={clsx(
				'group inline-flex cursor-pointer items-center gap-1.5 uppercase hover:text-stone-800',
				active && 'text-stone-800'
			)}
		>
			<span>{label}</span>
			{#if !active}
				<ChevronsUpDown class="size-3.5 shrink-0 text-stone-300 group-hover:text-stone-500" />
			{:else if sortAsc}
				<ChevronUp class="size-3.5 shrink-0 text-aep-red-700" />
			{:else}
				<ChevronDown class="size-3.5 shrink-0 text-aep-red-700" />
			{/if}
		</button>
	</th>
{/snippet}

{#snippet deviceCell(d: DevicePosition)}
	{@const change = deviceChange(d)}
	<div class="flex flex-col items-center leading-tight">
		{#if d.current !== null}
			<span class="font-semibold text-stone-900">#{d.current}</span>
		{:else}
			<span class="text-stone-300">—</span>
		{/if}
		<span class={clsx('text-xs', changeClass(change.kind))}>{change.label}</span>
	</div>
{/snippet}

<main class="bg-stone-50">
	<section class="px-6 pt-32 pb-12 sm:pt-40">
		<div class="mx-auto max-w-7xl">
			<p class="text-sm font-medium tracking-wide text-aep-red-700 uppercase">Private report</p>
			<h1 class={clsx(styles.h1, 'mt-3 not-italic')}>SEO rankings report</h1>
			<p class="mt-5 max-w-3xl text-lg leading-8 font-light text-stone-600">
				A snapshot of how Accelerated Equity Plans is ranking for the equity compensation keywords
				we're targeting. Positions reflect Google organic search results in the United States,
				tracked separately for desktop and mobile.
			</p>
			<p class="mt-4 text-sm text-stone-500">
				Reporting period: {formatDate(previousReportDate)} →
				<span class="font-medium text-stone-700">{formatDate(reportDate)}</span>
			</p>
		</div>
	</section>

	<!-- Summary stats -->
	<section class="px-6 pb-12">
		<div class="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
			{#each summary as stat (stat.label)}
				<div class="rounded-xl bg-white p-6 ring-1 ring-stone-900/5">
					<div class="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
						{stat.value}
					</div>
					<div class="mt-2 text-sm font-medium text-stone-500">{stat.label}</div>
				</div>
			{/each}
		</div>
		<div class="mx-auto mt-4 max-w-7xl">
			<div
				class="rounded-xl bg-stone-900 p-6 text-white sm:flex sm:items-center sm:justify-between"
			>
				<div>
					<div class="text-sm font-medium text-stone-300">Estimated organic visits / month</div>
					<div class="mt-1 text-3xl font-semibold tracking-tight">~{monthlyTraffic}</div>
				</div>
				<p class="mt-3 max-w-md text-sm leading-6 text-stone-400 sm:mt-0 sm:text-right">
					{newlyRanking.length} keywords began ranking this period and {improved.length} improved their
					position — building the foundation for compounding organic traffic.
				</p>
			</div>
		</div>
	</section>

	<!-- Highlights -->
	<section class="px-6 pb-12">
		<div class="mx-auto max-w-7xl">
			<h2 class={clsx(styles.h3, 'not-italic')}>Ranking highlights</h2>
			<p class="mt-2 text-stone-600">
				Keywords where the site currently appears in Google search results, ordered by best position
				across desktop and mobile.
			</p>
			<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each highlights as k (k.keyword)}
					<div class="flex flex-col rounded-xl bg-white p-5 ring-1 ring-stone-900/5">
						<span class="font-medium text-stone-900">{k.keyword}</span>
						<div class="mt-4 grid grid-cols-2 gap-3">
							{@render deviceBadge('Desktop', k.desktop)}
							{@render deviceBadge('Mobile', k.mobile)}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Opportunities -->
	<section class="px-6 pb-12">
		<div class="mx-auto max-w-7xl">
			<h2 class={clsx(styles.h3, 'not-italic')}>Opportunities ahead</h2>
			<p class="mt-2 max-w-3xl text-stone-600">
				Where the data points to the next round of gains. Each of these is an achievable next step
				rather than a long-term bet.
			</p>
			<div class="mt-6 grid gap-4 lg:grid-cols-3">
				<!-- Card 1: URL mismatch -->
				<div class="flex flex-col rounded-xl bg-white p-6 ring-1 ring-stone-900/5">
					<h3 class="text-lg font-semibold text-stone-900">Match keywords to service pages</h3>
					<p class="mt-2 text-sm leading-6 text-stone-600">
						These service-intent searches currently land on the <span class="font-medium"
							>careers</span
						> page. Pointing them at a dedicated service page should lift rankings and send visitors somewhere
						that converts.
					</p>
					<ul class="mt-4 space-y-2 border-t border-stone-100 pt-4 text-sm">
						{#each careersMismatch as k (k.keyword)}
							<li class="flex items-center justify-between gap-3">
								<span class="text-stone-700">{k.keyword}</span>
								<span class="shrink-0 font-semibold text-stone-900">#{bestPosition(k)}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Card 2: near page one -->
				<div class="flex flex-col rounded-xl bg-white p-6 ring-1 ring-stone-900/5">
					<h3 class="text-lg font-semibold text-stone-900">Push page two onto page one</h3>
					<p class="mt-2 text-sm leading-6 text-stone-600">
						These keywords already rank on the second page (positions 11–20). A focused content and
						internal-linking push can move them into the top 10, where the clicks are.
					</p>
					<ul class="mt-4 space-y-2 border-t border-stone-100 pt-4 text-sm">
						{#each nearPageOne as k (k.keyword)}
							<li class="flex items-center justify-between gap-3">
								<span class="text-stone-700">{k.keyword}</span>
								<span class="shrink-0 font-semibold text-stone-900">#{bestPosition(k)}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Card 3: untapped high-volume -->
				<div class="flex flex-col rounded-xl bg-white p-6 ring-1 ring-stone-900/5">
					<h3 class="text-lg font-semibold text-stone-900">Pursue high-volume targets</h3>
					<p class="mt-2 text-sm leading-6 text-stone-600">
						The highest-traffic keywords we're targeting that aren't ranking yet. Dedicated content
						for these would open up the largest new audiences.
					</p>
					<ul class="mt-4 space-y-2 border-t border-stone-100 pt-4 text-sm">
						{#each untappedTargets as k (k.keyword)}
							<li class="flex items-center justify-between gap-3">
								<span class="text-stone-700">{k.keyword}</span>
								<span class="shrink-0 text-stone-500 tabular-nums"
									>{k.volume.toLocaleString()}/mo</span
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Full table -->
	<section class="px-6 pb-24">
		<div class="mx-auto max-w-7xl">
			<h2 class={clsx(styles.h3, 'not-italic')}>All tracked keywords</h2>
			<p class="mt-2 text-stone-600">
				The complete set of keywords we're monitoring, with desktop and mobile positions side by
				side. Keywords without a position are targets we're building toward. Click any column
				heading to sort — a third click returns to the default order.
			</p>
			<div class="mt-6 overflow-x-auto rounded-xl bg-white ring-1 ring-stone-900/5">
				<table class="w-full min-w-[640px] text-left text-sm">
					<thead>
						<tr class="border-b border-stone-200 text-xs tracking-wide text-stone-500 uppercase">
							{@render sortHeader('keyword', 'Keyword', 'text-left')}
							{@render sortHeader('desktop', 'Desktop', 'text-center')}
							{@render sortHeader('mobile', 'Mobile', 'text-center')}
							{@render sortHeader('volume', 'Monthly searches', 'text-right')}
						</tr>
					</thead>
					<tbody class="divide-y divide-stone-100">
						{#each sortedKeywords as k (k.keyword)}
							<tr class={clsx(!isRanking(k) && 'text-stone-400')}>
								<td class="px-5 py-3 font-medium text-stone-800">{k.keyword}</td>
								<td class="px-5 py-3 text-center">{@render deviceCell(k.desktop)}</td>
								<td class="px-5 py-3 text-center">{@render deviceCell(k.mobile)}</td>
								<td class="px-5 py-3 text-right tabular-nums text-stone-600">
									{k.volume > 0 ? k.volume.toLocaleString() : '—'}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<p class="mt-4 text-xs text-stone-400">
				Position = ranking in Google US organic results, tracked separately for desktop and mobile.
				Monthly searches = estimated US search volume. Confidential — prepared for Accelerated
				Equity Plans.
			</p>
		</div>
	</section>
</main>
