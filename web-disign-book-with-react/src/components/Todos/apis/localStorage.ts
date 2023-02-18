import Todo from "../models.ts/Todo";

const STORAGE_KEY = "todos-key-001122";

class TodosStorage {
  public get(): Todo[] {
    const jsonTodos = localStorage.getItem(STORAGE_KEY);
    if (jsonTodos === null) return [];
    const jsTodos = JSON.parse(jsonTodos);
    return jsTodos;
  }

  public set(todos: Todo[]): void {
    const jsonTodos = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, jsonTodos);
  }
}

export default TodosStorage;
