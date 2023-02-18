import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaApple, FaHome, FaStamp } from "react-icons/fa";
import { GiHedgehog } from "react-icons/gi";
import { Link } from "react-router-dom";

import TabGroup from "../atoms/TabGroup";
import Tab from "../atoms/Tab";
import ReverseColorIcon from "../atoms/ReverseColorIcon";
import Icon from "../atoms/Icon";
import IconWithTitle from "../atoms/IconWithTitle";
import IconTitle from "../atoms/IconTitle";

const Tabs = () => {
  return (
    <TabGroup>
      <Tab>
        <ReverseColorIcon>
          <FaHome size={32} />
          <IconTitle>Home</IconTitle>
        </ReverseColorIcon>
      </Tab>
      <Tab>
        <IconWithTitle>
          <MdPhotoSizeSelectActual size={32} />
          <IconTitle>Photo</IconTitle>
        </IconWithTitle>
      </Tab>
      <Tab>
        <IconWithTitle>
          <GiHedgehog size={32} />
          <IconTitle>Mon's</IconTitle>
        </IconWithTitle>
      </Tab>
      <Tab>
        <Icon>
          <Link to="Application/Todos">
            <IconWithTitle>
              <FaApple size={32} />
              <IconTitle>App</IconTitle>
            </IconWithTitle>
          </Link>
        </Icon>
      </Tab>
      <Tab>
        <Icon>
          <IconWithTitle>
            <FaStamp size={32} />
            <IconTitle>LINE</IconTitle>
          </IconWithTitle>
        </Icon>
      </Tab>
      <Tab>
        <Icon>
          <IconWithTitle>
            <MdPhotoSizeSelectActual size={32} />
            <IconTitle>Photo</IconTitle>
          </IconWithTitle>
        </Icon>
      </Tab>
      <Tab>
        <Icon>
          <IconWithTitle>
            <MdPhotoSizeSelectActual size={32} />
            <IconTitle>Photo</IconTitle>
          </IconWithTitle>
        </Icon>
      </Tab>
    </TabGroup>
  );
};

export default Tabs;
