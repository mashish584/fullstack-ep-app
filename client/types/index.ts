export type cookieType = {
	accessToken?: string;
};

export type locationType = {
	lat: string;
	lng: string;
	address: string;
};

export type dateFormatTypes = "dddd, DD MMMM,YYYY" | "D" | "MMM";

export interface mediaInfo {
	id: number;
	link: string;
	thumbnail: string;
	eventId: number;
	createdAt: string;
	updatedAt: string;
}

export interface userInfo {
	id: number;
	username: string;
	email: string;
	isActive: boolean;
	createdAt: string;
	updatedAt: string;
}
export interface eventInfo {
	id: string;
	title: string;
	description: string;
	category: string[];
	location: locationType;
	eventTimestamp: string;
	isActive: boolean;
	price: string;
	medias: mediaInfo[];
	owner: userInfo;
	createdAt: string;
	updatedAt: string;
}
