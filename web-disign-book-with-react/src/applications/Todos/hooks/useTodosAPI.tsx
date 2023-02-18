import { useState, useEffect } from "react";
import Todo from "../../../components/Todos/models.ts/Todo";
import todoStorage from "../functions/todoStorage";

const useTodosAPI = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const saveTodos = (todos: Todo[]) => {
    setTodos(todos);
    todoStorage.save(todos);
  };

  useEffect(() => {
    setTodos(todoStorage.fetch());
  }, []);

  const add = (title: string) => {
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      done: false,
    };
    const newTodos = [newTodo, ...todos];
    saveTodos(newTodos);
  };
  const update = (newTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) return newTodo;
      return todo;
    });
    saveTodos(newTodos);
  };
  const remove = (trashTodo: Todo) => {
    const newTodos = todos.filter((todo) => {
      return trashTodo.id !== todo.id;
    });
    saveTodos(newTodos);
  };

  return [todos, { add, update, remove }] as const;
};

export default useTodosAPI;
