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
	</div>
</div>
