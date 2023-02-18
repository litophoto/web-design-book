import FlownButton from "../components/Utilities/FlownButton";
import FlownSimpleButton from "../components/Utilities/FlownSimpleButton";
import LineButton from "../components/Utilities/LineButton";
import DoubleLineButton from "../components/Utilities/DoubleLineButton";
import OutBorderButton from "../components/Utilities/OutBorderButton";
import ExpandSearchBox from "../components/Utilities/ExpandSearchBox";

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
