import { getPublishedBlogPosts } from '$lib/data/blogPosts';

export async function GET() {
	const baseUrl = 'https://www.acceleratedep.com';

	const pages = [
		{ path: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-06-29' },
		{ path: '/services', priority: '0.9', changefreq: 'monthly', lastmod: '2026-06-29' },
		{
			path: '/services/equity-plan-administration',
			priority: '0.9',
			changefreq: 'monthly',
			lastmod: '2026-06-29'
		},
		{
			path: '/services/vendor-support',
			priority: '0.9',
			changefreq: 'monthly',
			lastmod: '2026-06-29'
		},
		{
			path: '/services/advanced-project-support',
			priority: '0.9',
			changefreq: 'monthly',
			lastmod: '2026-06-29'
		},
		{
			path: '/services/plan-process-design',
			priority: '0.9',
			changefreq: 'monthly',
			lastmod: '2026-06-29'
		},
		{ path: '/about', priority: '0.8', changefreq: 'monthly', lastmod: '2026-06-29' },
		{ path: '/careers', priority: '0.7', changefreq: 'monthly', lastmod: '2026-06-29' },
		{ path: '/contact', priority: '0.7', changefreq: 'monthly', lastmod: '2026-06-29' },
		{ path: '/blog', priority: '0.8', changefreq: 'weekly', lastmod: '2026-06-29' }
	];

	const blogPosts = getPublishedBlogPosts().map((post) => ({
		path: `/blog/${post.slug}`,
		priority: '0.7',
		changefreq: 'monthly',
		lastmod: post.publishedDate
	}));

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
	.map(
		(page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`
	)
	.join('\n')}
${blogPosts
	.map(
		(post) => `  <url>
    <loc>${baseUrl}${post.path}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <priority>${post.priority}</priority>
    <changefreq>${post.changefreq}</changefreq>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
