import Image from "../atoms/Image";
import GridContent from "../atoms/GridContent";

import sunsetImage from "../../../images/sunset.jpg";

const GridContents = () => {
  const Images = [
    "https://picsum.photos/150/100",
    "https://picsum.photos/150/101",
    "https://picsum.photos/150/102",
    "https://picsum.photos/150/103",
    "https://picsum.photos/150/104",
    "https://picsum.photos/150/105",
    "https://picsum.photos/150/106",
  ];

  return (
    <>
      <GridContent>
        <Image src={sunsetImage} alt="" />
        {Images.map((Img) => {
          return <Image src={Img} alt="" />;
        })}
      </GridContent>
    </>
  );
};

export default GridContents;
