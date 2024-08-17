"use client";
import { useApi } from "@/hooks/useApi";
import { useLocalized } from "@/hooks/useLocalized";
import {
  getCateKnowledges,
  getKnowledges,
} from "@/services/knowledgesServieces";
import { CategoryKnowledges, Knowledge } from "@/types/definitions";
import React, { useState, useEffect } from "react";

interface TabsProps {
  onSelectCategory: (categoryId: string | null) => void;
}

const Tabs = ({ onSelectCategory }: TabsProps) => {
  const { data, loading, error } =
    useApi<CategoryKnowledges[]>(getCateKnowledges);
  const {
    data: knowledgesData,
    loading: knowledgesLoading,
    error: knowledgesError,
  } = useApi<Knowledge[]>(getKnowledges);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const [categories, setCategories] = useState<CategoryKnowledges[]>([]);
  const [knowledgeCounts, setKnowledgeCounts] = useState<{
    [key: string]: number;
  }>({});

  const { getLocalizedValue } = useLocalized();

  useEffect(() => {
    if (data?.data && knowledgesData?.data?.knowledges) {
      setCategories(data.data.knowledges);

      // Đếm số lượng bài viết cho mỗi category
      const counts = data.data.knowledges.reduce(
        (acc, category) => {
          acc[category.id] = knowledgesData.data.knowledges.filter(
            (knowledge) => knowledge.category.id === category.id,
          ).length;
          return acc;
        },
        {} as { [key: string]: number },
      );
      setKnowledgeCounts(counts);

      if (data.data.knowledges.length > 0) {
        setSelectedCategoryId(data.data.knowledges[0].id);

        onSelectCategory(data.data.knowledges[0].id);
      }
    }
  }, [data, knowledgesData, onSelectCategory]);

  const handleTabClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    onSelectCategory(categoryId);
  };

  return (
    <div>
      <div className="scrollbar-none mx-[calc(15px*-1)] mb-[27px] flex flex-nowrap justify-start gap-2 overflow-x-scroll md:mx-auto md:flex-wrap md:justify-center md:gap-5 md:overflow-x-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`heading trans300 box-border inline-flex cursor-pointer whitespace-nowrap px-[10px] text-h3 normal-case ${
              selectedCategoryId === category.id ? "" : "opacity-30"
            } hover:opacity-100`}
            onClick={() => handleTabClick(category.id)}
          >
            {getLocalizedValue(category.name)}
            <sup className="align-super text-[60%] leading-[2.5]">
              ({knowledgeCounts[category.id] || 0})
            </sup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
