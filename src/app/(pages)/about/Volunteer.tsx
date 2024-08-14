import Image from "next/image";
import React from "react";

const Volunteer = () => {
  return (
    <div className="container py-[64px] md:py-[100px]">
      <h2 className="heading text-center text-h2">Volunteers & Interns</h2>

      <div className="flex items-center justify-center gap-2 pt-20 512:gap-5 md:gap-10 lg:gap-20 xl:gap-[156px]">
        <div className="relative flex aspect-[150/150] items-center justify-center overflow-hidden">
          <Image
            src="/imgs/logo-foren.svg"
            alt="logo-foren"
            width={150}
            height={150}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative flex aspect-[150/150] items-center justify-center overflow-hidden">
          <Image
            src="/imgs/logo-fulbright-circle.svg"
            alt="logo-fulbirght"
            width={150}
            height={150}
          />
        </div>
        <div className="relative flex aspect-[150/150] items-center justify-center overflow-hidden">
          <Image
            src="/imgs/logo-rmit.svg"
            alt="logo-rmit"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
