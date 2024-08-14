import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenuMobile: false,
};

export const menuMobileHandle = createSlice({
  name: "menu",
  initialState,
  reducers: {
    handleToggleMenuMobile: (state) => {
      state.showMenuMobile = !state.showMenuMobile;
    },
  },
});

const { actions, reducer: menuMobileReducer } = menuMobileHandle;

export const { handleToggleMenuMobile } = actions;
export default menuMobileReducer;
