import itemReducer from "./slices/itemSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    item: itemReducer,
  },
});
