import ProgramsCard from "@/components/common/ProgramsCard";
import ListLayout from "@/components/layout/ListLayout";
import React from "react";

const OurProgram = () => {
  return (
    <div className="container pb-[160px]">
      <ListLayout title="Ours Programs">
        <div className="flex items-center justify-center gap-5">
          <ProgramsCard />
          <ProgramsCard />
          <ProgramsCard />
          <ProgramsCard />
        </div>
      </ListLayout>
    </div>
  );
};

export default OurProgram;
