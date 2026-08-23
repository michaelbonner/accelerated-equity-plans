export function toISODateTime(dateString: string): string {
	if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
		return `${dateString}T00:00:00Z`;
	}

	const parsedDate = new Date(dateString);
	return Number.isNaN(parsedDate.getTime()) ? dateString : parsedDate.toISOString();
}

export function formatDisplayDate(dateString: string): string {
	return formatDate(dateString, { year: 'numeric', month: 'long', day: 'numeric' });
}

export function formatShortDate(dateString: string): string {
	return formatDate(dateString, { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatDate(dateString: string, options: Intl.DateTimeFormatOptions): string {
	const parsedDate = new Date(toISODateTime(dateString));
	if (Number.isNaN(parsedDate.getTime())) return dateString;

	// Dates are authored as plain YYYY-MM-DD, so format in UTC to avoid shifting a day.
	return parsedDate.toLocaleDateString('en-US', { ...options, timeZone: 'UTC' });
}
