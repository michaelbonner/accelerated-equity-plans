// SEO ranking report data for the /seo-rankings client report page.
//
// Positions are tracked separately for desktop and mobile Google results.
//
// To update with a new report:
//   1. Update `reportDate` (this export's date) and `previousReportDate` (the
//      prior report's date).
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

export const reportDate = '2026-07-13';
export const previousReportDate = '2026-07-05';

const pos = (
	previous: number | null,
	current: number | null,
	isNew: boolean,
	traffic: number
): DevicePosition => ({ previous, current, isNew, traffic });

export const keywords: KeywordRanking[] = [
	{
		keyword: 'equity plan & process design services',
		desktop: pos(1, 1, false, 1),
		mobile: pos(1, 1, false, 1),
		volume: 0,
		difficulty: 0,
		tag: null,
		url: '/services/plan-process-design'
	},
	{
		keyword: 'temporary stock administration support',
		desktop: pos(1, 1, false, 1),
		mobile: pos(10, 3, false, 0),
		volume: 0,
		difficulty: 0,
		tag: null,
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'interim stock plan administrator',
		desktop: pos(4, 1, false, 0),
		mobile: pos(6, 4, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'on-demand stock administration',
		desktop: pos(null, 1, true, 0),
		mobile: pos(1, 3, false, 0),
		volume: 0,
		difficulty: 3,
		tag: 'advanced-project',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'equity platform implementation',
		desktop: pos(null, 3, true, 0),
		mobile: pos(null, 3, true, 0),
		volume: 0,
		difficulty: 1,
		tag: 'vendor-support',
		url: '/services/vendor-support'
	},
	{
		keyword: 'equity plan administration',
		desktop: pos(4, 4, false, 15),
		mobile: pos(9, 4, false, 14),
		volume: 150,
		difficulty: 0,
		tag: null,
		url: '/careers'
	},
	{
		keyword: 'outsourced stock plan administration',
		desktop: pos(null, 6, true, 0),
		mobile: pos(null, 6, true, 0),
		volume: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'stock plan administration outsourcing',
		desktop: pos(9, 7, false, 0),
		mobile: pos(1, 6, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'equity administration jobs',
		desktop: pos(6, 7, false, 2),
		mobile: pos(8, 6, false, 3),
		volume: 40,
		difficulty: 0,
		tag: null,
		url: '/careers'
	},
	{
		keyword: 'equity administration',
		desktop: pos(8, 7, false, 8),
		mobile: pos(8, 7, false, 8),
		volume: 150,
		difficulty: 0,
		tag: null,
		url: '/careers'
	},
	{
		keyword: 'stock administration services',
		desktop: pos(15, 11, false, 0),
		mobile: pos(18, 7, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/blog/stock-plan-administration-guide'
	},
	{
		keyword: 'equity administration outsourcing',
		desktop: pos(12, 8, false, 0),
		mobile: pos(12, 8, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'equity edge online administration',
		desktop: pos(13, 11, false, 0),
		mobile: pos(3, 9, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'vendor-support',
		url: '/careers'
	},
	{
		keyword: 'stock plan administration services',
		desktop: pos(13, 9, false, 0),
		mobile: pos(14, 9, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'full stock administration outsourcing',
		desktop: pos(null, 10, true, 0),
		mobile: pos(null, 10, true, 0),
		volume: 0,
		difficulty: 0,
		tag: null,
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'stock plan administration',
		desktop: pos(null, 11, true, 6),
		mobile: pos(null, 16, true, 2),
		volume: 300,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/blog/stock-plan-administration-guide'
	},
	{
		keyword: '6039 reporting',
		desktop: pos(null, 12, true, 2),
		mobile: pos(null, null, false, 0),
		volume: 80,
		difficulty: 0,
		tag: 'compliance',
		url: '/blog/section-6039-reporting-guide'
	},
	{
		keyword: 'employee share plan administration',
		desktop: pos(null, 12, true, 1),
		mobile: pos(null, null, false, 0),
		volume: 40,
		difficulty: 1,
		tag: null,
		url: '/blog/stock-plan-administration-guide'
	},
	{
		keyword: 'equity edge online support',
		desktop: pos(null, 12, true, 0),
		mobile: pos(null, 13, true, 0),
		volume: 0,
		difficulty: 0,
		tag: 'vendor-support',
		url: '/services/vendor-support'
	},
	{
		keyword: 'espp administration',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, 21, true, 0),
		volume: 0,
		difficulty: 4,
		tag: 'compliance',
		url: '/blog/stock-plan-administration-guide'
	},
	{
		keyword: 'espp administration services',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, 24, true, 0),
		volume: 0,
		difficulty: 2,
		tag: 'compliance',
		url: '/blog/stock-plan-administration-guide'
	},
	{
		keyword: 'equity management',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 2100,
		difficulty: 22,
		tag: null,
		url: null
	},
	{
		keyword: 'equity management company',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 700,
		difficulty: 45,
		tag: null,
		url: null
	},
	{
		keyword: 'equity based compensation',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 250,
		difficulty: 5,
		tag: null,
		url: null
	},
	{
		keyword: 'equity compensation services',
		desktop: pos(null, null, false, 0),
		mobile: pos(39, null, false, 0),
		volume: 150,
		difficulty: 5,
		tag: 'head-term',
		url: '/'
	},
	{
		keyword: 'equity compensation management',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 150,
		difficulty: 3,
		tag: 'head-term',
		url: null
	},
	{
		keyword: 'employee equity program',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 100,
		difficulty: 5,
		tag: null,
		url: null
	},
	{
		keyword: 'stock plan administrator',
		desktop: pos(22, null, false, 0),
		mobile: pos(40, null, false, 0),
		volume: 80,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/careers'
	},
	{
		keyword: 'employee equity compensation',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 70,
		difficulty: 4,
		tag: null,
		url: null
	},
	{
		keyword: 'consulting for equity',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 60,
		difficulty: 21,
		tag: null,
		url: null
	},
	{
		keyword: 'equity consultant',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 30,
		difficulty: 43,
		tag: null,
		url: null
	},
	{
		keyword: 'equity compensation consulting',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 20,
		difficulty: 2,
		tag: null,
		url: null
	},
	{
		keyword: 'equity compensation consultant',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 0,
		tag: null,
		url: null
	},
	{
		keyword: 'section 16 reporting support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 10,
		difficulty: 4,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'carta administration support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 7,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'carta equity administration',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 21,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'equity compensation due diligence',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 2,
		tag: 'advanced-project',
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
		keyword: 'equity compensation reconciliation',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'equity compensation tax reporting',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 2,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'equity software migration',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'fidelity stock plan services support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 9,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'fractional stock plan administrator',
		desktop: pos(16, null, false, 0),
		mobile: pos(6, null, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'global equity mobility',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'ipo equity readiness',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'm&a equity compensation support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'advanced-project',
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
		keyword: 'pre-ipo equity preparation',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 2,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'rsu administration',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 5,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'section 6039 filing services',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'shareworks administration support',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 32,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'spac equity administration',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 18,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'stock based compensation consulting',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 0,
		tag: 'head-term',
		url: null
	},
	{
		keyword: 'stock compensation consulting',
		desktop: pos(null, null, false, 0),
		mobile: pos(null, null, false, 0),
		volume: 0,
		difficulty: 1,
		tag: 'head-term',
		url: null
	}
];
