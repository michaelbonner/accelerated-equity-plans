<script>
	const team = [
		{
			fullName: 'Emily Bone, MBA, CEP',
			title: 'Partner',
			shortName: 'Emily',
			image: {
				src: '/images/emily-headshot-restored.jpg.webp',
				alt: 'Emily Bone'
			},
			body: `
				<p class="mt-4">
					With over 15 years of industry experience through positions with both equity
					compensation issuers and administration vendors, Emily has gained an extensive
					knowledge of equity compensation matters for both private and public equity plans,
					including; administration, process design, system and functionality implementation,
					and project management.
				</p>
				<p class="mt-0">
					Emily holds her Certified Equity Professional (CEP) designation and has obtained her
					MBA in Finance from Pepperdine University.
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
				<p class="mt-4">
					Through positions with Deloitte and administration vendors, Neil has consulted both
					private and public organizations in the administration, financial reporting, payroll,
					HR and tax implications of equity compensation through his 15 years of industry tenure.
					Neil specializes in standing up new processes to help companies integrate and automate
					these important functions.
				</p>
				<p class="mt-0">
					Neil holds his Certified Equity Professional (CEP) designation and holds a BS in Finance
					from the University of Utah.
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
				<p class="mt-4">
					With over 12 years of industry experience holding various positions with both equity compensation issuers and on multiple administration platforms, Aaron has been an essential part in the successful management of equity functions and has successfully led the efforts in the establishing equity education programs, system and functionality implementation, and project management for many clients across multiple platforms.
				</p>
				<p class="mt-0">
					Aaron holds his Certified Equity Professional (CEP) designation and has obtained a BA in Finance from the University of Utah.
				</p>
			`,
			linkedInLink: 'https://www.linkedin.com/in/aaron-rosser-cep-1604924a/'
		}
	];
</script>

<div
	id="team"
	class="relative inset-0 bg-cover"
	style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url('/images/redblueribbon.png.webp');"
>
	<div class="py-14 sm:py-32">
		<div class="mx-auto grid max-w-7xl gap-x-8 gap-y-10 sm:gap-y-20 px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Meet the Leadership Team
				</h2>
				<p class="mt-6 text-lg leading-8 text-white">
					As subject matter experts, we can provide your organization with a complete Stock Plan
					Administration team to handle all equity concerns!
				</p>
			</div>

			<ul
				role="list"
				class="grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-20 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
			>
				{#each team as teamMember}
					<li
						class="h-full bg-slate-800 backdrop-blur-lg rounded-2xl bg-opacity-30 flex flex-col justify-between p-4"
					>
						<img
							class="aspect-square mt-4 rounded-2xl object-cover max-w-[200px]"
							src={teamMember.image.src}
							alt={teamMember.image.alt}
						/>
						<div class="px-4 py-4 flex flex-col flex-grow prose text-white">
							<div class="grow">
								<h3 class="text-white mb-0">{teamMember.fullName}</h3>
								<h4 class="text-white">{teamMember.title}</h4>
								{@html teamMember.body}
							</div>
							<div class="mt-6 flex gap-x-6 list-none">
								<div>
									<a
										aria-label={`${teamMember.shortName}'s LinkedIn page"`}
										href={teamMember.linkedInLink}
										target="_blank"
									>
										<svg
											class="w-10 h-10 text-blue-600 rounded-lg bg-white"
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
								<div>
									<a
										href="/contact"
										class="transition ease-in-out duration-300 inline-block rounded-lg w-40 text-center bg-red-700 bg-opacity-30 px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800 no-underline"
									>
										Meet {teamMember.shortName}
									</a>
								</div>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
