"use client";
import KnowledgesList from "@/ui/pages/knowledges/knowledgesList";
import Tabs from "@/ui/pages/knowledges/Tabs";
import { useState } from "react";

const KnowledgePage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

  return (
    <div className="container mb-[35px] md:mb-0">
      <h2 className="heading abc mx-auto mb-[27px] w-max text-h2">Kiến thức</h2>
      <Tabs onSelectCategory={setSelectedCategoryId} />

      <KnowledgesList selectedCategoryId={selectedCategoryId} />
    </div>
  );
};

export default KnowledgePage;
