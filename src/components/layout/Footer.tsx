import Image from "next/image";
import Link from "next/link";
import BtnScrollToTop from "../button/BtnScrollToTop";

const Footer = () => {
  return (
    <div className="relative mb-[80px]">
      <div className="relative z-10 w-full rounded-bl-50 rounded-br-50 bg-whiteE7 py-[60px] 512:py-[90px] md:py-[120px]">
        <div className="-pb-20 container grid grid-cols-4 gap-y-5 md:grid-cols-12">
          <Link
            href="/"
            className="col-start-1 col-end-5 row-start-1 row-end-2 md:col-span-2 md:col-start-auto md:col-end-auto md:row-start-auto md:row-end-auto"
          >
            <Image alt="logo" src="imgs/logomov.svg" width={116} height={40} />
          </Link>

          <div className="col-start-1 col-end-5 row-start-2 row-end-3 md:col-start-3 md:col-end-8 md:row-start-auto md:row-end-auto">
            <p className="mb-5 font-nunito text-[18px] font-semibold leading-[auto] tracking-[-1.1%] text-bltext">
              Trao quyền cho các nhà thực hành địa phương với kỹ năng và kiến
              thức cần thiết để tạo ra ảnh hưởng ý nghĩa trong cộng đồng
            </p>
            <span className="font-nunito text-[14px] font-normal leading-[auto] tracking-[0%] text-bltext">
              ©2024 MOV. ALL RIGHTS RESERVED
            </span>
          </div>

          <div className="col-start-1 col-end-3 row-start-3 row-end-4 flex flex-col md:col-start-9 md:col-end-10 md:row-start-auto md:row-end-auto">
            <Link
              href="mailto:mov@gmail.com"
              className="font-nunito text-[18px] font-medium leading-[auto] tracking-[0%] text-bltext"
            >
              mov@gmail.com
            </Link>
            <Link
              href="/contact"
              className="font-nunito text-[18px] font-medium capitalize leading-[auto] tracking-[0%] text-bltext"
            >
              Contact Us
            </Link>
          </div>
          <div className="social col-start-3 col-end-5 row-start-3 row-end-4 flex flex-col md:col-start-11 md:col-end-12 md:row-start-auto md:row-end-auto">
            <Link
              href="facebook.com"
              target="_blank"
              className="font-nunito text-[18px] font-medium capitalize leading-[auto] tracking-[0%] text-bltext"
            >
              Facebook
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="font-nunito text-[18px] font-medium capitalize leading-[auto] tracking-[0%] text-bltext"
            >
              Linkedin
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              className="font-nunito text-[18px] font-medium capitalize leading-[auto] tracking-[0%] text-bltext"
            >
              Youtube
            </Link>
          </div>
        </div>
      </div>
      <BtnScrollToTop />
    </div>
  );
};

export default Footer;
