export function toISODateTime(dateString: string): string {
	if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
		return `${dateString}T00:00:00Z`;
	}

	const parsedDate = new Date(dateString);
	return Number.isNaN(parsedDate.getTime()) ? dateString : parsedDate.toISOString();
}
