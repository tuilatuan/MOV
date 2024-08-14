import React from "react";
import Volunteer from "./Volunteer";
import Image from "next/image";
import FlickityCarousel from "@/components/layout/FlickityCarousel";
import TeacherLarge from "@/components/teach/TeacherLarge";

const AboutPage = () => {
  return (
    <div>
      {/* SChero */}
      <div className="relative h-[600px] overflow-hidden pt-[100px] md:h-[940px] md:pt-[150px]">
        <div className="container relative h-full">
          <div className="content">
            <h1 className="heading relative z-10 text-center text-[30px] md:text-[64px]">
              Make <br /> your life <span className="text-green">yours</span>
            </h1>
          </div>
          <div className="absolute top-[75px] aspect-[1/1] w-[130px] overflow-hidden rounded-50 md:-left-[100px] md:-top-[60px] md:w-[240px] 1140:w-[325px]">
            <Image
              alt="hero-img"
              fill
              src="https://mov.cfdstudio.vn/images/ckeditor/-GNR_Xv-iS_1zy6cY5WgK-Rectangle 171.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-[30px] top-[18%] aspect-[1/1] w-[120px] overflow-hidden rounded-full md:w-[240px] 1140:w-[280px]">
            <Image
              alt="hero-img"
              fill
              src="https://mov.cfdstudio.vn/images/ckeditor/xSAuPpZceKmiCQe78Io2u-Ellipse 16.png"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-[15%] left-[50%] aspect-[404/307] w-[232px] -translate-x-1/2 overflow-hidden rounded-50 md:w-[340px] 1140:w-[404px]">
            <Image
              alt="hero-img"
              fill
              src="https://mov.cfdstudio.vn/images/ckeditor/3dw6bajdJY68iQQumJEh2-Rectangle 172.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* End SCHero */}

      {/* Content */}
      <div className="container max-w-[680px]">
        <div className="mb-[100px]">
          <h3 className="heading mb-10 text-center text-h3bl md:mb-[75px]">
            Mission
          </h3>
          <p className="text-center font-bevietnam text-[16px] text-body">
            Tại MOV, chúng tôi cam kết phát triển lĩnh vực Phân tích Hành vi Ứng
            dụng (ABA) tại Việt Nam bằng cách chuyển ngữ các tài liệu và khóa
            học chất lượng cao. Mục tiêu của chúng tôi là cung cấp giáo dục ABA
            chính xác về ngôn ngữ, phù hợp văn hóa và có ý nghĩa xã hội, dành
            riêng cho chuyên gia Việt Nam. Chúng tôi tin tưởng vào sức mạnh của
            ABA trong việc biến đổi cuộc sống và cam kết tích hợp công nghệ và
            phương pháp ABA mới nhất vào các khóa học của mình. <br />
            <br /> Mục tiêu của chúng tôi là trao quyền cho các nhà thực hành
            địa phương với kỹ năng và kiến thức cần thiết để tạo ra ảnh hưởng ý
            nghĩa trong cộng đồng, đảm bảo rằng đào tạo của chúng tôi không chỉ
            hiệu quả mà còn hài hòa sâu sắc với giá trị văn hóa và nhu cầu của
            Việt Nam.
          </p>
        </div>
        <div>
          <h3 className="heading mb-10 text-center text-h3bl md:mb-[75px]">
            Vision
          </h3>
          <p className="text-center font-bevietnam text-[16px] md:text-body">
            Tại MOV, chúng tôi hướng tới một tương lai nơi chúng tôi được công
            nhận là Nhà Cung Cấp Nội Dung Chấp Thuận (ACP) trong lĩnh vực Phân
            tích Hành vi Ứng dụng (ABA) bởi Tổ chức IBAO. Với việc phát triển
            các khóa học phù hợp và hợp tác cùng IBAO, chúng tôi mong muốn đào
            tạo và nuôi dưỡng một môi trường hợp tác cho ABA tại Việt Nam.{" "}
            <br />
            <br /> Chúng tôi cam kết tạo ra các chương trình giáo dục ABA chất
            lượng cao, đáp ứng nhu cầu cụ thể và văn hóa của Việt Nam, để góp
            phần nâng cao năng lực và kiến thức của các chuyên gia trong lĩnh
            vực này. <br /> <br /> Mục tiêu của chúng tôi là không chỉ đào tạo
            những chuyên gia ABA xuất sắc mà còn xây dựng cộng đồng ABA mạnh mẽ
            và hợp tác, góp phần cải thiện chất lượng cuộc sống cho mọi người
            tại Việt Nam qua ứng dụng của ABA.
          </p>
        </div>
      </div>

      {/* End content */}

      {/* Core Team */}
      <div className="coreteam">
        <div className="container py-16 md:py-40">
          <FlickityCarousel>
            <TeacherLarge />
            <TeacherLarge />
            <TeacherLarge />
          </FlickityCarousel>
        </div>
      </div>

      {/* Core Team */}

      <Volunteer />
    </div>
  );
};

export default AboutPage;
