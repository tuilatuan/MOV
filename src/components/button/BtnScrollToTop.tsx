"use client";

import React from "react";
import Button from "./Button";

const BtnScrollToTop = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Tạo hiệu ứng cuộn mượt mà
    });
  };
  return (
    <Button
      onClick={toTop}
      className="-z-1 absolute -bottom-[85px] left-0 w-full py-9 pt-16 font-nunito text-[18px] font-medium capitalize leading-[auto] tracking-[0%] text-bltext hover:bg-blue hover:bg-opacity-30"
    >
      Back to top
    </Button>
  );
};

export default BtnScrollToTop;
