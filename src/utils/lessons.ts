import {
	IconCpu,
	IconTool,
	IconHelp,
	IconLock,
	IconPower,
	IconGizmo,
	IconShare,
	IconFolder,
	IconRocket,
	IconRouter,
	IconNetwork,
	IconRefresh,
	IconServer2,
	IconChartPie,
	IconCodeDots,
	IconPackages,
	IconUserEdit,
	IconServerCog,
	IconTerminal2,
	IconTextResize,
	IconFilePencil,
	IconCloudDataConnection,
} from "@tabler/icons-react";

export interface Lesson {
	title: string;
	excerpt: string;
	icon: React.ElementType;
}

export const terminal: Lesson[] = [
	{
		title: "History of Linux",
		excerpt: "What is Linux? Who created it? Why was it created? This lesson will answers all of these questions.",
		icon: IconRocket,
	},
];

export const system = [];

export const networking = [];
