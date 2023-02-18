import { ReactNode } from "react";
import styled from "styled-components";

const TabGroupStyle = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding: 3px;
  position: sticky;
  top: 0px;

  text-align: center;
`;

type TabGroupType = {
  children: ReactNode;
};

const TabGroup = ({ children }: TabGroupType) => {
  return <TabGroupStyle>{children}</TabGroupStyle>;
};

export default TabGroup;
