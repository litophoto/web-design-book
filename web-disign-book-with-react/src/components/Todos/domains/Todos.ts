import Todo from "../models.ts/Todo";
import TodosStorage from "../apis/localStorage";

type TodosType = {
  todos: Todo[];
  getTodos(): Todo[];
  setTodos(): void;
  add(todo: Todo): Todo;
  update(todo: Todo): Todo;
  delete(todo: Todo): boolean;
};

class Todos implements TodosType {
  public todos: Todo[] = [];

  public getTodos() {
    return this.todos;
  }

  public setTodos() {
    const storage = new TodosStorage();
    this.todos = storage.get();
  }

  public add(todo: Todo) {
    return todo;
  }

  public update(todo: Todo) {
    return todo;
  }

  public delete(todo: Todo) {
    return true;
  }
}

export default Todos;
