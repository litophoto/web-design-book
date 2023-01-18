import styled from "styled-components";

type TypeText = {
  text: string;
};

type TypeLetter = {
  letter: string;
  index: number;
};

const StyledArchText = styled.p`
  position: relative;
  width: 300px; /* 直径 */
  height: 300px; /* 直径 */
  font-size: 30px;
  text-align: center;
  margin: 0;
  transform: rotate(-80deg); /* 円の回転 */

  background-color: #afa;
`;

const StyledArchLetter = styled.span<{ rotateRate: number }>`
  position: absolute;
  top: 0;
  left: calc(50% - 15px); /* 中心点、、文字サイズ分ずらす */
  display: inline-block;
  width: 30px; /* 文字サイズより小さくしない */
  height: 150px; /* 半径 */
  transform-origin: center bottom; /* 回転の基準点 */
  // border: solid 1px;
  transform: rotate(${(props) => props.rotateRate}deg);
`;

const ArchLetter = ({ letter, index }: TypeLetter) => {
  return <StyledArchLetter rotateRate={index*12}>{letter}</StyledArchLetter>;
};

const ArchText = ({ text }: TypeText) => {
  const arrayText = Array.from(text);

  return (
    <StyledArchText>
      {arrayText.map((letter, index) => {
        return <ArchLetter key={index} letter={letter} index={index} />;
      })}
    </StyledArchText>
  );
};

export default ArchText;
