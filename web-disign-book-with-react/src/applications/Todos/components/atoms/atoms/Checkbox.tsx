import { useState } from "react";
import styled from "styled-components";
import { BsCheck2 } from "react-icons/bs";

type CheckboxType = {
  checked?: boolean;
  onClick: (checked: boolean) => void; // TODO: temporary
};

const Checkbox = ({ checked = false, onClick }: CheckboxType) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    onClick(!isChecked);
    setIsChecked(!isChecked);
  };
  return (
    <>
      <CheckboxStyle checked={isChecked} onChange={handleToggle} />
      {isChecked ? (
        <CheckedLabelStyle onClick={handleToggle}>
          <BsCheck2 />
        </CheckedLabelStyle>
      ) : (
        <CheckboxLabelStyle onClick={handleToggle}></CheckboxLabelStyle>
      )}
    </>
  );
};

export default Checkbox;

const CheckboxStyle = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
`;

const CheckboxLabelStyle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid ${(p) => p.theme.color.secondary};
  border-radius: 50%;
`;

const CheckedLabelStyle = styled(CheckboxLabelStyle)`
  border: 1px solid ${(p) => p.theme.color.success};
  color: ${(p) => p.theme.color.success};
`;
