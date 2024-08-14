import Image from "next/image";
import React from "react";

const TeacherLarge = () => {
  return (
    <div className="grid w-full grid-cols-1 902:grid-cols-2">
      <div className="img relative col-span-1 aspect-[670/520] h-full w-full overflow-hidden rounded-50">
        <Image
          alt="teach"
          src="https://mov.cfdstudio.vn/images/team/FhNvXXlScfAh_y-f6KDEP-doan-nguyen-mov.jpg"
          width={670}
          height={520}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-1 flex h-full flex-col justify-center overflow-hidden rounded-50 bg-blue bg-opacity-20 px-10 py-4 hover:bg-opacity-40 902:py-3 lg:px-[60px] xl:px-[90px] 2xl:px-[124px]">
        <h3 className="heading text-[20px] text-h3">Doan Nguyen</h3>
        <span className="mb-5 mt-[10px] font-bevietnam text-small text-bltext 902:mb-[35px]">
          THS.NCS
        </span>
        <p>
          Cô Đoan Nguyễn, Thạc sĩ Tâm lý học hành vi (ThS., BCBA), đang theo
          đuổi chương trình Tiến sĩ Giáo dục. Cô có kinh nghiệm làm việc với trẻ
          em tự kỷ từ năm 2015 và luôn tận tâm mang đến can thiệp sớm cho những
          trẻ em cần nhất. Ngoài công việc, cô Đoan còn yêu thích chăm sóc khu
          vườn nhỏ xinh và đưa những hoa quả từ khu vườn vào những bữa tối. Là
          một người đam mê khám phá và luôn tin tưởng vào việc đi theo con đường
          ít người đi, cô đang theo đuổi ước mơ trở thành giáo viên Yoga.
        </p>
      </div>
    </div>
  );
};

export default TeacherLarge;
