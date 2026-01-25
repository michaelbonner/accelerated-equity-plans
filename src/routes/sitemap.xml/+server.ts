export async function GET() {
	const baseUrl = 'https://www.acceleratedep.com';
	const now = new Date().toISOString();

	const pages = [
		{ path: '/', priority: '1.0', changefreq: 'weekly' },
		{ path: '/services', priority: '0.9', changefreq: 'monthly' },
		{ path: '/services/equity-plan-administration', priority: '0.9', changefreq: 'monthly' },
		{ path: '/services/vendor-support', priority: '0.9', changefreq: 'monthly' },
		{ path: '/services/advanced-project-support', priority: '0.9', changefreq: 'monthly' },
		{ path: '/services/plan-process-design', priority: '0.9', changefreq: 'monthly' },
		{ path: '/about', priority: '0.8', changefreq: 'monthly' },
		{ path: '/careers', priority: '0.7', changefreq: 'monthly' },
		{ path: '/contact', priority: '0.7', changefreq: 'monthly' }
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
	.map(
		(page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${now}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
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
