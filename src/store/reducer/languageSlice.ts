// src/redux/languageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Language = "vi" | "en";

interface LanguageState {
  current: Language;
}

const initialState: LanguageState = {
  current: "vi",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.current = action.payload;
      console.log("state.current :>> ", state.current);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
