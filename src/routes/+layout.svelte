<script lang="ts">
	import '@fontsource-variable/roboto';
	import '@fontsource-variable/archivo';

	import '../app.css';

	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { partytownSnippet } from '@qwik.dev/partytown/integration';
	import { onMount } from 'svelte';
	import { AiOutlineContacts } from 'svelte-icons-pack/ai';
	import { BiCustomize, BiHomeAlt } from 'svelte-icons-pack/bi';
	import { FaRectangleList } from 'svelte-icons-pack/fa';
	import { IoPeople } from 'svelte-icons-pack/io';
	import { leadershipTeam } from '$lib/data/leadershipTeam';
	import { reviews } from '$lib/reviews';

	onMount(() => {
		document.querySelectorAll('link[rel="preload"]').forEach((link) => {
			link.setAttribute('rel', 'stylesheet');
		});
	});

	const navLinks = [
		{
			name: 'Home',
			href: '/',
			icon: BiHomeAlt
		},
		{
			name: 'Services',
			href: '/services',
			icon: BiCustomize
		},
		{
			name: 'About',
			href: '/about',
			icon: IoPeople
		},
		{
			name: 'Careers',
			href: '/careers',
			icon: FaRectangleList
		},
		{
			name: 'Contact Us',
			href: '/contact',
			headerClasses: 'bg-white text-black hover:text-red-600 ml-4',
			icon: AiOutlineContacts
		}
	];

	function stripHtmlTags(html: string) {
		return html.replace(/<[^>]*>?/gm, '');
	}

	const jsonLD = () => {
		return {
			'@context': 'https://schema.org',
			'@type': ['Organization', 'LocalBusiness'],
			name: 'Accelerated Equity Plans',
			url: 'https://www.acceleratedep.com',
			description:
				'Accelerated Equity Plans provides expert equity plan administration, consulting, and outsourcing services for private and public companies.',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Salt Lake City',
				addressRegion: 'UT',
				postalCode: '84101',
				addressCountry: 'US'
			},
			logo: 'https://www.acceleratedep.com/images/brand/aep-logo.svg',
			image: 'https://www.acceleratedep.com/images/og-image.jpg',
			priceRange: '$$$',
			email: 'info@acceleratedep.com',
			telephone: '+1-801-808-6238',
			sameAs: ['https://www.linkedin.com/company/accelerated-equity-plans/'],
			member: leadershipTeam.map((member) => ({
				'@type': 'Person',
				'@context': 'https://schema.org',
				name: member.fullName,
				image: member.imageSrc.img.src,
				description: stripHtmlTags(member.body),
				sameAs: [member.linkedInLink]
			})),
			hasOfferCatalog: {
				'@context': 'https://schema.org',
				'@type': 'OfferCatalog',
				name: 'Services',
				itemListElement: [
					// equity plan administration
					{
						'@context': 'https://schema.org',
						'@type': 'Service',
						name: 'Equity Plan Administration',
						provider: {
							'@type': 'Organization',
							name: 'Accelerated Equity Plans'
						},
						description:
							'Specialized services in stock plan administration, including grant lifecycle management, employee education, outsourced administration, and temporary support for equity plans.',
						serviceType: 'Equity Plan Administration',
						areaServed: 'United States',
						hasOfferCatalog: {
							'@type': 'OfferCatalog',
							name: 'Equity Plan Administration Services',
							itemListElement: [
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Comprehensive Equity Management',
										description:
											'Grant lifecycle administration and collaboration with internal teams for seamless execution.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Employee Education & Onboarding',
										description: 'Educational resources and onboarding support for employees.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Outsourced Administration & Scalable Support',
										description:
											'Ongoing administration and flexible staffing solutions for equity plans.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Seasonal & Temporary Support',
										description:
											'Temporary staffing solutions during peak times for equity plan management.'
									}
								}
							]
						}
					},
					// vendor support
					{
						'@context': 'https://schema.org',
						'@type': 'Service',
						name: 'Vendor Support',
						provider: {
							'@type': 'Organization',
							name: 'Accelerated Equity Plans'
						},
						description:
							'Expert support for equity system vendors, including system implementation, data management, RFP guidance, and functionality testing.',
						serviceType: 'Vendor Support',
						areaServed: 'United States',
						hasOfferCatalog: {
							'@type': 'OfferCatalog',
							name: 'Vendor Support Services',
							itemListElement: [
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Streamlined System Implementation',
										description: 'Expedited system setup and smooth transition to new platforms.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Data Management & Integration',
										description: 'Data conversion, audit, and integration with third-party systems.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'RFP Guidance & System Selection',
										description: 'Expert guidance through the RFP process and system selection.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Comprehensive Functionality Testing',
										description: 'Thorough incorporation and testing of equity management systems.'
									}
								}
							]
						}
					},
					// advanced project support
					{
						'@context': 'https://schema.org',
						'@type': 'Service',
						name: 'Advanced Project Support',
						provider: {
							'@type': 'Organization',
							name: 'Accelerated Equity Plans'
						},
						description:
							'Comprehensive support for strategic transactions, equity events, plan modifications, automation, global mobility, and system integrations.',
						serviceType: 'Advanced Project Support',
						areaServed: 'United States',
						hasOfferCatalog: {
							'@type': 'OfferCatalog',
							name: 'Advanced Project Support Services',
							itemListElement: [
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Strategic Transactions & Equity Events',
										description:
											'Guidance through Mergers & Acquisitions, IPOs, SPACs, and other equity events.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Equity Plan Modifications & Automation',
										description: 'Assistance with plan modifications and automation solutions.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Global Workforce Mobility Support',
										description: 'Support for mobility adoption and relocating employees.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Seamless Integrations',
										description: 'Integration of equity systems with HRIS and Payroll.'
									}
								}
							]
						}
					},
					// plan process design
					{
						'@context': 'https://schema.org',
						'@type': 'Service',
						name: 'Plan & Process Design',
						provider: {
							'@type': 'Organization',
							name: 'Accelerated Equity Plans'
						},
						description:
							'Expert guidance and solutions for stock plan design, implementation, management, and compliance for private and public companies.',
						serviceType: 'Plan & Process Design',
						areaServed: 'United States',
						hasOfferCatalog: {
							'@type': 'OfferCatalog',
							name: 'Plan & Process Design Services',
							itemListElement: [
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Streamlined & Optimized Equity Management',
										description:
											'Review, enhancement, and documentation of equity programs for efficiency and risk minimization.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Expert Administrator Training & Support',
										description:
											'Comprehensive training for administrators on systems and processes.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Data-Driven Decision Making',
										description:
											'Industry trend analysis to inform Long-Term Incentive (LTI) plan decisions.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Risk Mitigation Through Best Practices',
										description:
											'Incorporation of industry best practices to minimize risk and ensure compliance.'
									}
								}
							]
						}
					},
					// more services
					{
						'@context': 'https://schema.org',
						'@type': 'Service',
						name: 'Additional Equity Consulting Services',
						provider: {
							'@type': 'Organization',
							name: 'Accelerated Equity Plans'
						},
						description:
							'A range of additional services including IPO and SPAC support, corporate actions, automation, tax and mobility, system implementation, vendor selection, process review, training, and education.',
						serviceType: 'Equity Consulting',
						areaServed: 'United States',
						hasOfferCatalog: {
							'@type': 'OfferCatalog',
							name: 'Additional Services',
							itemListElement: [
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'IPOs and SPACs',
										description: 'Support throughout the IPO process and SPAC transactions.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Corporate Actions',
										description:
											'Guidance through mergers, acquisitions, stock splits, and spinoffs.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Automation Design and Resources',
										description: 'Automation solutions for process streamlining and productivity.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Tax and Mobility Implementation and Support',
										description: 'Tax efficiency review and mobility process support.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'System Implementation',
										description:
											'Support for new system implementation, data conversion, and reconciliation.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Vendor Selection and RFP',
										description: 'Expert vendor selection and RFP process guidance.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'System Functionality Incorporation and Testing',
										description: 'Implementation, testing, and automation of equity systems.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Process Review and Documentation',
										description: 'Process review, documentation, and best practice recommendations.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Training',
										description:
											'Employee training on equity plan administration and best practices.'
									}
								},
								{
									'@type': 'Offer',
									itemOffered: {
										'@type': 'Service',
										name: 'Education',
										description: 'Employee education on equity awards and stock compensation plans.'
									}
								}
							]
						}
					}
				]
			},
			reviews: reviews.map((review) => ({
				'@context': 'https://schema.org',
				'@type': 'Review',
				reviewBody: review.reviewText,
				itemReviewed: {
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: 'Accelerated Equity Plans',
					sameAs: 'https://www.acceleratedep.com'
				},
				author: {
					'@type': 'Person',
					name: review.name,
					jobTitle: review.title
				},
				reviewRating: {
					'@type': 'Rating',
					ratingValue: 5,
					bestRating: '5'
				}
			}))
		};
	};
