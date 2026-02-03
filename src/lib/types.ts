export interface Review {
	id: number;
	name: string;
	title: string;
	reviewText: string;
}

export interface BlogPost {
	slug: string;
	title: string;
	metaTitle: string;
	metaDescription: string;
	excerpt: string;
	publishedDate: string;
	updatedDate?: string;
	author: {
		name: string;
		title?: string;
	};
	category: string;
	tags: string[];
	readingTime: number;
	content: string;
}
