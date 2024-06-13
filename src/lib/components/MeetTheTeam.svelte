<script>
	import { styles } from '$lib/styles';
	import clsx from 'clsx';
	import AaronHeadShot from '../images/head-shots/aaron-head-shot.jpg?enhanced';
	import EmHeadShot from '../images/head-shots/emily-head-shot.jpg?enhanced';
	import NeilHeadShot from '../images/head-shots/neil-head-shot.jpg?enhanced';
	import RedBar from './RedBar.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';

	const leadershipTeam = [
		{
			fullName: 'Emily Bone, MBA, CEP',
			title: 'Partner',
			shortName: 'Emily',
			imageSrc: EmHeadShot,
			imageAlt: 'Emily Bone',
			body: `
				<p>
					Emily's rich journey through equity compensation roles, combined with 
					her Certified Equity Professional designation and MBA in Finance, 
					makes her a trusted expert in enhancing the value and efficiency 
					of equity plans for diverse organizations.
				</p>
			`,
			linkedInLink: 'https://www.linkedin.com/in/emily-bone-mba-cep/'
		},
		{
			fullName: 'Neil Birrell, CEP',
			title: 'Partner',
			shortName: 'Neil',
			imageSrc: NeilHeadShot,
			imageAlt: 'Neil Birrell',
			body: `
				<p>
					Neil's extensive experience with Deloitte and various equity firms, 
					coupled with his CEP designation and Finance degree, uniquely 
					positions him as a strategic architect in streamlining equity 
					compensation across pivotal business functions for enhanced 
					organizational efficiency.
				</p>
			`,
			linkedInLink: 'https://www.linkedin.com/in/neil-birrell-cep-0985185/'
		},
		{
			fullName: 'Aaron Rosser, CEP',
			title: 'Director, Business Development & Sales',
			shortName: 'Aaron',
			imageSrc: AaronHeadShot,
			imageAlt: 'Aaron Rosser',
			body: `
				<p>
					Aaron is a trusted expert in equity management, having led education 
					programs, system implementations, and project management. His 
					extensive experience with equity compensation issuers makes him 
					exceptionally skilled and reliable.
				</p>
			`,
			linkedInLink: 'https://www.linkedin.com/in/aaron-rosser-cep-1604924a/'
		}
	];
</script>

<section
	class={clsx(
		'relative bg-stone-700 bg-repeat bg-center py-24 px-6 bg-cover text-white',
		'lg:py-32'
	)}
	style={`background-image: url('/images/patterns/Pattern-0224_Pattern-Arrows.svg')`}
>
	<div class="absolute inset-0 bg-stone-400/30" />
	<div class="relative max-w-7xl mx-auto grid gap-12">
		<div class="grid gap-4">
			<RedBar />
			<h2 class={styles.h2}>Meet the leadership team</h2>
			<div class="prose font-light text-white">
				<p>
					As subject matter experts, we can provide your organization with a complete Stock Plan
					Administration team to handle all equity concerns!
				</p>
			</div>
		</div>

		<div class="grid md:grid-cols-3 gap-6">
			{#each leadershipTeam as teamMember}
				<div class={clsx(styles.blueRedGradientBackground, styles.cardHover, 'group')}>
					<div class="bg-black p-8 rounded-lg gap-4 flex flex-col justify-start h-full">
						<enhanced:img
							alt={teamMember.imageAlt}
							class={clsx(
								'aspect-square mt-4 rounded-full object-cover max-w-[200px] shadow-lg grayscale transition-all',
								'group-hover:grayscale-0'
							)}
							loading="lazy"
							src={teamMember.imageSrc}
						/>
						<div class="flex flex-col flex-grow prose text-white">
							<div class="grow">
								<h3
									class={clsx('text-2xl text-white font-medium mb-0 font-eurostile', 'md:text-3xl')}
								>
									{teamMember.fullName}
								</h3>
								<div class="font-light">
									{@html teamMember.body}
								</div>
							</div>
							<div class="mt-6 flex justify-between flex-wrap gap-x-6 list-none">
								<a href="/contact" class={styles.darkButton}>
									Meet {teamMember.shortName}
								</a>
								<a
									aria-label={`${teamMember.shortName}'s LinkedIn page"`}
									href={teamMember.linkedInLink}
									target="_blank"
								>
									<LinkedIn /></a
								>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
