import KnowledgeCard from "@/components/common/KnowledgeCard";
import ListLayout from "@/components/layout/ListLayout";
import React from "react";

const Konwledhubs = () => {
  return (
    <div className="rounded-tl-50 rounded-tr-50 bg-[#DBEAFF]">
      <ListLayout title="Knowledge Hub">
        <div className="flex items-center justify-center">
          <KnowledgeCard />
          <KnowledgeCard />
          <KnowledgeCard />
          <KnowledgeCard />
        </div>
      </ListLayout>
    </div>
  );
};

export default Konwledhubs;
