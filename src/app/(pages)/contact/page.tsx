import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-10">
      <h2 className="heading text-center text-[64px] text-bltext">Liên hệ</h2>

      <div className="container my-[100px]">
        <div className="grid grid-cols-2">
          <div className="img col-span-1 overflow-hidden rounded-50">
            <Image
              alt="contact-img"
              src="/imgs/contact-img.jpg"
              width={680}
              height={700}
            />
          </div>
          <div className="info col-span-1 rounded-50 bg-whiteE7 px-[60px] pt-[105px]">
            <span className="font-nunito text-[20px] font-bold leading-[185%] tracking-[0%]">
              Công Ty TNHH Center Of Myly Vietnam
            </span>

            <div className="my-[60px]">
              <p className="font-nunito text-[20px] font-normal leading-[185%] tracking-[0%]">
                <span className="font-nunito text-[20px] font-bold leading-[185%] tracking-[0%]">
                  Địa chỉ:
                </span>
                1/24 Thăng Long, P.4 Q. Tân Bình, TPHCM, Việt Nam
              </p>
              <p className="font-nunito text-[20px] font-normal leading-[185%] tracking-[0%]">
                <span className="font-nunito text-[20px] font-bold leading-[185%] tracking-[0%]">
                  Thông tin liên hệ:
                </span>{" "}
                <br />
                info@myly.org
              </p>
            </div>
            <p className="font-nunito text-[20px] font-normal leading-[185%] tracking-[0%]">
              Vui lòng liên hệ qua email nếu bạn có thông tin cần được tư vấn.
              Mọi thông tin sẽ được cập nhật trên website và các trang mạng xã
              hội của Myly Vietnam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
