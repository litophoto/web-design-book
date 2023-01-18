import Zoomin from "./Zoomin";
import ArchText from "./ArchText";
import MainTitle from "./MainTitle";

const Index = () => {
  return (
    <>
      <Zoomin>
        <button>Zoomin</button>
      </Zoomin>
      <Zoomin zoomRate={1.5}>
        <button>Zoomin 1.5</button>
      </Zoomin>

      <ArchText text="Example Text"/>

      <MainTitle num="01" text="イラストレーション" />
    </>
  );
};

export default Index;
