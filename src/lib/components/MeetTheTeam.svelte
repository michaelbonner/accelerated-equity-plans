<script>
	import clsx from 'clsx';
	import RedBar from './RedBar.svelte';
	import { styles } from '$lib/styles';

	const leadershipTeam = [
		{
			fullName: 'Emily Bone, MBA, CEP',
			title: 'Partner',
			shortName: 'Emily',
			image: {
				src: '/images/emily-headshot-restored.jpg.webp',
				alt: 'Emily Bone'
			},
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
			image: {
				src: '/images/neil-headshot.jpg.webp',
				alt: 'Neil Birrell'
			},
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
			image: {
				src: '/images/aaron-headshot.jpg.webp',
				alt: 'Aaron Rosser'
			},
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
				<div class={styles.blueRedGradientBackground}>
					<div class="bg-black p-8 rounded-lg gap-4 flex flex-col justify-start h-full">
						<img
							class={clsx(
								'aspect-square mt-4 rounded-full object-cover max-w-[200px] shadow-lg grayscale transition-all',
								'hover:grayscale-0'
							)}
							src={teamMember.image.src}
							alt={teamMember.image.alt}
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
									<svg
										class="w-10 h-10 text-white rounded-lg"
										stroke="currentColor"
										fill="currentColor"
										stroke-width="0"
										viewBox="0 0 24 24"
										height="200px"
										width="200px"
										xmlns="http://www.w3.org/2000/svg"
										><path
											fill-rule="evenodd"
											d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"
										></path></svg
									></a
								>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
