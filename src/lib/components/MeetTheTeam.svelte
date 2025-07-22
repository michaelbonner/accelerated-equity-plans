<script lang="ts">
	import { leadershipTeam } from '$lib/data/leadershipTeam';
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';
	import RedBar from './RedBar.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
</script>

<section
	class={clsx(
		'relative bg-stone-700 bg-repeat bg-center py-24 px-6 bg-cover text-white',
		'lg:py-32'
	)}
	style={`background-image: url('/images/patterns/Pattern-0224_Pattern-Arrows.svg')`}
	id="meet-the-team"
>
	<div class="absolute inset-0 bg-stone-400/30"></div>
	<div class="grid relative gap-12 mx-auto max-w-7xl">
		<div class="grid gap-4">
			<RedBar />
			<h2 class={styles.h2}>Meet the leadership team</h2>
			<div class="font-light prose prose-invert">
				<p>
					As subject matter experts, we can provide your organization with a complete Stock Plan
					Administration team to handle all equity concerns!
				</p>
			</div>
		</div>

		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each leadershipTeam as teamMember}
				<div class={clsx(styles.blueRedGradientBackground, styles.cardHover, 'group')}>
					<div class="flex flex-col gap-4 justify-start p-8 h-full bg-black rounded-lg [&_ul]:mb-8">
						<enhanced:img
							alt={teamMember.imageAlt}
							class={clsx(
								'aspect-square mt-4 rounded-full object-cover max-w-[200px] shadow-lg grayscale transition-all',
								'group-hover:grayscale-0'
							)}
							loading="lazy"
							src={teamMember.imageSrc}
						/>
						<div class={clsx('flex flex-col grow prose prose-invert')}>
							<div class="grow">
								<h3 class={styles.h3}>
									{teamMember.fullName}
								</h3>
								<div class="font-light">
									<h4>Specialties</h4>
									<ul class="mb-8 flex flex-wrap gap-x-1.5 pl-0 list-none">
										{#each teamMember.specialties as specialty}
											<li
												class={clsx(
													'py-1.5 px-3 rounded-2xl bg-stone-700 text-xs',
													'md:gap-1.5 md:px-3 md:text-sm'
												)}
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
							<div class="flex flex-wrap gap-x-6 justify-between mt-6 list-none">
								<a href="/contact" class={styles.darkButton}>
									Meet {teamMember.shortName}
								</a>
								{#if teamMember.linkedInLink}
									<a
										aria-label={`${teamMember.shortName}'s LinkedIn page`}
										href={teamMember.linkedInLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										<LinkedIn /></a
									>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
