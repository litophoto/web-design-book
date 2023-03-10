import React, { forwardRef, useState } from "react";
import styled from "styled-components";

type TextboxType = {
  value?: string;
  onKeyEnter: (text: string) => void;
  onBlur: () => void;
};

const Textbox = ({ value = "", onKeyEnter, onBlur }: TextboxType) => {
  const [input, setInput] = useState(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const handleKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || event.key !== "Enter") return;
    onKeyEnter(input);
    setInput("");
  };
  return (
    <TextboxStyle
      type="text"
      value={input}
      onChange={handleChange}
      onKeyDown={handleKeyEnter}
      onBlur={onBlur}
    />
  );
};
const WrapperTextbox = forwardRef<
  React.RefObject<HTMLInputElement> | null | undefined,
  TextboxType
>(({ value = "", onKeyEnter }, ref) => {
  const [input, setInput] = useState(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const handleKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || event.key !== "Enter") return;
    onKeyEnter(input);
    setInput("");
  };
  return (
    <TextboxStyle
      type="text"
      value={input}
      onChange={handleChange}
      onKeyDown={handleKeyEnter}
      ref={ref}
    />
  );
});

export default Textbox;
export { WrapperTextbox };

const TextboxStyle = styled.input`
  width: 75%;
  height: 30px;
  font-size: 1rem;
  background-color: ${(p) => p.theme.color.background};
  border: 1px solid ${(p) => p.theme.color.dark};
  border-radius: 3px;
  box-sizing: border-box;
  outline: none;

  :focus {
    border: 1px solid ${(p) => p.theme.color.secondary};
    box-shadow: 0 0 5px 1px ${(p) => p.theme.color.secondary};
  }
`;
