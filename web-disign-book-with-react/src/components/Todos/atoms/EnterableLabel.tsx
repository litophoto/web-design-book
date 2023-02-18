import React, { useState, useRef } from "react";
import styled from "styled-components";

type EnterableLabelType = {
  text: string;
  onSubmit: (text: string) => void;
};

const EnterableLabel = (props: EnterableLabelType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(props.text);
  const inputElement = useRef<HTMLInputElement | null>(null);

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || event.key !== "Enter") return;
    setIsEditing(false);
    // setText("");
  };

  const handleStartEdit = async () => {
    await setIsEditing(true);
    if (inputElement.current === null) return;
    await inputElement.current.focus();
    await props.onSubmit(text);
  };
  return (
    <>
      {isEditing ? (
        <InputStyle
          type="text"
          value={text}
          onChange={(event) => handleChangeText(event)}
          onKeyDown={(event) => handleSubmit(event)}
          ref={inputElement}
        />
      ) : (
        <LabelStyle htmlFor="" onDoubleClick={() => handleStartEdit()}>
          {text}
        </LabelStyle>
      )}
    </>
  );
};

export default EnterableLabel;

const InputStyle = styled.input`
  width: 100%;
  background-color: ${(p) => p.theme.color.background};
  outline: none;
  box-sizing: border-box;
  border: 1px solid ${(p) => p.theme.color.secondary};
  box-sizing: border-box;
  font-size: 1.5rem;
  :focus {
    border: 1px solid ${(p) => p.theme.color.dark};
  }
`;

const LabelStyle = styled.label`
  display: block;
  width: 100%;
  font-size: 1.5rem;
  margin: 1px;
  margin-left: 2px; // InputStyleの場所と一致させるために入れている
  border: 1px solid ${(p) => p.theme.color.background};
`;
