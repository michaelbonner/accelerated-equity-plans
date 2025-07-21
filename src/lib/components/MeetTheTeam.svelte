<script>
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';
	import AaronHeadShot from '../images/head-shots/aaron-head-shot.jpg?enhanced';
	import BarbaraHeadShot from '../images/head-shots/barbara-head-shot.jpg?enhanced';
	import EmHeadShot from '../images/head-shots/emily-head-shot.jpg?enhanced';
	import GraceHeadShot from '../images/head-shots/grace-head-shot.jpg?enhanced';
	import JoshHeadShot from '../images/head-shots/josh-head-shot.jpg?enhanced';
	import JordanHeadShot from '../images/head-shots/jordan-head-shot.jpg?enhanced';
	import NeilHeadShot from '../images/head-shots/neil-head-shot.jpg?enhanced';
	import ZakHeadShot from '../images/head-shots/zak-head-shot.jpg?enhanced';
	import RedBar from './RedBar.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';

	const leadershipTeam = [
		{
			fullName: 'Emily Bone, MBA, CEP',
			shortName: 'Emily',
			imageSrc: EmHeadShot,
			imageAlt: 'Emily Bone',
			body: `
			<div>
				<h4>Specialties</h4>
				<ul>
					<li>Private & Public Equity Plans</li>
					<li>IPOs Readiness</li>
					<li>Equity Administration & Process Design</li>
					<li>M&A Execution</li>
					<li>Specialized Projects</li>
				</ul>
				
				<h4>About Me</h4>
				<p>
					With over 15 years of experience in the equity compensation industry—working with both issuers and administration vendors—I’ve developed deep expertise across private and public equity plans. Throughout my career, I’ve worn many hats, which has given me a well-rounded understanding of the challenges equity professionals face, especially those navigating their roles as a team of one.
				</p>
				<p>
					That growing desire to support professionals who often had nowhere to turn led to the creation of AEP. At AEP, we go beyond traditional consulting. We become a true extension of your team—a dependable partner who’s with you every step of the way.
				</p>
				<p>
					Outside of work, I love spending time outdoors camping, biking, and kayaking with my spouse, family, and friends. I’m always up for a scenic drive and a new place to explore!
				</p>
			</div>
			`,
			linkedInLink: 'https://www.linkedin.com/in/emily-bone-mba-cep/'
		},
		{
			fullName: 'Neil Birrell, CEP',
			shortName: 'Neil',
			imageSrc: NeilHeadShot,
			imageAlt: 'Neil Birrell',
			body: `
			<div>
				<h4>Specialties</h4>
				<ul>
					<li>Global compliance</li>
					<li>Global tax and mobility</li>
					<li>3rd party system integrations</li>
					<li>Vendor selection</li>
					<li>Implementation</li>
					<li>Specialized projects</li>
				</ul>

				<h4>About Me</h4>
				<p>
					Neil Birrell is Partner at Accelerated Equity Plans. In his 20 years in equity compensation, Neil has served both private and public organizations in the administration, financial reporting, payroll, HR and tax implications of equity compensation. In his role, Neil specializes in standing up processes to help companies administer, integrate and automate these important functions. Previous to AEP, Neil worked at Deloitte in their equity and incentives practice and at E*TRADE Corporate Services. He has presented on topics ranging from employee communications, process improvement, financial reporting, global compliance and taxation, and industry trends. Neil holds a BS in Finance from the University of Utah and is a Certified Equity Professional (CEP).
				</p>
			</div>
			`,
			linkedInLink: 'https://www.linkedin.com/in/neil-birrell-cep-0985185/'
		},
		{
			fullName: 'Aaron Rosser, CEP',
			shortName: 'Aaron',
			imageSrc: AaronHeadShot,
			imageAlt: 'Aaron Rosser',
			body: `
			<div>
				<h4>Specialties</h4>
				<ul>
					<li>Business Development</li>
					<li>Employee Education</li>
					<li>Equity Plan Execution</li>
					<li>Process Improvement and Efficiency</li>
				</ul>

				<h4>About Me</h4>
				<p>
					Aaron Rosser, CEP is the Director of Business Development and Equity Consultant for Accelerated Equity Plans (AEP), where he is responsible for growth and building strong relationships with clients. He has worked on both the broker and issuer sides of equity compensation. His issuer roles include the Sr. Stock Plan Administrator at Unity Technologies and the Head of Global Equity at Sonder Holdings Inc. prior to joining AEP. He has led many employee-focused tax and education sessions for employees around the globe.
				</p>
				<p>
					Before his issuer experience, he has worked with many multinational companies in his time as a Service Manager at E*TRADE by Morgan Stanley, Fidelity Investments, and he spent years in Stock Plan Services at legacy Morgan Stanley Smith Barney.
				</p>
			</div>
			`,
			linkedInLink: 'https://www.linkedin.com/in/aaron-rosser-cep-1604924a/'
		},
		{
			fullName: 'Zak Mudrow, MBA, CEP',
			title: '',
			shortName: 'Zak',
			imageSrc: ZakHeadShot,
			imageAlt: 'Zak Mudrow',
			body: `
			<div>
				<h4>Specialties</h4>
				<ul>
					<li>Equity plan administration RSU/RSA, performance awards, ESPP, Phantom Stock</li>
					<li>Unique solutions to complex equity management scenarios</li>
					<li>Financial Reporting and Reconciliation</li>
					<li>Employee Education</li>
					<li>Corporate Actions</li>
				</ul>

				<h4>About Me</h4>
				<p>
					I'm an experienced equity compensation professional with a background that includes working with industry leaders like E*TRADE and Computershare, as well as supporting a variety of companies in both consulting and in-house roles. I’m passionate about delivering practical, impactful solutions in equity plan management and helping teams navigate complex compensation strategies. 
				</p>
				<p>
					Outside of work, I love coaching youth sports and staying active through tennis, basketball, pickleball, and mountain biking. I’m also a big sneaker fan and enjoy spending quality time with my wife and our four kids. 
				</p>
			</div>
			`,
			linkedInLink: 'https://www.linkedin.com/in/zak-mudrow-mba-cep-359aba31/'
		},
		{
			fullName: 'Barbara Gunnufson',
			title: '',
			shortName: 'Barbara',
			imageSrc: BarbaraHeadShot,
			imageAlt: 'Barbara Gunnufson',
			body: `
			<div>
				<h4>Specialties</h4>
				<ul>
					<li>Equity Edge Online</li>
					<li>Process optimization</li>
					<li>System integrations</li>
					<li>IPO preparation</li>
				</ul>

				<h4>About Me</h4>
				<p>
					Barbara has been in equity compensation for over 13 years, with a background in payroll management prior to that. She has spent time as a consultant with E*TRADE and as an in-house stock administrator with multiple issuers. Her shining star moment was working at a private tech company and building a public company equity program from the ground up, for their IPO. 
				</p>
				<p>
					Barbara has been serving on the NASPP Denver chapter board for nearly ten years. Additionally, she has spoken at many conferences including NASPP, Directions/Thrive, American Payroll Association and Equilar. Barbara is a social butterfly. Don’t be surprised to see her dancing the night away at various industry events. In her spare time, Barbara loves to travel and listen to live music.
				</p>
			</div>
			`,
			linkedInLink: 'https://www.linkedin.com/in/barbara-g-42088515/'
		},
		{
			fullName: 'Josh Ludlow, CEP',
			title: '',
			shortName: 'Josh',
			imageSrc: JoshHeadShot,
			imageAlt: 'Josh Ludlow',
			body: `
			<div>
				<h4>Specialties</h4>
				<ul>
					<li>Equity Plan Administration</li>
					<li>Process Improvement and Automation</li>
					<li>IPO Readiness</li>
					<li>Private and Public Equity Programs</li>
					<li>Custom Reporting and Reconciliation</li>
				</ul>

				<h4>About Me</h4>
				<p>
					I'm an equity compensation consultant with a background in scaling and automating stock plan administration for both high-growth startups and established private companies. After several years in the industry, I joined Accelerated Equity Plans in 2024, where I help clients implement streamlined, compliant, and people-friendly equity programs.
				</p>
				<p>
					Prior to consulting, I held in-house roles supporting equity and compensation functions, giving me a practical, end-to-end understanding of equity lifecycle management. I love solving complex equity puzzles and partnering with clients to make stock plans work better for everyone involved.
				</p>
				<p>
					Outside of work, I'm a proud dad to a toddler with another baby on the way. When I'm not decoding RSUs and ESPPs, you can find me focused on family life, finding time for golf and basketball, and occasionally losing sleep over Utah Jazz scores.
				</p>
			</div>
			`,
			linkedInLink: 'https://www.linkedin.com/in/joshludlowcep/'
		},
		{
			fullName: 'Grace Segui, CEP',
			title: '',
			shortName: 'Grace',
			imageSrc: GraceHeadShot,
			imageAlt: 'Grace Segui',
			body: `
			<div>
				<h4>Specialties</h4>
				<ul>
					<li>Equity Plan Design and Optimization</li>
					<li>Client Service Management</li>
					<li>Employee Education and Training on Equity Compensation</li>
					<li>Stock Option Exercise Guidance</li>
					<li>Process Improvement and Documentation</li>
					<li>Strategic Equity Program Consulting</li>
				</ul>
				<h4>About Me</h4>
				<p>
					My journey into Equity Compensation began in 2003 on the front lines of customer service, guiding individuals through stock option exercises and trade execution. That hands-on experience evolved as I joined the training team, where I helped educate others on the complexities of equity plans. By 2007, I stepped into the role of Client Service Manager, deepening my expertise and sharpening my client-focused approach. In the next chapter of my career, I transitioned to the issuer side, serving as Stock Plan Administrator at Activision Blizzard for seven years—gaining invaluable insight into the internal mechanics of plan management at a dynamic, high-growth company. Now in my third decade in Equity Compensation, I’m proud to serve as a Consulting Director at AEP, where I partner with clients to design, optimize, and elevate their equity programs with both strategic insight and practical experience.
				</p>
			</div>
			`,
			linkedInLink: 'https://www.linkedin.com/in/gsegui/'
		},
		{
			fullName: 'Jordan Sims, CEP',
			title: '',
			shortName: 'Jordan',
			imageSrc: JordanHeadShot,
			imageAlt: 'Jordan Sims',
			body: `
			<div>
				<h4>Specialties</h4>
				<ul>
					<li>Process Strategy and Implementation</li>
					<li>Equity Compensation and Analysis</li>
					<li>Shareworks Specialist</li>
					<li>Risk Analysis and Improvements</li>
					<li>Project Management</li>
				</ul>
				<h4>About Me</h4>
				<p>
					Jordan has worked in finance for the past 12 years. Starting at Jordan Credit Union (yes, he was Jordan from Jordan Credit Union) to working within the equity compensation industry over the last 4 years, he has experienced a wide breadth of personal finance, specializing in Private Market equity compensation as a Client Success Manager and a Secondaries Transactions Specialist. Jordan specializes in finding ways to build and improve process enhancements and excels in finding ways to work smarter rather than harder. As a Morgan Stanley CSM, he spent his time as the primary dedicated CSM for various high profile franchise clients. He specializes in RSU Releases, Administration Setup, and many other areas within the Equity Atmosphere. Jordan is based in Saratoga Springs, Utah, and in his free time he loves spending time with his wife and two daughters. If you bring up baseball with him... just be aware you won't be able to leave the conversation at a reasonable time!
				</p>
			</div>
			`,
			linkedInLink: 'https://www.linkedin.com/in/jordan-sims-financial-services/'
		}
	];
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

		<div class="grid gap-6 md:grid-cols-3">
			{#each leadershipTeam as teamMember}
				<div class={clsx(styles.blueRedGradientBackground, styles.cardHover, 'group')}>
					<div class="flex flex-col gap-4 justify-start p-8 h-full bg-black rounded-lg">
						<enhanced:img
							alt={teamMember.imageAlt}
							class={clsx(
								'aspect-square mt-4 rounded-full object-cover max-w-[200px] shadow-lg grayscale transition-all',
								'group-hover:grayscale-0'
							)}
							loading="lazy"
							src={teamMember.imageSrc}
						/>
						<div class="flex flex-col grow prose prose-invert">
							<div class="grow">
								<h3 class={styles.h3}>
									{teamMember.fullName}
								</h3>
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
