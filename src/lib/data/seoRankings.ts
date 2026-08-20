// SEO ranking report data for the /seo-rankings client report page.
//
// Positions are tracked separately for desktop and mobile Google results.
//
// To update with a new report:
//   1. Set `reportDate` to the export's "Current update date" and
//      `previousReportDate` to its "Previous update date". Every previous /
//      current pair below compares those two dates, so the reporting period
//      shown on the page has to match them.
//   2. Replace the `keywords` array below, merging the desktop and mobile
//      exports. Each keyword carries a `desktop` and a `mobile` DevicePosition.
//
// DevicePosition fields:
//   previous / current — Google ranking position for that device; `null` means
//     the keyword is not ranking in the tracked results for that device.
//   isNew — the keyword started ranking on that device during this period.
//   traffic — estimated monthly organic visits from that device.

export interface DevicePosition {
	previous: number | null;
	current: number | null;
	isNew: boolean;
	traffic: number;
}

export interface KeywordRanking {
	keyword: string;
	desktop: DevicePosition;
	mobile: DevicePosition;
	volume: number;
	difficulty: number;
	tag: string | null;
	url: string | null;
}

export const reportDate = '2026-08-16';
export const previousReportDate = '2026-07-28';

const pos = (
	previous: number | null,
	current: number | null,
	isNew: boolean,
	traffic: number
): DevicePosition => ({ previous, current, isNew, traffic });

