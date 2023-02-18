import { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

type CheckBoxType = {
  isCheckedDefault?: boolean;
};

const CheckBox = ({ isCheckedDefault }: CheckBoxType) => {
  const [isChecked, setIsChecked] = useState(false || isCheckedDefault);

  return (
    <div className="wrapper">
      <CheckBoxStyle
        type="checkbox"
        name=""
        id="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <CheckBoxLabelStyle onClick={() => setIsChecked((prev) => !prev)}>
        {isChecked ? <FaCheckCircle size={25} /> : <div />}
      </CheckBoxLabelStyle>
    </div>
  );
};

const CheckBoxStyle = styled.input.attrs({
  type: "checkbox",
})`
  /* removing default appearnce */
  -webkit-appearance: none;
  appearnace: none;
  position: absolute;
`;

const CheckBoxLabelStyle = styled.span`
  // display: inline-block;はwidthが設定できない
  display: flex;
  width: 30px;
  height: 30px;
  // 中央揃え
  align-items: center;
  justify-content: center;

  // チェックボックスのデザイン
  border-radius: 50%;
  border: 0.15rem solid ${(p) => p.theme.color.secondary};
  cursor: pointer;
`;

export default CheckBox;
