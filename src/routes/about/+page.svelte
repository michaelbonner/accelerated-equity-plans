<script>
	import MeetTheTeam from '$lib/components/MeetTheTeam.svelte';
</script>

<div class="flex justify-center min-h-screen">
	<div class=" sm:w-5/6 mt-28 sm:mt-36">
		<!-- hero -->
		<div>
			<div
				class="relative isolate overflow-hidden bg-gray-900 px-6 py-8 text-center shadow-2xl sm:px-16 flex flex-col items-center justify-between"
			>
				<h1 class="text-3xl font-bold tracking-wide text-white sm:text-4xl mb-4">
					About Accelerated Equity Plans
				</h1>
				<svg
					viewBox="0 0 1024 1024"
					class="absolute left-1/2 top-1 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
					aria-hidden="true"
				>
					<circle
						cx="512"
						cy="512"
						r="512"
						fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
						fill-opacity="0.7"
					/>
					<defs>
						<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
							<stop stop-color="#7775D6" />
							<stop offset="1" stop-color="#E935C1" />
						</radialGradient>
					</defs>
				</svg>
			</div>
		</div>
		<div class="flex flex-col sm:flex-row">
			<div
				class="sm:w-1/2 sm:p-12 p-6 sm:text-3xl leading-10 tracking-wide bg-gray-200 flex justify-center items-center"
			>
				Empowering companies to harness the full potential of equity compensation to attract,
				retain, and motivate talent
			</div>
			<img src="/images/meeting.jpg.webp" alt="people in a meeting" class="sm:w-1/2" />
		</div>
		<!-- section 2 -->
		<div
			class="px-10 py-12 leading-8 tracking-wide"
			style="background-image: linear-gradient(120deg, #CCFFFF 0%, #E0F7FA 50%, #F6FDFE 100%);"
		>
			Founded in 2021 by industry experts determined to share their wealth of knowledge and provide
			unparalleled support to the field, Accelerated Equity stands as a beacon of expertise and
			dedication. At Accelerated Equity, we transcend mere execution of equity plans; we prioritize
			empowering our clients with a deep understanding of the underlying principles driving their
			strategies. Leveraging the collective expertise of our seasoned team, we forge strong
			partnerships within the industry to deliver a truly exceptional experience. Our track record
			speaks volumes: from guiding private and pre-IPO ventures to supporting some of the world's
			largest multinational corporations, our commitment to excellence knows no bounds. At AEP, we
			are committed to empowering our clients with the tools and understanding necessary to navigate
			the complexities of equity planning with confidence and clarity.
		</div>
		<MeetTheTeam />
		<div
			class="px-10 py-14"
			style="background-image: linear-gradient(120deg, #CCFFFF 0%, #E0F7FA 50%, #CCFFFF 100%);"
		>
			<h2 class="text-3xl font-semibold italic leading-10 tracking-wide">
				Let us help you elevate your stock plan!
			</h2>
			<p class="text-xl tracking-wide leading-10">
				Send us an email or give us a call to see how our experts can help you today.
			</p>
			<ul role="list" class="mt-6 flex gap-x-6 items-center">
				<li>
					<a
						href="https://www.linkedin.com/company/accelerated-equity-plans/?viewAsMember=true"
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
				</li>
				<li>
					<a
						href="/contact"
						class="transition ease-in-out duration-300 inline-block w-40 text-center rounded-lg bg-red-700 bg-opacity-60 px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-red-700 hover:bg-red-800 hover:ring-red-800 no-underline"
					>
						Contact Us!
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
