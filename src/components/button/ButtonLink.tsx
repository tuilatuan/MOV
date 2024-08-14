import cn from "@/utils/cn";
import Link from "next/link";
import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  url: string;
}
const ButtonLink = ({ children, className, url, ...rest }: ButtonProps) => {
  return (
    <Link
      href={url}
      className={cn(
        "cursor-pointer px-[20px] py-[10px] font-nunito text-[12px] font-bold capitalize transition-all duration-300 sm:text-button",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
