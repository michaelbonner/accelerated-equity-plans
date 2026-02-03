import { getBlogPostBySlug } from '$lib/data/blogPosts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const post = getBlogPostBySlug(params.slug);

	if (!post) {
		error(404, 'Blog post not found');
	}

	return { post };
};
