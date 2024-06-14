import { clsx } from 'clsx';

export const styles = {
	h1Super: clsx(
		'text-5xl font-bold tracking-tight font-eurostile italic text-pretty',
		'sm:text-6xl',
		'lg:text-8xl'
	),
	h1: clsx(
		'text-4xl font-bold tracking-tight font-eurostile italic text-pretty',
		'sm:text-5xl',
		'lg:text-6xl'
	),
	h2: clsx('font-eurostile text-4xl italic text-pretty font-medium', 'sm:text-5xl'),
	h3: clsx('font-eurostile text-2xl italic text-pretty font-medium', 'sm:text-3xl'),
	h4: clsx('font-eurostile text-xl text-pretty font-medium', 'sm:text-2xl'),
	blackButton: clsx(
		'bg-black px-6 py-3 text-lg text-white rounded-md transition ease-in-out duration-300',
		'hover:bg-stone-800 hover:ring-stone-800'
	),
	redButton: clsx(
		'bg-red-700 px-6 py-3 text-lg text-white rounded-md transition ease-in-out duration-300',
		'hover:bg-red-800 hover:ring-red-800'
	),
	darkButton: clsx(
		'bg-red-700/40 px-6 py-3 backdrop-blur text-lg text-white rounded-md ring-1 ring-red-800 transition ease-in-out duration-300 no-underline font-light font-eurostile',
		'hover:bg-red-800 hover:ring-red-800'
	),
	blueRedGradientBackground:
		'bg-gradient-to-b from-[#ab2329] via-[#233559] to-[#233559] p-[2px] rounded-lg',
	cardHover: clsx('transition-transform', 'hover:-translate-y-1'),
	heroSection: clsx(
		'flex flex-col justify-center relative pt-36 pb-8 px-6 text-white bg-black',
		'md:min-h-[90vh] md:pt-24 pb-6'
	)
};
