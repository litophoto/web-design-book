import { ReactNode } from "react";

type DisplayMenuType = {
  children: ReactNode;
};

const DisplayMenu = ({ children }: DisplayMenuType) => {
  return <>{children}</>;
};

export default DisplayMenu;
