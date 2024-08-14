import cn from "@/utils/cn";
import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn(
        "cursor-pointer px-[20px] py-[10px] font-nunito text-[12px] font-bold capitalize transition-all duration-300 sm:text-button",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
