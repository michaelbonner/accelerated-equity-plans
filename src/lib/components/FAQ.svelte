<script lang="ts">
	import { styles } from '$lib/styles';
	import { clsx } from 'clsx';

	interface FAQItem {
		question: string;
		answer: string;
	}

	interface Props {
		faqs: FAQItem[];
		serviceName: string;
	}

	let { faqs, serviceName }: Props = $props();
	let openIndex = $state<number | null>(null);

	function toggleFAQ(index: number) {
		openIndex = openIndex === index ? null : index;
	}

	function generateFAQSchema() {
		return {
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faqs.map((faq) => ({
				'@type': 'Question',
				name: faq.question,
				acceptedAnswer: {
					'@type': 'Answer',
					text: faq.answer
				}
			}))
		};
	}
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(generateFAQSchema())}</script>`}
</svelte:head>

<section class="py-24 px-6 bg-white">
	<div class="mx-auto max-w-4xl">
		<div class="grid gap-4 text-center mb-12">
			<h2 class={styles.h2}>Frequently Asked Questions</h2>
			<p class="text-stone-600 text-lg">
				Common questions about our {serviceName} services
			</p>
		</div>

		<div class="grid gap-4">
			{#each faqs as faq, index}
				<div class="border border-stone-200 rounded-lg overflow-hidden">
					<button
						onclick={() => toggleFAQ(index)}
						class={clsx(
							'w-full px-6 py-4 flex justify-between items-center text-left transition-colors',
							'hover:bg-stone-50',
							openIndex === index ? 'bg-stone-50' : 'bg-white'
						)}
						type="button"
						aria-expanded={openIndex === index}
					>
						<h3 class={clsx(styles.h4, 'text-stone-900 pr-4')}>{faq.question}</h3>
						<svg
							class={clsx(
								'w-6 h-6 shrink-0 transition-transform text-red-700',
								openIndex === index ? 'rotate-180' : ''
							)}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</button>
					{#if openIndex === index}
						<div class="px-6 py-4 bg-stone-50 border-t border-stone-200">
							<div class="prose max-w-none text-stone-700">
								{@html faq.answer}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
