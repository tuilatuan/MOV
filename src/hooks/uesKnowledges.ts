import { Knowledge } from "@/types/definitions";
import { useApi } from "./useAPI";

export function useKnowledges() {
  return useApi<Knowledge[]>("/knowledges");
}
