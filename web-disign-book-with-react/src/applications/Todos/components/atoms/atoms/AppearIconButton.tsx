import { ReactNode, CSSProperties } from "react";
import styled from "styled-components";

const AppearIconButton = ({
  children,
  style,
  onClick,
}: {
  children: ReactNode;
  style?: CSSProperties;
  onClick: () => void;
}) => {
  return (
    <AppearIconButtonStyle style={style} onClick={onClick}>
      {children}
    </AppearIconButtonStyle>
  );
};

export default AppearIconButton;

const AppearIconButtonStyle = styled.button`
  // appearnce
  width: 40px;
  height: 40px;
  background-color: inherit;
  color: ${(p) => p.theme.color.alert};
  border: none;
  // layout
  display: flex;
  align-items: center;
  justify-content: center;
  // movement
  transition: 0.2s;
  opacity: 0;

  :hover {
    opacity: 1;
  }
`;
