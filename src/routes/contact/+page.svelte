<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiFillStar from 'svelte-icons-pack/ai/AiFillStar';
	import ImQuotesLeft from 'svelte-icons-pack/im/ImQuotesLeft';
	import ImQuotesRight from 'svelte-icons-pack/im/ImQuotesRight';
</script>

<div class="flex justify-center min-h-screen font-eurostile">
	<div class=" sm:w-5/6 mt-28 sm:mt-36">
		<!-- hero -->
		<div>
			<div
				class="relative isolate overflow-hidden bg-gray-900 px-6 py-8 text-center shadow-2xl sm:px-16 flex flex-col items-center justify-between"
			>
				<h1 class="text-2xl font-bold tracking-wide text-white sm:text-4xl mb-4">
					Get peace of mind today! Our team of experts are dedicated to supporting you and ensuring
					your success.
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

		<div
			class="sm:min-h-[400px] sm:bg-cover sm:bg-center sm:bg-no-repeat bg-none flex items-center"
			style="background-image: url('/images/phonecall.jpg')"
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
			<img src="/images/guy.jpg" alt="" class="sm:w-1/3" />
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

		<div class="border-2 rounded-2xl px-10 py-6 bg-gray-200 sm:mb-6">
			<h3 class="text-4xl font-bold text-center mb-6">Let's Talk About Your Business</h3>
			<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
			<form>
				<div class="space-y-12">
					<div class="border-b border-gray-900/10 pb-12">
						<h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
						<p class="mt-1 text-sm leading-6 text-gray-600">
							Use a permanent address where you can receive mail.
						</p>

						<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div class="sm:col-span-3">
								<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
									>First name*</label
								>
								<div class="mt-2">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autocomplete="given-name"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
									>Last name*</label
								>
								<div class="mt-2">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autocomplete="family-name"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
									>Email address*</label
								>
								<div class="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autocomplete="email"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
									>Phone Number</label
								>
								<div class="mt-2">
									<input
										id="tel"
										name="tel"
										type="tel"
										autocomplete="tel"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="company" class="block text-sm font-medium leading-6 text-gray-900"
									>Company</label
								>
								<div class="mt-2">
									<input
										type="text"
										name="company"
										id="company"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="title" class="block text-sm font-medium leading-6 text-gray-900"
									>Title</label
								>
								<div class="mt-2">
									<input
										type="text"
										name="title"
										id="title"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="service" class="block text-sm font-medium leading-6 text-gray-900"
									>What service are you interested in?</label
								>
								<div class="mt-2">
									<select
										id="service"
										name="service"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									>
										<option>Service 1</option>
										<option>Service 2</option>
										<option>Service 3</option>
									</select>
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="platform" class="block text-sm font-medium leading-6 text-gray-900"
									>What equity management platform do you use?</label
								>
								<div class="mt-2">
									<select
										id="platform"
										name="platform"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									>
										<option>Platform 1</option>
										<option>Platform 2</option>
										<option>Platform 3</option>
									</select>
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="participants" class="block text-sm font-medium leading-6 text-gray-900"
									>How many equity plan participants do you have?</label
								>
								<div class="mt-2">
									<input
										type="number"
										name="participants"
										id="participants"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="referral" class="block text-sm font-medium leading-6 text-gray-900"
									>How did you hear about us?</label
								>
								<div class="mt-2">
									<input
										type="text"
										name="referral"
										id="referral"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="mt-6 flex items-center justify-end gap-x-6">
						<button type="button" class="text-sm font-semibold leading-6 text-gray-900"
							>Cancel</button
						>
						<button
							type="submit"
							class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Submit</button
						>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
