import styled from "styled-components";

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const StyledImg = styled.img<{ aspectRatio?: number }>`
  width: 100%;
  aspect-ratio: ${(p) => p.aspectRatio || 3 / 2};
  object-fit: cover;
  border-radius: 3px;

  transition: 0.75s;
  :hover {
    opacity: 0.75;
    transform: scale(1.1);
  }
`;

type TypeImage = {
  src: string;
  alt?: string;
  aspectRatio?: number;
};
const Image = ({ src, alt, aspectRatio }: TypeImage) => {
  return (
    <ImageWrapper>
      <StyledImg src={src} alt={alt} aspectRatio={aspectRatio} />
    </ImageWrapper>
  );
};

export default Image;
