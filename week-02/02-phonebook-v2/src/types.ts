export type Contact = {
	id: number;
	name: string;
	phone: string;
	type: "personal" | "business";
	isFavorite: boolean;
};

export type Filter = "All" | "Personal" | "Business" | "Favorites";
