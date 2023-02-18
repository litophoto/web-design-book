import { ReactNode } from "react";
import styled from "styled-components";

const H1 = ({ children }: { children: ReactNode }) => {
  return <H1Style>{children}</H1Style>;
};

export default H1;

const H1Style = styled.h1`
  text-align: center;
  color: ${(p) => p.theme.color.dark};
`;
