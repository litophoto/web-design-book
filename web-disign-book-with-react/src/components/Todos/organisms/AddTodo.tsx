import styled from "styled-components";

import CheckBox from "../atoms/CheckBox";
import TextBox from "../atoms/TextBox";

const AddTodoStyle = styled.div`
  display: flex;
  flex-align: center;
  justify-content: space-between;
`;

const AddButtonStyle = styled.button`
  width: 75px;
  background-color: ${(p) => p.theme.color.secondary};
  color: ${(p) => p.theme.color.primary};
  border-radius: 0 20% 20% 0;

  border: none;
  cursor: pointer;

  :focus {
    background-color: ${(p) => p.theme.color.dark};
  }
`;

type AddTodoType = {
  onSubmit: (text: string) => void;
};
const AddTodo = ({ onSubmit }: AddTodoType) => {
  // const [];

  return (
    <AddTodoStyle>
      <CheckBox />
      <TextBox onSubmit={(text) => onSubmit(text)} />
      <AddButtonStyle>追加</AddButtonStyle>
    </AddTodoStyle>
  );
};

export default AddTodo;
