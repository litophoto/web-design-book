import Todo from "../models.ts/Todo";
class Todos {
  private apiUrl: string;
  public todos: Todo[] = [];
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
    this.getTodos(apiUrl);
  }

  private getTodos(apiUrl: string): Todo[] {
    return [];
  }
  public add(todo: Todo): Todo {
    // TODO: addの処理
    return todo;
  }

  public update(todo: Todo): Todo {
    // TODO: updateの処理
    return todo;
  }

  public delete(todo: Todo): boolean {
    // TODO: deleteの処理
    return true;
  }
}

export default Todos;
