import { createSlice } from "@reduxjs/toolkit";

const initialTodos = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    showTodo: (state) => state,

    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todo = state.todo.filter((todo) => todo.id !== id);
    },
    completeTodo: (state, action) => {
      const id = action.payload;
      const filterTodo = state.todo.filter((todo) => todo.id === id);
      if (filterTodo[0].complete === false) {
        filterTodo[0].complete = true;
      } else {
        filterTodo[0].complete = false;
      }
    },
  },
});

export const { showTodo, addTodo, deleteTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
