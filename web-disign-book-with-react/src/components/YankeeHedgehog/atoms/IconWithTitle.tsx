import { ReactNode } from "react";
import styled from "styled-components";
import Icon from "./Icon";

const IconWithTitleStyle = styled(Icon)``;

type IconWithTitleType = {
  children: ReactNode;
};
const IconWithTitle = ({ children }: IconWithTitleType) => {
  return <IconWithTitleStyle>{children}</IconWithTitleStyle>;
};

export { IconWithTitleStyle };
export default IconWithTitle;
