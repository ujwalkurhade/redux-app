import { configureStore } from "@reduxjs/toolkit";
import tododReducer from "../fetaures/todo/tododReducer";

export const store = configureStore({
  reducer: {
    todo: tododReducer,
  },
});
