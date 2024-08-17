// src/services/movieApi.ts

import { CategoryKnowledges, Knowledge } from "@/types/definitions";
import { get } from "@/utils/axiosInstansce";

export const getKnowledges = () => get<Knowledge[]>("/knowledges");
export const getCateKnowledges = () =>
  get<CategoryKnowledges[]>(`/knowledge-categories`);
