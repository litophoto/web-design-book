import { ReactNode } from "react";
import styled from "styled-components";

type GridStyleType<Gap = "0px" | string> = {
  gap?: Gap;
  xs?: 1 | number;
  sm?: number;
  md?: number;
  xl?: number;
};

const GridStyle = styled.div<GridStyleType>`
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

type GridContentType = {
  children: ReactNode;
};

const GridContent = ({ children }: GridContentType) => {
  return (
    <GridStyle gap="10px" xs={2} md={3} xl={6}>
      {children}
    </GridStyle>
  );
};

export default GridContent;
