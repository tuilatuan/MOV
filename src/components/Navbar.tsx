import { menuItems } from "@/constants";
import React from "react";
import ActiveLink from "./common/ActiveLink";
import { TmenuItems } from "@/types/index.s";

const Navbar = () => {
  return (
    <ul className="menu absolute left-1/2 hidden h-full -translate-x-1/2 items-center justify-center 1140:flex">
      <li className="relative flex h-full cursor-pointer items-center justify-center">
        <ActiveLink url="/about">About MOV</ActiveLink>
      </li>
      <li className="group relative flex h-full cursor-pointer items-center justify-center">
        <ActiveLink url="/outprogram" cssname="pointer-events-none group">
          Our Programs
        </ActiveLink>
        <ul className="unappear group-hover:appear absolute -left-1/2 top-[80px] z-50 -mt-5 w-[330px] cursor-default gap-3 rounded-30 bg-whiteF7 p-3 text-center group-hover:mt-0">
          <li className="relative cursor-pointer">
            <ActiveLink
              url="/outprogram/?category=63253452345"
              cssname="py-2 inline-block text-bltext"
            >
              Khoá Học PAC (Practical Application Curriculum) Ứng Dụng
            </ActiveLink>
          </li>
          <li className="relative cursor-pointer">
            <ActiveLink
              cssname="py-2 inline-block opacity-35 pointer-events-none cursor-default  "
              url="/outprogram"
            >
              Chương trình đào tạo VANA
            </ActiveLink>
          </li>
          <li className="relative cursor-pointer">
            <ActiveLink
              cssname="py-2 inline-block opacity-35 pointer-events-none cursor-default "
              url="/outprogram"
            >
              VB-MAPP/VBA với PaTTAn
            </ActiveLink>
          </li>
          <li className="relative cursor-pointer">
            <ActiveLink
              cssname="py-2 inline-block opacity-35 pointer-events-none cursor-default "
              url="/outprogram"
            >
              Phát triển Chuyên môn Nâng cao
            </ActiveLink>
          </li>
        </ul>
      </li>
      <li className="relative flex h-full cursor-pointer items-center justify-center">
        <ActiveLink url="/activites">Activities</ActiveLink>
      </li>
      <li className="relative flex h-full cursor-pointer items-center justify-center">
        <ActiveLink url="/knowledge">Knowledge</ActiveLink>
      </li>
    </ul>
  );
};

export default Navbar;
