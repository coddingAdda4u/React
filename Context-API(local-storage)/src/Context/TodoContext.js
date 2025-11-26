import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: null,
      todo: null,
      completed: true,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = function () {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
