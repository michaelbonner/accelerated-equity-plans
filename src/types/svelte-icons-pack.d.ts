declare module 'svelte-icons-pack/Icon.svelte' {
	import { SvelteComponent } from 'svelte';
	import type { IconType } from 'svelte-icons-pack';

	export default class Icon extends SvelteComponent<{
		src: IconType;
	}> {}
}
