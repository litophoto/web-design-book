import { ReactNode } from "react";
import styled from "styled-components";

const TabStyle = styled.span`
  display: inline-block;
  vertical-align: middle; // vertical-align: baseline(default) become crashed style.
`;

type TabType = {
  children: ReactNode;
};

const Tab = ({ children }: TabType) => {
  return <TabStyle>{children}</TabStyle>;
};

export default Tab;
