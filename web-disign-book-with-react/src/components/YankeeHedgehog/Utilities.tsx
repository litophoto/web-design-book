import styled from "styled-components";

type TypeColorBox = {
  m?: string;
  p?: string;
};

const ColorBox = styled.div<TypeColorBox>`
  background: #afa;
  margin: ${(p) => p.m || "0px"};
  padding: ${(p) => p.p || "0px"};
  border-radius: 5px;
`;

const SquareBox = styled.div`
  background: #bb9a;
  aspect-ratio: 1 / 1;
  border-radius: 5px;
`;

type TypeRectangleBox = {
  ratio?: 1 | number;
};

const RectangleBox = styled.div<TypeRectangleBox>`
  background: #bb9a;
  aspect-ratio: ${(p) => p.ratio};
  border-radius: 5px;
`;

export { ColorBox, SquareBox, RectangleBox };