</script>

<svelte:head>
	<meta name="google-site-verification" content="P9yZQUWa7MG_9CkMXW0nuZ0yUkn95LNLzUQMdNJOBtU" />
	<meta name="color-scheme" content="light only" />
	<meta name="theme-color" content="#ac2228" />
	<meta property="og:image" content="https://www.acceleratedep.com/images/og-image.jpg" />
	<meta property="og:site_name" content="Accelerated Equity Plans" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Accelerated Equity Plans" />
	<meta
		name="twitter:description"
		content="AEP brings industry expertise and support to deliver a best-in-class equity program experience for teams, partners, and participants."
	/>
	<meta name="twitter:image" content="https://www.acceleratedep.com/images/og-image.jpg" />

	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push', 'gtag'],
			resolveUrl: (url) => {
				const siteUrl = 'https://www.acceleratedep.com/proxytown';

				if (url.hostname === 'www.googletagmanager.com') {
					const proxyUrl = new URL(`${siteUrl}/gtm`);

					const gtmId = new URL(url).searchParams.get('id');
					gtmId && proxyUrl.searchParams.append('id', gtmId);

					return proxyUrl;
				}

				return url;
			}
		};
	</script>

	{@html '<script>' + partytownSnippet() + '</script>'}

	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-252472179V"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', 'G-252472179V');
	</script>

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLD())}</script>`}
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Navbar {navLinks} />
	<div class="flex flex-col grow bg-white">
		<slot />
	</div>
	<Footer {navLinks} />
</div>