export const keywords: KeywordRanking[] = [
	{
		keyword: 'equity administration',
		desktop: pos(8, 8, false, 5),
		mobile: pos(1, 1, false, 5),
		volume: 100,
		difficulty: 0,
		tag: null,
		url: '/careers'
	},
	{
		keyword: 'equity plan & process design services',
		desktop: pos(1, 1, false, 6),
		mobile: pos(1, 1, false, 6),
		volume: 20,
		difficulty: 0,
		tag: null,
		url: '/services/plan-process-design'
	},
	{
		keyword: 'on-demand stock administration',
		desktop: pos(1, 1, false, 2),
		mobile: pos(1, 1, false, 2),
		volume: 10,
		difficulty: 3,
		tag: 'advanced-project',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'interim stock plan administrator',
		desktop: pos(6, 2, false, 1),
		mobile: pos(6, 2, false, 1),
		volume: 10,
		difficulty: 0,
		tag: 'advanced-project',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'temporary stock administration support',
		desktop: pos(3, 2, false, 2),
		mobile: pos(3, 2, false, 2),
		volume: 10,
		difficulty: 0,
		tag: null,
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'equity plan administration',
		desktop: pos(4, 4, false, 16),
		mobile: pos(3, 4, false, 16),
		volume: 150,
		difficulty: 0,
		tag: null,
		url: '/careers'
	},
	{
		keyword: 'outsourced stock plan administration',
		desktop: pos(4, 6, false, 0),
		mobile: pos(4, 5, false, 0),
		volume: 10,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services'
	},
	{
		keyword: 'full stock administration outsourcing',
		desktop: pos(5, 6, false, 1),
		mobile: pos(7, 7, false, 1),
		volume: 10,
		difficulty: 0,
		tag: null,
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'stock administration services',
		desktop: pos(11, 6, false, 0),
		mobile: pos(11, 6, false, 0),
		volume: 10,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services'
	},
	{
		keyword: 'stock plan administration outsourcing',
		desktop: pos(5, 6, false, 1),
		mobile: pos(4, 6, false, 1),
		volume: 20,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'equity administration jobs',
		desktop: pos(8, 7, false, 2),
		mobile: pos(7, 7, false, 2),
		volume: 40,
		difficulty: 0,
		tag: null,
		url: '/careers'
	},
	{
		keyword: 'equity administration outsourcing',
		desktop: pos(8, 9, false, 0),
		mobile: pos(9, 10, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'section 6039 filing services',
		desktop: pos(9, 10, false, 0),
		mobile: pos(9, null, false, 0),
		volume: 10,
		difficulty: 0,
		tag: 'compliance',
		url: '/blog/section-6039-reporting-guide'
	},
	{
		keyword: 'stock plan administration services',
		desktop: pos(10, 10, false, 0),
		mobile: pos(9, 10, false, 0),
		volume: 20,
		difficulty: 1,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'equity compensation consulting',
		desktop: pos(13, 11, false, 1),
		mobile: pos(13, 11, false, 1),
		volume: 30,
		difficulty: 0,
		tag: null,
		url: '/blog/equity-compensation-services'
	},
	{
		keyword: 'm&a equity compensation support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, 11, true, 0),
		volume: 10,
		difficulty: 0,
		tag: 'advanced-project',
		url: '/blog/equity-compensation-services'
	},
	{
		keyword: 'equity edge online administration',
		desktop: pos(11, 13, false, 0),
		mobile: pos(12, 13, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'vendor-support',
		url: '/careers'
	},
	{
		keyword: 'equity edge online support',
		desktop: pos(null, 14, true, 0),
		mobile: pos(10, 14, false, 0),
		volume: 0,
		difficulty: 3,
		tag: 'vendor-support',
		url: '/services/vendor-support'
	},
	{
		keyword: 'stock plan administration',
		desktop: pos(28, 27, false, 0),
		mobile: pos(1, 18, false, 2),
		volume: 350,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'stock plan administrator',
		desktop: pos(null, 23, true, 0),
		mobile: pos(null, 24, true, 0),
		volume: 90,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/careers'
	},
	{
		keyword: 'equity management',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 2100,
		difficulty: 43,
		tag: null,
		url: null
	},
	{
		keyword: 'equity management company',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 600,
		difficulty: 54,
		tag: null,
		url: null
	},
	{
		keyword: 'equity based compensation',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 250,
		difficulty: 0,
		tag: null,
		url: null
	},
	{
		keyword: 'equity compensation management',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 150,
		difficulty: 4,
		tag: 'head-term',
		url: null
	},
	{
		keyword: 'equity compensation services',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 150,
		difficulty: 1,
		tag: 'head-term',
		url: '/'
	},
	{
		keyword: '6039 reporting',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 80,
		difficulty: 0,
		tag: 'compliance',
		url: '/blog/section-6039-reporting-guide'
	},
	{
		keyword: 'employee equity program',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 80,
		difficulty: 0,
		tag: null,
		url: null
	},
	{
		keyword: 'employee equity compensation',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 70,
		difficulty: 5,
		tag: null,
		url: null
	},
	{
		keyword: 'employee share plan administration',
		desktop: pos(23, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 60,
		difficulty: 4,
		tag: null,
		url: '/blog/stock-plan-administration-guide'
	},
	{
		keyword: 'consulting for equity',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 50,
		difficulty: 43,
		tag: null,
		url: null
	},
	{
		keyword: 'espp administration',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 30,
		difficulty: 4,
		tag: 'compliance',
		url: '/blog/stock-plan-administration-guide'
	},
	{
		keyword: 'rsu administration',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 30,
		difficulty: 1,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'carta equity administration',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 20,
		difficulty: 38,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'equity compensation consultant',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 20,
		difficulty: 0,
		tag: null,
		url: null
	},
	{
		keyword: 'equity consultant',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 20,
		difficulty: 48,
		tag: null,
		url: null
	},
	{
		keyword: 'espp administration services',
		desktop: pos(20, null, false, 0),
		mobile: pos(19, null, false, 0),
		volume: 20,
		difficulty: 2,
		tag: 'compliance',
		url: '/blog/stock-plan-administration-guide'
	},
	{
		keyword: 'carta administration support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 0,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'equity compensation due diligence',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 4,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'equity compensation reconciliation',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 1,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'equity compensation tax reporting',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 3,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'equity platform implementation',
		desktop: pos(2, null, false, 0),
		mobile: pos(3, null, false, 0),
		volume: 10,
		difficulty: 1,
		tag: 'vendor-support',
		url: '/services/vendor-support'
	},
	{
		keyword: 'equity software migration',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 0,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'fractional stock plan administrator',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 2,
		tag: 'advanced-project',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'global equity mobility',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'ipo equity readiness',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'pre-ipo equity preparation',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'shareworks administration support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 7,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'spac equity administration',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 19,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'stock based compensation consulting',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 0,
		tag: 'head-term',
		url: null
	},
	{
		keyword: 'equity compensation ipo support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'fidelity stock plan services support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 22,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'mobility tax equity compensation',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'section 16 reporting support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 1,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'stock compensation consulting',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 7,
		tag: 'head-term',
		url: null
	}
];
