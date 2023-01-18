import { ReactNode } from "react";
import styled from "styled-components";

const StyledZoomin = styled.div<{zoomScale: number}>`
  transition: 1s all;

  :hover {
    transform: scale(${props => props.zoomScale});
  }
`;

type TypeZoomin = {
  children: ReactNode;
  zoomRate?: number;
};
const Zoomin = ({ children, zoomRate=1.1 }: TypeZoomin) => {
  return <StyledZoomin zoomScale={zoomRate}>{children}</StyledZoomin>;
};

export default Zoomin;
