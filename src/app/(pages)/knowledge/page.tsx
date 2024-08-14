import KnowledgeCard from "@/components/common/KnowledgeCard";
import { useKnowledges } from "@/hooks/uesKnowledges";
import React, { useMemo, useState } from "react";

const KnowledgePage = () => {
  return (
    <div className="container">
      <div className="flex w-full flex-wrap items-start justify-center gap-5 gap-y-[34px]">
        <KnowledgeCard />
        <KnowledgeCard />
        <KnowledgeCard />
      </div>
    </div>
  );
};

export default KnowledgePage;
