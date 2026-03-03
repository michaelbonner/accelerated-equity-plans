declare global {
	interface Turnstile {
		render: (
			container: string | HTMLElement,
			options: {
				sitekey: string;
				callback?: (token: string) => void;
				'action'?: string;
				'cData'?: string;
				'theme'?: 'light' | 'dark' | 'auto';
				'size'?: 'normal' | 'compact' | 'flexible';
				'expired-callback'?: () => void;
				'error-callback'?: () => void;
			}
		) => string;
		reset: (widgetId?: string) => void;
		remove: (widgetId: string) => void;
	}

	interface Window {
		$zoho: unknown;
		turnstile?: Turnstile;
	}
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
}

export {};
