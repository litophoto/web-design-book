import styled from "styled-components";
import { MdDelete } from "react-icons/md";

import Todo from "../models.ts/Todo";

type DeleteButtonType = {
  remove: (todo: Todo) => void;
};

const DeleteButton = ({ remove }: DeleteButtonType) => {
  return (
    <DeleteButtonStyle onClick={remove}>
      <MdDelete size={25} />
    </DeleteButtonStyle>
  );
};

const DeleteButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  outline: none;
  border: none;
  background-color: inherit;
  transition: 0.5s;

  :hover {
    opacity: 1;
  }
`;

export default DeleteButton;
