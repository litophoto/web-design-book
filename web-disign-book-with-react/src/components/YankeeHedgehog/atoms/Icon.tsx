import styled from "styled-components";

const Icon = styled.div<{ size?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${(p) => p.size || 75}px;
  height: ${(p) => p.size || 75}px;
  background-color: ${(p) => p.theme.color.secondary};
  margin: 3px;
  border-radius: 30%;
  color: ${(p) => p.theme.color.primary};

  :hover {
    opacity: 0.7;
  }
`;

export default Icon;
