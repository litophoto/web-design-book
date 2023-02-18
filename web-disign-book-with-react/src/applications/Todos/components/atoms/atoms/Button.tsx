import { ReactNode, CSSProperties } from "react";
import styled from "styled-components";

const Button = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return <ButtonStyle style={style}>{children}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button`
  background-color: inherit;
  border: 1.5px solid ${(p) => p.theme.color.dark};
  border-radius: 5px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  transition: 0.5s;
  color: ${(p) => p.theme.color.dark};

  :hover {
    background-color: ${(p) => p.theme.color.secondary};
    color: ${(p) => p.theme.color.primary};
  }
`;
