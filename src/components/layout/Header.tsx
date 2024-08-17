import { menuItems } from "@/constants";
import { TmenuItems } from "@/types/index.s";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import ButtonHandleMenuMobile from "../button/ButtonHandleMenuMobile";
import ActiveLink from "../common/ActiveLink";
import MenuMobile from "./MenuMobile";
import Navbar from "../Navbar";
import ButtonLink from "../button/ButtonLink";
import ButtonHandleLang from "../button/ButtonHandleLang";

const Header = () => {
  return (
    <div className="header fixed left-0 top-0 z-[500] h-h-header w-full bg-[#FFF7E8]">
      <div className="container relative flex h-full items-center justify-between">
        <Link href="/">
          <Image alt="logo" src="imgs/logomov.svg" width={116} height={40} />
        </Link>

        <Navbar />

        <div className="hidden items-center justify-center gap-[6px] 1140:flex">
          <ButtonLink
            url="/contact"
            className="rounded-30 bg-blue text-white hover:bg-green"
          >
            contact us
          </ButtonLink>

          <ButtonHandleLang />
        </div>

        <ButtonHandleMenuMobile />
      </div>

      <MenuMobile />
    </div>
  );
};

export default Header;
