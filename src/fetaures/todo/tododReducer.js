import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: ["hello"],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
      //   state.push(action.payload);
    },
    deleteTodo: (state) => {
      return [...state].splice(state.length - 1);
      //   state.pop();
    },
    deleteTodoSelectedTodo: (state, { payload }) => {
      return state.filter((el) => el !== payload);
      //   state.splice(
      //     state.findIndex((el) => el === action.payload),
      //     1
      //   );
    },
    clearTodo: (state) => {
      console.log("working");
      return [];
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  deleteTodoSelectedTodo,
  clearTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
