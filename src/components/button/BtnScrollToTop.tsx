"use client";

import Button from "./Button";

import scrollTop from "@/utils/scrollToTop";

const BtnScrollToTop = () => {
  return (
    <Button
      onClick={() => scrollTop()}
      className="-z-1 absolute -bottom-[85px] left-0 w-full py-9 pt-16 font-nunito text-[18px] font-medium capitalize leading-[auto] tracking-[0%] text-bltext hover:bg-blue hover:bg-opacity-30"
    >
      Back to top
    </Button>
  );
};

export default BtnScrollToTop;
