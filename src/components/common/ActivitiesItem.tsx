import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button/Button";

const ActivitiesItem = () => {
  return (
    <div className="902:grid-cols-2 grid grid-cols-1">
      <div className="relative aspect-[680/700] overflow-hidden rounded-50">
        <Link href="/">
          <Image
            alt="activities-img"
            width={680}
            height={700}
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Link>
      </div>

      <div className="content 902:py-3 flex h-full flex-col justify-center overflow-hidden rounded-50 bg-blue bg-opacity-20 px-10 py-4 hover:bg-opacity-40 lg:px-[60px] xl:px-[90px] 2xl:px-[124px]">
        <h2 className="heading text-[20px] sm:text-h2">PAC 2 Saigon, 28/2</h2>

        <p className="my-3 line-clamp-2 font-bevietnam text-[12px] font-normal leading-[150%] tracking-[0%] sm:my-10 sm:text-[20px]">
          Inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
        <Button className="w-max rounded-30 bg-blue text-white hover:bg-green">
          Xem thêm
        </Button>
      </div>
    </div>
  );
};

export default ActivitiesItem;
