import Image from "next/image";

export default function Logo() {
	return (
		<div className="flex items-center gap-2">
			<Image src="/linux.svg" alt="Linux Guide Logo" width={35} height={35} />
			<p className="text-lg font-semibold">
				Linux<span className="text-blue-500">guide</span>
			</p>
		</div>
	);
}
