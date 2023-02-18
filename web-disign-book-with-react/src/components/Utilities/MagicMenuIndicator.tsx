import { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { MdHelp, MdMessage } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import styled from "styled-components";

const Navigation = styled.div`
  position: relative;
  width: 70px;
  height: 350px;
  background: #fff;
  border-radius: 35px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
`;

const NavigationList = styled.ul`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavigationListItem = styled.li`
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;

  // hover時の動作をこちらに記述 正直分かりにくい(TODO: fixより良い修正を)
  :hover a .title {
    opacity: 1;
    visibility: visible;
    transform: translate(-25px) translateY(-50%);
  }

  &[data-value="true"] a {
    color: #fff;
  }

  &[data-value="true"] a .title {
    // color: #333;

    .indicator {
      transform: translateY(70px);
    }
  }
`;

const NavigationListItemLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  color: #333;
  font-weight: 500;

  :focus {
    display: block;
    line-height: 75px;
  }
`;

const Icon = styled.span`
  position: relative;
  display: block;
  line-height: 75px;
  text-align: center;
  font-size: 24px;
`;

const Title = styled.span`
  position: absolute;
  top: 50%;
  left: 110px;
  transform: translateY(-50%);
  padding: 5px 10px;
  border-radius: 6px;
  transition: 0.5s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  background: ${(p) => p.theme.color.secondary};

  :hover {
    opacity: 1;
    visibility: visible;
    transform: translate(-25px) translateY(-50%);
  }

  :before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background: ${(p) => p.theme.color.secondary};
    left: -8px;
    top: 46%;
    transition: 0.5s;
    transform: rotate(45deg) translateY(-50%);
    border-radius: 2px;
  }
`;

const Indicator = styled.div`
  position: absolute;
  left: 0;
  width: 70px;
  height: 70px;
  transition: 0.5s;

  :before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background: #333;
    border-radius: 50%;
    transition: 0.5s;
  }
  &[data-value="home"]:before {
    transform: translate(-50%, calc(-50%));
  }
  &[data-value="profile"]:before {
    transform: translate(-50%, calc(-50% + 70px));
  }

  &[data-value="message"]:before {
    transform: translate(-50%, calc(-50% + 70px * 2));
  }
  &[data-value="help"]:before {
    transform: translate(-50%, calc(-50% + 70px * 3));
  }
  &[data-value="settings"]:before {
    transform: translate(-50%, calc(-50% + 70px * 4));
  }
`;

const MagicMenuIndicator = () => {
  const [active, setActive] = useState("home");
  const onClickActive = (value: string) => {
    setActive(value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navigation>
        <NavigationList>
          <NavigationListItem
            data-value={active === "home"}
            onClick={() => onClickActive("home")}
          >
            <NavigationListItemLink href="" onClick={(e) => e.preventDefault()}>
              <Icon>
                <FaHome />
              </Icon>
              <Title className="title">Home</Title>
            </NavigationListItemLink>
          </NavigationListItem>
          <NavigationListItem
            data-value={active === "profile"}
            onClick={() => onClickActive("profile")}
          >
            <NavigationListItemLink href="" onClick={(e) => e.preventDefault()}>
              <Icon>
                <FaUser />
              </Icon>
              <Title className="title">Profile</Title>
            </NavigationListItemLink>
          </NavigationListItem>
          <NavigationListItem
            data-value={active === "message"}
            onClick={() => onClickActive("message")}
          >
            <NavigationListItemLink href="" onClick={(e) => e.preventDefault()}>
              <Icon>
                <MdMessage />
              </Icon>
              <Title className="title">Message</Title>
            </NavigationListItemLink>
          </NavigationListItem>
          <NavigationListItem
            data-value={active === "help"}
            onClick={() => onClickActive("help")}
          >
            <NavigationListItemLink href="" onClick={(e) => e.preventDefault()}>
              <Icon>
                <MdHelp />
              </Icon>
              <Title className="title">Help</Title>
            </NavigationListItemLink>
          </NavigationListItem>
          <NavigationListItem
            data-value={active === "settings"}
            onClick={() => onClickActive("settings")}
          >
            <NavigationListItemLink href="" onClick={(e) => e.preventDefault()}>
              <Icon>
                <BsGearFill />
              </Icon>
              <Title className="title">Settings</Title>
            </NavigationListItemLink>
          </NavigationListItem>

          <Indicator className="indicator" data-value={active}></Indicator>
        </NavigationList>
      </Navigation>
    </div>
  );
};

export default MagicMenuIndicator;
