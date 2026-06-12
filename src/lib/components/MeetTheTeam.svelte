<script lang="ts">
	import { resolve } from '$app/paths';
	import { aepTeam, leadershipTeam } from '$lib/data/leadershipTeam';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';
	import RedBar from './RedBar.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
</script>

<section
	class={clsx(
		'relative bg-stone-700 bg-center bg-cover bg-repeat px-6 py-24 text-white',
		'lg:py-32'
	)}
	style="background-image: url('/images/patterns/Pattern-0224_Pattern-Arrows.svg')"
	id="meet-the-team"
>
	<div class="absolute inset-0 bg-stone-400/30"></div>
	<div class="relative mx-auto grid max-w-7xl gap-20">
		<div class="grid gap-10">
			<div class="grid gap-4">
				<RedBar />
				<h2 class={clsx(styles.h2, 'max-w-[24ch] text-balance')}>Meet the leadership team</h2>
				<div class="prose prose-invert max-w-[64ch] font-light">
					<p>
						As subject matter experts, we can provide your organization with a complete Stock Plan
						Administration team to handle all equity concerns!
					</p>
				</div>
			</div>

			<ul role="list" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{#each leadershipTeam as teamMember (teamMember.fullName)}
					{@render teamCard(teamMember, true)}
				{/each}
			</ul>
		</div>

		<div class="grid gap-10">
			<div class="grid gap-4">
				<RedBar />
				<h3 class={clsx(styles.h3, 'max-w-[24ch] text-balance')}>Meet the AEP team</h3>
				<div class="prose prose-invert max-w-[64ch] font-light">
					<p>The consultants and specialists who deliver on your equity programs every day.</p>
				</div>
			</div>

			<ul role="list" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{#each aepTeam as teamMember (teamMember.fullName)}
					{@render teamCard(teamMember, false)}
				{/each}
			</ul>
		</div>
	</div>
</section>

{#snippet teamCard(teamMember: (typeof leadershipTeam)[number], featured: boolean)}
	<li
		class={clsx(
			'group',
			styles.cardHover,
			featured ? styles.blueRedGradientBackground : 'rounded-lg'
		)}
	>
		<div
			class={clsx(
				'flex h-full flex-col rounded-lg bg-black [&_ul]:mb-8',
				featured ? 'gap-4 p-8' : 'gap-4 p-6 ring-1 ring-white/10'
			)}
		>
			<enhanced:img
				alt=""
				class={clsx(
					'aspect-square rounded-full object-cover outline-1 -outline-offset-1 outline-white/10 grayscale transition-all',
					'group-hover:grayscale-0',
					featured ? 'mt-4 max-w-[200px] shadow-lg' : 'max-w-[144px]'
				)}
				loading="lazy"
				src={teamMember.imageSrc}
			/>
			<div class="flex grow flex-col prose prose-invert">
				<div class="grow">
					<h3
						class={featured
							? styles.h3
							: 'mt-0 font-headings text-xl font-medium tracking-tight text-pretty italic sm:text-2xl'}
					>
						{teamMember.fullName}
					</h3>
					<div class="font-light">
						<h4>Specialties</h4>
						<ul class="flex list-none flex-wrap gap-x-1.5 pl-0">
							{#each teamMember.specialties as specialty (specialty)}
								<li
									class={clsx('rounded-2xl bg-stone-700 px-3 py-1.5 text-xs', 'md:px-3 md:text-sm')}
								>
									{specialty}
								</li>
							{/each}
						</ul>
					</div>
					<div class="font-light">
						{@html teamMember.body}
					</div>
				</div>
				<div class="mt-6 flex flex-wrap justify-between gap-x-6 list-none">
					<a href={resolve('/contact')} class={styles.darkButton}>
						Meet {teamMember.shortName}
					</a>
					{#if teamMember.linkedInLink}
						<a
							aria-label={`${teamMember.shortName}'s LinkedIn page`}
							href={teamMember.linkedInLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkedIn />
						</a>
					{/if}
				</div>
			</div>
		</div>
	</li>
{/snippet}
