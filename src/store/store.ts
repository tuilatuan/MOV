import { configureStore } from "@reduxjs/toolkit";

import menuMobileReducer from "@/store/reducer/menuSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      //su dung các reducer o day
      menu: menuMobileReducer,
    },
  });
};

// Định nghĩa kiểu AppStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
