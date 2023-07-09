import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const config = {
	logo: (
		<div className="flex items-center gap-2">
			<Image src="/linux.svg" alt="Linux Guide Logo" width={35} height={35} />
			<p className="text-lg font-semibold">
				Linux<span className="text-blue-500">guide</span>
			</p>
		</div>
	),

	project: {
		link: "https://github.com/premkumar5012002/linux-guide",
	},

	docsRepositoryBase: "https://github.com/premkumar5012002/linux-guide/tree/main",

	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "%s – Linux Guide",
			};
		}
	},

	footer: {
		text: (
			<span>
				{`MIT ${new Date().getFullYear()} © `}
				<Link href="https://github.com/premkumar5012002" target="_blank" className="hover:text-blue-500">
					Prem Kumar
				</Link>
			</span>
		),
	},
};

export default config;
