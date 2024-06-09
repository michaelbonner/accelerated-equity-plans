<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiFillStar from 'svelte-icons-pack/ai/AiFillStar';
	import ImQuotesLeft from 'svelte-icons-pack/im/ImQuotesLeft';
	import ImQuotesRight from 'svelte-icons-pack/im/ImQuotesRight';
</script>

<div class="flex justify-center min-h-screen">
	<div class=" sm:w-5/6 mt-28 sm:mt-36">
		<!-- hero -->
		<div>
			<div
				class="relative isolate overflow-hidden bg-gray-900 px-6 py-8 text-center shadow-2xl sm:px-16 flex flex-col items-center justify-between"
			>
				<h1 class="text-2xl font-bold tracking-wide text-white sm:text-4xl mb-4 font-eurostile">
					Get peace of mind today! Our team of experts are dedicated to supporting you and ensuring
					your success.
				</h1>
			</div>
		</div>

		<div
			class="sm:min-h-[400px] sm:bg-cover sm:bg-center sm:bg-no-repeat bg-none flex items-center"
			style="background-image: url('/images/phone-call.jpg.webp')"
		>
			<div
				class="sm:w-1/3 py-6 leading-10 tracking-wide rounded-xl bg-white flex flex-col justify-center min-h-[90%] sm:ml-10 sm:border-black sm:border-2 p-12"
			>
				<p class="text-3xl mb-8 font-bold">Connect with us!</p>
				<a href="tel: 801-808-6238">
					<button class="bg-red-600 mb-2 w-2/3 rounded text-white">Give Us A Call</button>
				</a>
				<p class="leading-5 mb-8 text-sm">
					Click the button above or dial <span class="text-red-600"
						><a href="tel: 801-808-6238">801-808-6238</a></span
					> to speak with us
				</p>
				<a href="mailto: info@acceleratedep.com" target="_blank">
					<button class="bg-black mb-2 w-2/3 text-white rounded">Book an Appointment</button>
				</a>
				<p class="leading-5 text-sm">
					Click the button above or email us at <span class="text-red-600"
						><a href="mailto: info@acceleratedep.com" target="_blank">info@acceleratedep.com</a
						></span
					> to speak with us
				</p>
			</div>
		</div>
		<!-- section 2 -->
		<div
			class="sm:my-6 leading-8 tracking-wide flex flex-col sm:flex-row"
			style="background-image: linear-gradient(120deg, #F6FDFE 0%, #E0F7FA 50%, #CCFFFF 100%);"
		>
			<img src="/images/guy.jpg.webp" alt="" class="sm:w-1/3 object-cover" />
			<div class="sm:w-2/3">
				<div class="flex justify-center mt-8 mb-4 text-2xl">
					<Icon src={AiFillStar} /><Icon src={AiFillStar} /><Icon src={AiFillStar} /><Icon
						src={AiFillStar}
					/><Icon src={AiFillStar} />
				</div>
				<p class="px-12">
					<span class="inline-block"><Icon src={ImQuotesLeft} /></span>{' '}Accelerated Equity Plans
					has been a great partner to us and was crucial in our success through some significant
					projects. The team, especially Emily, brought a level of passion, investment, and
					ownership to our work that is challenging to find, all while staying positive and upbeat
					despite the many surprising hurdles that arose. I would strongly recommend Accelerated
					Equity Plans and would use them again in a heartbeat to expand the team capacity where
					needed on future projects.
					<span class="inline-block"><Icon src={ImQuotesRight} /></span>
				</p>
				<p class="text-center italic text-red-700">James R.</p>
			</div>
		</div>

		<div class="border-2 rounded-2xl px-10 py-12 bg-gray-200 sm:mb-6">
			<div class="prose font-eurostile">
				<h2>Let's Talk About Your Business</h2>
			</div>

			<ContactForm />
		</div>
	</div>
</div>
