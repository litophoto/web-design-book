import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { Todo } from "../../../../models";
import { FlexLayout } from "../../../styles/FlexLayout";
import { Checkbox, Textbox, AppearIconButton, Label } from "../atoms";

type TodoListItemType = {
  initTodo: Todo;
  update: (newTodo: Todo) => void;
  remove: (trashTodo: Todo) => void;
};

const TodoListItem = ({ initTodo, update, remove }: TodoListItemType) => {
  const [todo, setTodo] = useState(initTodo);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheck = (checked: boolean) => {
    const newTodo = {
      id: todo.id,
      title: todo.title,
      done: checked,
    };
    setTodo(newTodo);
    update(newTodo);
  };

  const handleNewTodo = (text: string) => {
    const newTodo = {
      id: todo.id,
      title: text,
      done: todo.done,
    };
    setTodo(newTodo);
    update(newTodo);
    setIsEditing(false);
  };

  const handleRemove = () => {
    remove(todo);
  };

  return (
    <FlexLayout>
      <Checkbox checked={todo.done} onClick={handleCheck} />
      {isEditing ? (
        <Textbox value={todo.title} onKeyEnter={handleNewTodo} />
      ) : (
        <Label muted={todo.done} onDoubleClick={() => setIsEditing(true)}>
          {todo.title}
        </Label>
      )}
      <AppearIconButton onClick={handleRemove}>
        <BsXLg />
      </AppearIconButton>
    </FlexLayout>
  );
};

export default TodoListItem;
