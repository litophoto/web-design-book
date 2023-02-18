import styled from "styled-components";
// import { StyledGrid } from "./YankeeHedgehog/GridContent";
import Image from "../YankeeHedgehog/atoms/Image";

const Title = styled.p`
  padding: 0;
  color: black;
`;

const ImageWithTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhotoContents = () => {
  return (
    <div style={{ margin: "10px 0px" }}>
      {/* <StyledGrid gap="10px" xs={2}>
        <ImageWithTitle>
          <Image src="https://picsum.photos/150/100" alt="" />
        </ImageWithTitle>
        <Image src="https://picsum.photos/150/101" alt="" />
        <Image src="https://picsum.photos/150/101" alt="" />
        <Image src="https://picsum.photos/150/102" alt="" />
        <Image src="https://picsum.photos/150/103" alt="" />
        <Image src="https://picsum.photos/150/104" alt="" />
        <Image src="https://picsum.photos/150/105" alt="" />
      </StyledGrid> */}
    </div>
  );
};

export default PhotoContents;
