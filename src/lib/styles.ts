import clsx from 'clsx';

export const styles = {
	h1: clsx('text-5xl font-bold tracking-tight font-eurostile italic text-pretty', 'sm:text-8xl'),
	h2: clsx('font-eurostile text-3xl italic text-pretty font-medium', 'sm:text-5xl'),
	h3: clsx('font-eurostile text-2xl italic text-pretty font-medium', 'sm:text-3xl'),
	h4: clsx('font-eurostile text-xl text-pretty font-medium', 'sm:text-2xl'),
	redButton: clsx(
		'bg-red-700 px-5 py-2 text-lg text-white rounded-md transition ease-in-out duration-300',
		'hover:bg-red-800 hover:ring-red-800'
	),
	darkButton: clsx(
		'bg-red-700/40 px-5 py-2 backdrop-blur text-lg text-white rounded-md ring-1 ring-red-800 transition ease-in-out duration-300 no-underline font-light',
		'hover:bg-red-800 hover:ring-red-800'
	),
	blueRedGradientBackground:
		'bg-gradient-to-b from-[#ab2329] via-[#233559] to-[#233559] p-[2px] rounded-lg'
};
