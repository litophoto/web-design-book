import { useState } from "react";
import Todo from "../models.ts/Todo";
import todoStorage from "../apis/todoStorage";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const add = (title: string) => {
    const newTodo = {
      id: todoStorage.uid++,
      title: title,
      done: false,
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    todoStorage.save(newTodos);
  };

  const update = (todo: Todo) => {
    const newTodos = todos.map((oldTodo) => {
      if (oldTodo.id === todo.id) return todo;
      return oldTodo;
    });
    setTodos(newTodos);
    todoStorage.save(newTodos);
  };

  const remove = (todo: Todo) => {
    const newTodos = todos.filter((oldTodo) => {
      return oldTodo.id !== todo.id;
    });
    setTodos(newTodos);
    todoStorage.save(newTodos);
  };

  return [todos, { add, update, remove }] as const;
};

export default useTodos;
