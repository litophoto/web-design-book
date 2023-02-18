import { ReactNode } from "react";

type TodoListType = {
  children: ReactNode;
};

const TodoList = ({ children }: TodoListType) => {
  return <>{children}</>;
};

export default TodoList;
