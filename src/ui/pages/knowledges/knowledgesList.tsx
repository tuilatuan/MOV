"use client";

import KnowledgeCard from "@/components/common/KnowledgeCard";
import { useApi } from "@/hooks/useApi";
import { useLocalized } from "@/hooks/useLocalized";
import { getKnowledges } from "@/services/knowledgesServieces";
import { Knowledge } from "@/types/definitions";
import React, { useEffect, useState } from "react";

interface KnowledgesListProps {
  selectedCategoryId: string | null;
}

const KnowledgesList = ({ selectedCategoryId }: KnowledgesListProps) => {
  const { data, loading, error, refetch } = useApi<Knowledge[]>(getKnowledges);

  const { getLocalizedValue } = useLocalized();

  const [filteredKnowledges, setFilteredKnowledges] = useState<Knowledge[]>([]);

  useEffect(() => {
    if (data?.data?.knowledges) {
      if (selectedCategoryId) {
        const filtered = data.data.knowledges.filter(
          (item) => item.category.id === selectedCategoryId,
        );
        console.log("filtered :>> ", filtered);
        setFilteredKnowledges(filtered);
      } else {
        setFilteredKnowledges(data.data.knowledges);
      }
    }
  }, [data, selectedCategoryId]);
  //   const filteredKnowledges = data?.data?.knowledges || [];

  return (
    <div className="container">
      <div className="flex w-full flex-wrap items-start justify-center gap-5 gap-y-[34px]">
        {filteredKnowledges &&
          filteredKnowledges?.map((item, index) => {
            return (
              <KnowledgeCard
                name={getLocalizedValue(item.name)}
                metaDesc={getLocalizedValue(item.metaDescription)}
                cate={getLocalizedValue(item.category.name)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default KnowledgesList;
