import React from "react";
import Button from "../button/Button";

const ProgramsCard = () => {
  return (
    <div className="trans300 after:unappear hover:after:appear group relative z-50 w-full overflow-hidden rounded-50 bg-cover bg-no-repeat p-10 pb-[32px] after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:scale-110 after:bg-programscard after:bg-cover after:object-cover hover:after:scale-100 512:w-[calc(50%-10px)] 512:pt-10 1140:w-[calc((100%-(20px*3))/4)]">
      <h3 className="heading line-clamp-2 text-h4">
        Advance Professional Development
      </h3>
      <p className="mb-[16px] mt-[30px] line-clamp-3 text-small 1140:mb-[134px] 1140:mt-[26px]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium
      </p>
      <Button className="rounded-30 bg-blue text-white hover:bg-green group-hover:visible group-hover:opacity-100 512:invisible 512:opacity-0">
        Xem thêm
      </Button>
    </div>
  );
};

export default ProgramsCard;
