import { ReactNode } from "react";
import styled from "styled-components";

const Label = ({
  children,
  muted = false,
  onClick,
  onDoubleClick,
}: {
  children: ReactNode;
  muted?: boolean;
  onClick?: () => void;
  onDoubleClick?: () => void;
}) => {
  return (
    <LabelStyle muted={muted} onClick={onClick} onDoubleClick={onDoubleClick}>
      {children}
    </LabelStyle>
  );
};

export default Label;

const LabelStyle = styled.label<{ muted: boolean }>`
  width: 75%;
  // HACK: 本来ならカラーコードをBootstrap風に導入すべき
  color: ${(p) => (p.muted ? p.theme.color.muted : p.theme.color.dark)};
  text-decoration: ${(p) => (p.muted ? "line-through" : "none")};
  font-size: 1rem;
`;
