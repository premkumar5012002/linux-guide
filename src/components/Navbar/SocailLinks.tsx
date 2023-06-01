import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

export default function SocialLinks() {
  const LinkProps = {
    target: "_blank",
    href: "https://github.com/premkumar5012002/linux-guide",
    className: "text-gray-300 hover:bg-secondary rounded-md p-1.5",
  };
  return (
    <div className="flex item-center gap-3 pl-4">
      <Link {...LinkProps}>
        <IconBrandGithub />
      </Link>
    </div>
  );
}
