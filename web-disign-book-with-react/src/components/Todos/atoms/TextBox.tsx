import { useState } from "react";
import styled from "styled-components";

import Todo from "../models.ts/Todo";

type TextBoxType = {
  onSubmit: (text: string) => void;
};

const TextBox = ({ onSubmit }: TextBoxType) => {
  const [text, setText] = useState("");

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || event.key !== "Enter") return;
    await onSubmit(text);
    await setText("");
  };

  return (
    <NewTodoTextStyle
      type="text"
      value={text}
      onChange={(e) => handleChangeText(e)}
      onKeyDown={(event) => handleSubmit(event)}
    />
  );
};

const NewTodoTextStyle = styled.input.attrs({
  type: "text",
})`
  width: 100%;
  background: ${(p) => p.theme.color.background};
  outline: none;
  padding: 0 10px;
  border: 0.1em solid ${(p) => p.theme.color.secondary};
  box-sizing: border-box;

  :focus {
    border: 0.15em solid ${(p) => p.theme.color.dark};
  }
`;

export default TextBox;
