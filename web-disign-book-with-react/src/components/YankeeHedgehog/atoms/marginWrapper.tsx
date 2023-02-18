import { ReactNode } from "react";
import styled from "styled-components";

type MarginWrapperStyleType = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  x?: string;
  y?: string;
};

const MarginWrapperStyle = styled.div<MarginWrapperStyleType>`
  margin: 0; // default margin
  margin: ${(p) => p.top} ${(p) => p.right} ${(p) => p.bottom} ${(p) => p.left};
  margin: ${(p) => p.y} ${(p) => p.x};
`;

type MarginWrapperType = {
  children: ReactNode;
  option?: MarginWrapperStyleType;
};

const MarginWrapper = ({ children, option }: MarginWrapperType) => {
  return <MarginWrapperStyle {...option}>{children}</MarginWrapperStyle>;
};
export default MarginWrapper;
