import { TCourseItem } from "@/types/index.s";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Label from "../button/Label";

const Course = ({ url, title, image, slug }: TCourseItem) => {
  return (
    <div className="trans300 relative mr-2 block w-full rounded-50 bg-bgcard px-3 pb-[35px] pt-[10px] hover:bg-bgcardhover 512:mr-5 512:w-[calc((100%-(20px*1))/2)] sm:pb-[60px] md:w-[calc((100%-(20px*2))/3)]">
      <div>
        <Link
          href="/"
          className="relative aspect-[540/300] overflow-hidden pb-[30px]"
        >
          <Image
            alt="img"
            src={image}
            width={540}
            height={300}
            className="h-full w-full rounded-40 object-cover"
          />
        </Link>
      </div>

      <div className="infobox block px-0 pt-4 sm:pt-[30px] 902:px-6">
        <Link
          href="/"
          className="trans300 mb-[14px] line-clamp-3 text-h4 font-bold text-bltext hover:text-blue"
        >
          <h3>{title}</h3>
        </Link>

        {/* <span className="time text-[15px] font-bold">20/2/2024</span> */}

        <Label>đang dien ra </Label>
      </div>
    </div>
  );
};

export default Course;
