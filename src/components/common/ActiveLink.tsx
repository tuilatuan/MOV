"use client";

import { IActiveLinkProps } from "@/types/index.s";
import cn from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ url = "", children, cssname }: IActiveLinkProps) => {
  const pathName = usePathname();
  const isActive = url === pathName;
  return (
    <Link
      href={url}
      className={cn(
        `px-5 py-5 font-nunito text-button font-bold text-blue transition-all duration-300 hover:text-green ${cssname}`,
        {
          "text-green hover:text-green": isActive,
        },
      )}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
