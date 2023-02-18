import styled from "styled-components";
import { FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Navigator = styled.div`
  // background: ${(p) => p.theme.color.white};
  padding: 10px 0;
`;

const NavigatorMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavigatorItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // color: ${(p) => p.theme.color.secondary};
  color: white;
  // background: ${(p) => p.theme.color.primary};
  width: 75px;
  height: 75px;
  border-radius: 50%;
  position: relative;
  z-index: 1;

  + div {
    position: absolute;
  }
`;

const Icon = styled.span`
  font-size: 1.4rem;
`;

const Title = styled.span`
  font-size: 0.8rem;
`;

const Indicator = styled.div`
  background: ${(p) => p.theme.color.secondary};
  width: 75px;
  height: 75px;
  border-radius: 50%;
  position: absolute;
`;

const MagicMenuIndicatorRow = () => {
  return (
    <Navigator>
      <NavigatorMenu>
        {/* 1st item */}
        <NavigatorItem>
          
          <Icon>
            <FaHome />
          </Icon>
          <Title>HOME</Title>
        </NavigatorItem>

        {/* 2nd item */}
        <NavigatorItem>
          <Icon>
            <FaUser />
          </Icon>
          <Title>USER</Title>
        </NavigatorItem>

        {/* 3rd item */}
        <NavigatorItem>
          <Icon>
            <MdMessage />
          </Icon>
          <Title>MESSAGE</Title>
        </NavigatorItem>
        <Indicator></Indicator>

        {/* end */}
      </NavigatorMenu>
    </Navigator>
  );
};

export default MagicMenuIndicatorRow;
