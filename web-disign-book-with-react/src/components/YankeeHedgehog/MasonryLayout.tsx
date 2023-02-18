import styled from "styled-components";

const ColumnCount = styled.div<{ count: number }>`
  column-count: ${(p) => p.count};
`;

const C3 = styled.div`
  break-inside: avoid;
`;

import { RectangleBox } from "./Utilities";
const MasonryLayoutExample = () => {
  return (
    <ColumnCount count={3}>
      <C3><RectangleBox ratio={1}>1</RectangleBox></C3>
      <C3><RectangleBox ratio={2}>2</RectangleBox></C3>
      <C3><RectangleBox ratio={3}>3</RectangleBox></C3>
      <C3><RectangleBox ratio={4}>4</RectangleBox></C3>
      <C3><RectangleBox ratio={2/3}>5</RectangleBox></C3>
      <C3><RectangleBox ratio={3/2}>6</RectangleBox></C3>
      <C3><RectangleBox ratio={1/2}>7</RectangleBox></C3>
      <C3><RectangleBox ratio={7/3}>8</RectangleBox></C3>
      <C3><RectangleBox ratio={1/2}>9</RectangleBox></C3>
      <C3><RectangleBox ratio={2}>10</RectangleBox></C3>
      <C3><RectangleBox ratio={1}>11</RectangleBox></C3>
    </ColumnCount>
  );
};

export { MasonryLayoutExample }