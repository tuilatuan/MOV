import Link from "next/link";
import React from "react";
import Label from "../button/Label";

const KnowledgeCard = () => {
  return (
    <div className="w-[calc((100%-(20px*0))/1)] p-[15px] sm:w-[calc((100%-(20px*1))/2)] md:gap-[34px] xl:w-[calc((100%-(20px*3))/4)] xl:gap-10">
      <Link href="/">
        <h3 className="line-clamp-5 font-nunito text-h4 font-bold text-bltext transition-all duration-300 hover:text-blue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
      </Link>
      <p className="mb-4 mt-3 line-clamp-3 font-bevietnam text-small sm:my-5">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium
      </p>
      <Label>autism</Label>
    </div>
  );
};

export default KnowledgeCard;
