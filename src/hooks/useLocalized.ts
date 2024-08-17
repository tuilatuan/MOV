// src/hooks/useLocalized.ts
import { LocalizedString } from "@/types/definitions";
import { useSelector } from "react-redux";

export const useLocalized = () => {
  const language = useSelector((state) => state.language.current);

  const getLocalizedValue = (localizedString: LocalizedString) => {
    return localizedString[language];
  };

  return { getLocalizedValue };
};
