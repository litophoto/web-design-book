import { ReactNode } from "react";
import styled from "styled-components";

import { IconWithTitleStyle } from "./IconWithTitle";

const ReverseColorIconStyle = styled(IconWithTitleStyle)`
  background-color: ${(p) => p.theme.color.primary};
  color: ${(p) => p.theme.color.secondary};
  border: solid 2px ${(p) => p.theme.color.secondary};
  box-sizing: border-box;
`;

type ReverseColorIconType = {
  children: ReactNode;
};

const ReverseColorIcon = ({ children }: ReverseColorIconType) => {
  return <ReverseColorIconStyle>{children}</ReverseColorIconStyle>;
};

export default ReverseColorIcon;
