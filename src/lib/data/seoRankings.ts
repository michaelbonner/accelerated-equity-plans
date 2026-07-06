// SEO ranking report data for the /seo-rankings client report page.
//
// To update with a new report:
//   1. Update `reportDate` (the "Current update date" from the export) and
//      `previousReportDate` (the prior "Previous update date").
//   2. Replace the `keywords` array below with the new export's rows.
//
// Position values: a number is the Google ranking position; `null` means the
// keyword is not currently ranking in the tracked results. `isNew` flags a
// keyword that started ranking during this reporting period.

export interface KeywordRanking {
	keyword: string;
	previousPosition: number | null;
	currentPosition: number | null;
	isNew: boolean;
	volume: number;
	currentTraffic: number;
	difficulty: number;
	tag: string | null;
	url: string | null;
}

export const reportDate = '2026-07-05';
export const previousReportDate = '2026-06-28';

export const keywords: KeywordRanking[] = [
	{
		keyword: 'equity plan & process design services',
		previousPosition: 1,
		currentPosition: 1,
		isNew: false,
		volume: 10,
		currentTraffic: 4,
		difficulty: 1,
		tag: null,
		url: '/services/plan-process-design'
	},
	{
		keyword: 'temporary stock administration support',
		previousPosition: 1,
		currentPosition: 1,
		isNew: false,
		volume: 10,
		currentTraffic: 3,
		difficulty: 0,
		tag: null,
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'interim stock plan administrator',
		previousPosition: 4,
		currentPosition: 1,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'on-demand stock administration',
		previousPosition: null,
		currentPosition: 1,
		isNew: true,
		volume: 0,
		currentTraffic: 0,
		difficulty: 9,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'equity platform implementation',
		previousPosition: null,
		currentPosition: 3,
		isNew: true,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'equity plan administration',
		previousPosition: 4,
		currentPosition: 4,
		isNew: false,
		volume: 150,
		currentTraffic: 13,
		difficulty: 0,
		tag: null,
		url: '/careers'
	},
	{
		keyword: 'outsourced stock plan administration',
		previousPosition: null,
		currentPosition: 6,
		isNew: true,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: null
	},
	{
		keyword: 'equity administration',
		previousPosition: 8,
		currentPosition: 7,
		isNew: false,
		volume: 100,
		currentTraffic: 5,
		difficulty: 1,
		tag: null,
		url: '/careers'
	},
	{
		keyword: 'equity administration jobs',
		previousPosition: 6,
		currentPosition: 7,
		isNew: false,
		volume: 30,
		currentTraffic: 2,
		difficulty: 0,
		tag: null,
		url: '/careers'
	},
	{
		keyword: 'stock plan administration outsourcing',
		previousPosition: 9,
		currentPosition: 7,
		isNew: false,
		volume: 10,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'equity administration outsourcing',
		previousPosition: 12,
		currentPosition: 8,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'stock plan administration services',
		previousPosition: 13,
		currentPosition: 9,
		isNew: false,
		volume: 10,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'full stock administration outsourcing',
		previousPosition: null,
		currentPosition: 10,
		isNew: true,
		volume: 10,
		currentTraffic: 0,
		difficulty: 0,
		tag: null,
		url: null
	},
	{
		keyword: 'stock plan administration',
		previousPosition: null,
		currentPosition: 11,
		isNew: true,
		volume: 450,
		currentTraffic: 5,
		difficulty: 0,
		tag: 'stock-plan',
		url: null
	},
	{
		keyword: 'stock administration services',
		previousPosition: 15,
		currentPosition: 11,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 1,
		tag: 'stock-plan',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'equity edge online administration',
		previousPosition: 13,
		currentPosition: 11,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'vendor-support',
		url: '/careers'
	},
	{
		keyword: '6039 reporting',
		previousPosition: null,
		currentPosition: 12,
		isNew: true,
		volume: 80,
		currentTraffic: 1,
		difficulty: 0,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'employee share plan administration',
		previousPosition: null,
		currentPosition: 12,
		isNew: true,
		volume: 50,
		currentTraffic: 1,
		difficulty: 1,
		tag: null,
		url: null
	},
	{
		keyword: 'equity edge online support',
		previousPosition: null,
		currentPosition: 12,
		isNew: true,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'equity management',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 2100,
		currentTraffic: 0,
		difficulty: 39,
		tag: null,
		url: null
	},
	{
		keyword: 'equity management company',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 600,
		currentTraffic: 0,
		difficulty: 45,
		tag: null,
		url: null
	},
	{
		keyword: 'equity based compensation',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 300,
		currentTraffic: 0,
		difficulty: 7,
		tag: null,
		url: null
	},
	{
		keyword: 'equity compensation services',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 150,
		currentTraffic: 0,
		difficulty: 1,
		tag: 'head-term',
		url: null
	},
	{
		keyword: 'equity compensation management',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 100,
		currentTraffic: 0,
		difficulty: 1,
		tag: 'head-term',
		url: null
	},
	{
		keyword: 'employee equity compensation',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 80,
		currentTraffic: 0,
		difficulty: 0,
		tag: null,
		url: null
	},
	{
		keyword: 'employee equity program',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 80,
		currentTraffic: 0,
		difficulty: 4,
		tag: null,
		url: null
	},
	{
		keyword: 'stock plan administrator',
		previousPosition: 22,
		currentPosition: null,
		isNew: false,
		volume: 80,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'stock-plan',
		url: '/careers'
	},
	{
		keyword: 'consulting for equity',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 40,
		currentTraffic: 0,
		difficulty: 12,
		tag: null,
		url: null
	},
	{
		keyword: 'equity compensation consulting',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 30,
		currentTraffic: 0,
		difficulty: 1,
		tag: null,
		url: null
	},
	{
		keyword: 'equity consultant',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 30,
		currentTraffic: 0,
		difficulty: 38,
		tag: null,
		url: null
	},
	{
		keyword: 'equity compensation consultant',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 20,
		currentTraffic: 0,
		difficulty: 2,
		tag: null,
		url: null
	},
	{
		keyword: 'espp administration services',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 20,
		currentTraffic: 0,
		difficulty: 2,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'carta equity administration',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 10,
		currentTraffic: 0,
		difficulty: 23,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'espp administration',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 10,
		currentTraffic: 0,
		difficulty: 4,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'rsu administration',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 10,
		currentTraffic: 0,
		difficulty: 5,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'carta administration support',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 7,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'equity compensation due diligence',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 3,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'equity compensation ipo support',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'equity compensation reconciliation',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'equity compensation tax reporting',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 2,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'equity software migration',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'fidelity stock plan services support',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 29,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'fractional stock plan administrator',
		previousPosition: 16,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 1,
		tag: 'advanced-project',
		url: '/services/equity-plan-administration'
	},
	{
		keyword: 'global equity mobility',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'ipo equity readiness',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'm&a equity compensation support',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'mobility tax equity compensation',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'pre-ipo equity preparation',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 2,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'section 16 reporting support',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 2,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'section 6039 filing services',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'compliance',
		url: null
	},
	{
		keyword: 'shareworks administration support',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 0,
		tag: 'vendor-support',
		url: null
	},
	{
		keyword: 'spac equity administration',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 19,
		tag: 'advanced-project',
		url: null
	},
	{
		keyword: 'stock based compensation consulting',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 2,
		tag: 'head-term',
		url: null
	},
	{
		keyword: 'stock compensation consulting',
		previousPosition: null,
		currentPosition: null,
		isNew: false,
		volume: 0,
		currentTraffic: 0,
		difficulty: 1,
		tag: 'head-term',
		url: null
	}
];
