import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount: (state, action) => {
      console.log("hroi hai");
      state.count += 1;
    },
    decraseCount: (state, action) => {
      console.log("hori hai");
      state.count -= 1;
    },
    increaseNumber: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const {
  increaseCount,
  decraseCount,
  increaseNumber,
} = countSlice.actions;

// this is for configureStore
export default countSlice.reducer;
