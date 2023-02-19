import { useRef, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { Todo } from "../../../models";
import { FlexLayout } from "../../../styles/FlexLayout";
import { Checkbox, Textbox, AppearIconButton, Label } from "../atoms";
import { WrapperTextbox } from "../atoms/Textbox";

type TodoListItemType = {
  initTodo: Todo;
  update: (newTodo: Todo) => void;
  remove: (trashTodo: Todo) => void;
};

const TodoListItem = ({ initTodo, update, remove }: TodoListItemType) => {
  const [todo, setTodo] = useState(initTodo);
  const [isEditing, setIsEditing] = useState(false);
  const textRef = useRef<HTMLInputElement | null | undefined>(undefined);

  const handleCheck = (checked: boolean) => {
    const newTodo = {
      id: todo.id,
      title: todo.title,
      done: checked,
    };
    setTodo(newTodo);
    update(newTodo);
  };

  const handleStartEdit = async () => {
    await setIsEditing(true);
    if (textRef.current === null) return;
    await textRef.current.focus();
  };

  const cancelEdit = () => {
    setIsEditing(false);
    textRef.current.blur();
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
        <WrapperTextbox
          value={todo.title}
          onKeyEnter={handleNewTodo}
          onBlur={cancelEdit}
          ref={textRef}
        />
      ) : (
        // <Textbox value={todo.title} onKeyEnter={handleNewTodo} />
        <Label muted={todo.done} onDoubleClick={handleStartEdit}>
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
