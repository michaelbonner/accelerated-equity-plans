import { clsx } from 'clsx';

export const styles = {
	h1Super: clsx(
		'text-5xl font-semibold tracking-tight font-headings italic text-balance',
		'sm:text-6xl',
		'lg:text-8xl'
	),
	h1: clsx(
		'text-4xl font-semibold tracking-tight font-headings italic text-balance',
		'sm:text-5xl',
		'lg:text-6xl'
	),
	h2: clsx('font-headings text-4xl italic font-medium tracking-tight text-balance', 'sm:text-5xl'),
	h3: clsx('font-headings text-2xl italic font-medium tracking-tight text-balance', 'sm:text-3xl'),
	h4: clsx('font-headings text-xl font-medium tracking-tight text-balance', 'sm:text-2xl'),
	blackButton: clsx(
		'inline-flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-base font-medium text-white',
		'cursor-pointer ring-1 ring-black/10',
		'hover:bg-zinc-800',
		'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aep-red-700'
	),
	redButton: clsx(
		'inline-flex items-center justify-center rounded-lg bg-aep-red-700 px-5 py-2.5 text-base font-medium text-white',
		'cursor-pointer ring-1 ring-black/5',
		'hover:bg-aep-red-600',
		'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aep-red-700'
	),
	darkButton: clsx(
		'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-base font-medium text-white',
		'ring-1 ring-white/15 bg-white/5 no-underline',
		'cursor-pointer hover:bg-white/10 hover:ring-white/25',
		'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
	),
	lightButton: clsx(
		'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-base font-medium text-zinc-900',
		'ring-1 ring-zinc-900/15 bg-white',
		'cursor-pointer hover:bg-zinc-50 hover:ring-zinc-900/25',
		'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aep-red-700'
	),
	lightLink: clsx(
		'inline-flex items-center gap-1.5 text-base font-medium text-aep-red-700 no-underline',
		'hover:text-aep-red-600 hover:underline',
		'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aep-red-700'
	),
	blueRedGradientBackground: 'rounded-xl ring-1 ring-white/10',
	cardHover: clsx('transition-transform', 'hover:-translate-y-1'),
	heroSection: clsx(
		'flex flex-col justify-center relative pt-36 pb-10 px-6 text-white bg-black',
		'md:min-h-[90vh] md:pt-24'
	)
};
