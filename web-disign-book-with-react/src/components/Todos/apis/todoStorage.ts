import Todo from "../models.ts/Todo";

const STORAGE_KEY = "todos-1.0";
const todoStorage = {
  uid: 0,
  fetch: () => {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const indexedTodos = todos.map((todo: Todo, index: number) => {
      todo.id = index;
      todoStorage.uid = indexedTodos.length;
      return todo;
    });
    return indexedTodos;
  },
  save: (todos: Todo[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

export default todoStorage;
