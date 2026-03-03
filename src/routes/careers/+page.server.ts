import type { PageServerLoad } from './$types';
import { TURNSTILE_SITE_KEY } from '$env/static/private';

export const load: PageServerLoad = async () => {
	return {
		turnstileSiteKey: TURNSTILE_SITE_KEY
	};
};
