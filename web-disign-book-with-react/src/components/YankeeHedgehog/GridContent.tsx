import styled from "styled-components";
import { ColorBox, SquareBox, RectangleBox } from "./Utilities";

type TypeStyledGrid<Gap = "0px" | string> = {
  gap?: Gap;
  xs?: 1 | number;
  sm?: number;
  md?: number;
  xl?: number;
};

const StyledGrid = styled.div<TypeStyledGrid>`
  display: grid;
  gap: ${({ gap }) => gap};
  grid-template-columns: repeat(${(p) => p.xs}, 1fr);
  @media only screen and (min-width: ${(p) => p.theme.breakpoint.sm}) {
    grid-template-columns: repeat(${({ sm }) => sm}, 1fr);
  }
  @media only screen and (min-width: ${(p) => p.theme.breakpoint.md}) {
    grid-template-columns: repeat(${({ md }) => md}, 1fr);
  }
  @media only screen and (min-width: ${(p) => p.theme.breakpoint.xl}) {
    grid-template-columns: repeat(${({ xl }) => xl}, 1fr);
  }
`;

const GridContent = () => {
  return (
    <StyledGrid gap="10px" xs={3} md={6} xl={9}>
      <RectangleBox ratio={1 / 1} />
      <RectangleBox ratio={2 / 1} />
      <RectangleBox ratio={3 / 1} />
      <RectangleBox ratio={4 / 1} />
      <RectangleBox ratio={5 / 1} />
      <RectangleBox ratio={6 / 1} />
      <RectangleBox ratio={1 / 1} />
      <RectangleBox ratio={1 / 2} />
    </StyledGrid>
  );
};

export default GridContent;
export { StyledGrid };
