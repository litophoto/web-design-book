import { ReactNode } from "react";
import styled from "styled-components";

const IconTitleStyle = styled.p`
  margin: 0;
  margin-top: 2px;
  font-size: 0.9rem;
`;

type IconTitleType = {
  children: ReactNode;
};

const IconTitle = ({ children }: IconTitleType) => {
  return <IconTitleStyle>{children}</IconTitleStyle>;
};

export default IconTitle;
