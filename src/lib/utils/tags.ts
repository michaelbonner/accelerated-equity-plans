import { resolve } from '$app/paths';
import type { ResolvedPathname } from '$app/types';

export function toTagSlug(tag: string): string {
	return tag
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/**
 * Link to a filtered view of the blog index. Filters live in the query string so
 * they can be linked to from anywhere, and the index canonicalizes to `/blog`.
 *
 * `resolve()` only handles the pathname, so the query and hash are appended to the
 * resolved path and the result is re-typed as a resolved location.
 */
export function blogFilterHref(params: { tag?: string; category?: string } = {}): ResolvedPathname {
	const base = resolve('/blog');

	if (params.tag) return `${base}?tag=${toTagSlug(params.tag)}#articles` as ResolvedPathname;
	if (params.category) {
		return `${base}?category=${toTagSlug(params.category)}#articles` as ResolvedPathname;
	}
	return `${base}#articles` as ResolvedPathname;
}

export function matchSlug(values: string[], slug: string | null): string | null {
	if (!slug) return null;
	return values.find((value) => toTagSlug(value) === slug) ?? null;
}
