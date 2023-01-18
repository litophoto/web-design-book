import FlownButton from "../components/FlownButton";
import FlownSimpleButton from "../components/FlownSimpleButton";
import LineButton from "../components/LineButton";
import DoubleLineButton from "../components/DoubleLineButton";
import OutBorderButton from "../components/OutBorderButton";
import ExpandSearchBox from "../components/ExpandSearchBox";

const ComponentsCollector = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Components</h1>
      <FlownButton></FlownButton>
      <FlownSimpleButton></FlownSimpleButton>
      <LineButton></LineButton>
      <DoubleLineButton></DoubleLineButton>
      <OutBorderButton></OutBorderButton>
      <ExpandSearchBox></ExpandSearchBox>
    </div>
  );
};

export default ComponentsCollector;
