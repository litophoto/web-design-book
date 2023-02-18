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

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 3/2;
`;

const H1Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const PText = styled.p`
  margin: 0 0 10px 0;
`;

export { ColorBox, SquareBox, RectangleBox, Img, H1Title, PText };
