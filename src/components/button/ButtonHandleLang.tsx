"use client";

import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { setLanguage } from "@/store/reducer/languageSlice";

const ButtonHandleLang = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.current);

  const handleLanguageChange = (lang: "en" | "vi") => {
    dispatch(setLanguage(lang));
  };

  console.log(" currentLanguage:>> ", currentLanguage);

  return (
    <div className="langgr">
      <Button
        className={`rounded-30 ${currentLanguage === "en" ? "border border-solid text-blue" : "text-bltext hover:text-bltext"}`}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </Button>
      <Button
        className={`rounded-30 ${currentLanguage === "vi" ? "border border-solid text-blue" : "text-bltext hover:text-bltext"} `}
        onClick={() => handleLanguageChange("vi")}
      >
        VN
      </Button>
    </div>
  );
};

export default ButtonHandleLang;
