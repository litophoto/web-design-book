import { useState } from "react";
import Todo from "../models.ts/Todo";

import CheckBox from "../atoms/CheckBox";
import EnterableLabel from "../atoms/EnterableLabel";
import DeleteButton from "../atoms/DeleteButton";

type TodoItemType = {
  todo: Todo;
  onSubmit: (todo: Todo) => void;
};

const todo = ({ todo, onSubmit }: TodoItemType) => {
  // const [todo, setTodo] = useState(todo);
  const handleText = (text: string) => {
    const newTodo = {
      id: todo.id,
      title: text,
      done: todo.done,
    };
    onSubmit(newTodo);
  };

  return (
    <div style={{ display: "flex" }}>
      <CheckBox />
      <EnterableLabel text={todo.title} onSubmit={(text) => handleText(text)} />
      <DeleteButton />
    </div>
  );
};

export default todo;
