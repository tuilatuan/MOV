import ButtonLink from "@/components/button/ButtonLink";
import Partners from "@/components/Partners";
import Image from "next/image";
import Activities from "./(pages)/home/Activities";
import Konwledhubs from "./(pages)/home/Konwledhubs";
import OurProgram from "./(pages)/home/OurProgram";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative h-[940px] overflow-hidden pt-[150px]">
        <div className="container relative h-full">
          <div className="content relative z-10 mx-auto max-w-[750px]">
            <h1 className="heading text-center text-h2">
              Tại MOV, chúng tôi cam kết phát triển lĩnh vực Phân tích Hành vi
              Ứng dụng (ABA) tại Việt Nam bằng cách chuyển ngữ các tài liệu và
              khóa học chất lượng cao.
            </h1>
            <ButtonLink
              url="/about"
              className="mx-auto mt-[40px] flex w-max rounded-30 bg-blue text-white hover:bg-green"
            >
              About MOV
            </ButtonLink>
          </div>
          <div className="absolute -left-[150px] -top-[60px] z-0 aspect-[1/1] w-[325px] overflow-hidden rounded-50">
            <Image
              alt="hero-img"
              fill
              src="https://mov.cfdstudio.vn/images/ckeditor/-GNR_Xv-iS_1zy6cY5WgK-Rectangle 171.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-[30px] top-[18%] z-0 aspect-[1/1] w-[280px] overflow-hidden rounded-full">
            <Image
              alt="hero-img"
              fill
              src="https://mov.cfdstudio.vn/images/ckeditor/xSAuPpZceKmiCQe78Io2u-Ellipse 16.png"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-[15%] left-[50%] z-0 aspect-[404/307] w-[404px] -translate-x-1/2 overflow-hidden rounded-50">
            <Image
              alt="hero-img"
              fill
              src="https://mov.cfdstudio.vn/images/ckeditor/3dw6bajdJY68iQQumJEh2-Rectangle 172.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <Partners />
      <OurProgram />
      <Konwledhubs />
      <Activities />
    </div>
  );
}
