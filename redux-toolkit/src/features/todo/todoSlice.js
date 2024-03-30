import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "Todo Web App",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    removeAll: (state, action) => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeTodo, removeAll } = todoSlice.actions;
export default todoSlice.reducer;
