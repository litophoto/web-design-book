import { ReactNode, CSSProperties } from "react";
import styled from "styled-components";

const IconButton = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return <IconButtonStyle style={style}>{children}</IconButtonStyle>;
};

export default IconButton;

const IconButtonStyle = styled.button`
  width: 40px;
  height: 40px;
  background-color: inherit;
  border: 1.5px solid ${(p) => p.theme.color.dark};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  color: ${(p) => p.theme.color.dark};

  :hover {
    background-color: ${(p) => p.theme.color.secondary};
    color: ${(p) => p.theme.color.primary};
  }
`;
