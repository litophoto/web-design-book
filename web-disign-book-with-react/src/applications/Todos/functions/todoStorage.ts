import { Todo } from "../models";

const STORAGE_KEY = "todos-1.0";
const todoStorage = {
  fetch: () => {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return todos;
  },
  save: (todos: Todo[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

export default todoStorage;
