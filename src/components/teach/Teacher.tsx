import { TTeacherItem } from "@/types/index.s";
import Image from "next/image";

const Teacher = ({ url, image, name, desc, ...rest }: TTeacherItem) => {
  return (
    <div className="mx-auto flex max-w-[680px] items-center gap-[60px]">
      <div className="relative aspect-[210/210] h-full max-w-[210px] flex-shrink-0 flex-grow overflow-hidden rounded-full">
        <Image
          alt="teach-mov"
          width={210}
          height={210}
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div>
        <h3 className="font-nunito text-h3 font-bold uppercase text-bltext">
          Doan Nguyen
        </h3>
        <p className="my-[10px] font-bevietnam text-button font-medium capitalize text-bltext">
          THS.NCS
        </p>
        <p className="font-bevietnam text-body font-normal">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt
        </p>
      </div>
    </div>
  );
};

export default Teacher;
