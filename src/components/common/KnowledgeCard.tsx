import Link from "next/link";
import React from "react";
import Label from "../button/Label";

const KnowledgeCard = ({
  name,
  metaDesc,
  cate,
}: {
  name: string;
  metaDesc: string;
  cate: string;
}) => {
  return (
    <div className="w-[calc((100%-(20px*0))/1)] p-[15px] sm:w-[calc((100%-(20px*1))/2)] md:gap-[34px] xl:w-[calc((100%-(20px*3))/4)] xl:gap-10">
      <Link href="/">
        <h3 className="line-clamp-5 font-nunito text-h4 font-bold text-bltext transition-all duration-300 hover:text-blue">
          {name}
        </h3>
      </Link>
      <p className="mb-4 mt-3 line-clamp-3 font-bevietnam text-small sm:my-5">
        {metaDesc}
      </p>
      <Label>{cate}</Label>
    </div>
  );
};

export default KnowledgeCard;
