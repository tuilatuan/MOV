"use client";

import { handleToggleMenuMobile } from "@/store/reducer/menuSlice";
import { RootState } from "@/store/store";
import cn from "@/utils/cn";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ButtonHandleMenuMobile = () => {
  const dispatch = useDispatch();
  const hanldeState = useSelector(
    (state: RootState) => state.menu.showMenuMobile,
  );

  const handleSetState = () => {
    dispatch(handleToggleMenuMobile());
  };
  console.log("hanldeState :>> ", hanldeState);
  return (
    <div
      className="flex h-full w-[26px] cursor-pointer flex-col items-center justify-center gap-[5px] 1140:hidden"
      onClick={handleSetState}
    >
      <div
        className={cn("trans300 block h-[2px] w-full rounded-[2px] bg-blue", {
          "translate-x-[0px] rotate-45": hanldeState,
        })}
      ></div>
      <div
        className={cn("trans300 block h-[2px] w-full rounded-[2px] bg-blue", {
          "-translate-y-[6px] rotate-[-45deg]": hanldeState,
        })}
      ></div>
    </div>
  );
};

export default ButtonHandleMenuMobile;
