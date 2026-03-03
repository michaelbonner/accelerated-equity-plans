<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	interface Props {
		open: boolean;
		title?: string;
		children?: Snippet;
	}

	let { open = $bindable(false), title, children }: Props = $props();

	function close() {
		open = false;
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) close();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}

	$effect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
			return () => {
				document.body.style.overflow = '';
			};
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
		transition:fade={{ duration: 200 }}
		aria-hidden="true"
	></div>

	<!-- Dialog -->
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
	<div
		role="dialog"
		aria-modal="true"
		aria-label={title}
		class="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4"
		onclick={handleBackdropClick}
		transition:fly={{ y: 48, duration: 320, opacity: 1 }}
	>
		<div
			class="flex w-full flex-col bg-white sm:max-w-2xl sm:rounded-xl"
			style="max-height: min(90dvh, 90vh)"
		>
			<!-- Header -->
			<div
				class="flex shrink-0 items-center justify-between rounded-t-xl bg-black px-6 py-4 sm:rounded-t-xl"
			>
				{#if title}
					<h2 class="font-headings text-xl font-medium italic text-white">{title}</h2>
				{/if}
				<button
					onclick={close}
					aria-label="Close"
					class="ml-auto cursor-pointer text-white/60 transition-colors hover:text-white"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Red accent bar -->
			<div class="h-1 shrink-0 bg-red-800"></div>

			<!-- Scrollable content -->
			<div class="overflow-y-auto px-6 pb-8">
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}
