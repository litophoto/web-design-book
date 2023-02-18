import { ReactNode } from "react";
import styled from "styled-components";

type H1HeaderType = {
  children: ReactNode;
};

const H1Header = ({ children }: H1HeaderType) => {
  return <H1HeaderStyle>{children}</H1HeaderStyle>;
};

export default H1Header;

const H1HeaderStyle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem;
`;
