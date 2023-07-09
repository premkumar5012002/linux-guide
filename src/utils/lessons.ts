import { IconHistory } from "@tabler/icons-react";

export interface Lesson {
	title: string;
	excerpt: string;
	url: string;
	icon: React.ElementType;
}

export const basics: Lesson[] = [
	{
		title: "History of Linux",
		excerpt: "What is Linux? Who created it? Why was it created? This lesson will answers all of these questions.",
		url: "/lessons/history",
		icon: IconHistory,
	},
];
