"use client";

import { menuItems } from "@/constants";
import Link from "next/link";
import React from "react";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

const MenuMobile = () => {
  const dispatch = useDispatch();
  const hanldeState = useSelector(
    (state: RootState) => state.menu.showMenuMobile,
  );

  if (!hanldeState) {
    return null;
  }

  return (
    <div className="absolute left-0 top-h-header z-[500] flex h-[calc(100vh-var(--h-header))] w-full flex-col items-center justify-center bg-custom-gradient">
      <div className="flex flex-col text-center">
        {menuItems?.map((item, index) => {
          return (
            <Link href={item.url} key={index}>
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="mt-[26px]">
        <Button className="rounded-30 bg-blue text-white hover:bg-green">
          contact us
        </Button>
        <div className="langgr mt-[14px]">
          <Button className="rounded-30 border border-solid text-bltext">
            EN
          </Button>
          <Button className="rounded-30 text-blue hover:text-bltext">VN</Button>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
