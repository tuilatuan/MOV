import { useKnowledges } from "@/hooks/uesKnowledges";

export async function fecthKnowledges() {
  try {
    const { data, error, isLoading } = useKnowledges();

    return {
      data,
      loading: isLoading,
      error,
    };
  } catch (error) {
    throw new Error("Failed to knowledges data.");
  }
}
