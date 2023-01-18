import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

type TypeCol = {
  // media?: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
};

const getWidthString = (rate: number) => {
  if (!rate) return;
  return `width: ${(rate || 1) * 100}%`;
};

const Col = styled.div<TypeCol>`
  width: ${(p) => (p.xs || 1) * 100}%;
  @media only screen and (min-width: 768px) {
    ${(p) => p.sm && getWidthString(p.sm)};
  }
  @media only screen and (min-width: 992px) {
    ${(p) => p.md && getWidthString(p.md)};
  }
  @media only screen and (min-width: 1200px) {
    ${(p) => p.lg && getWidthString(p.lg)};
  }
`;

type TypeColorBox = {
  m?: string;
  p?: string;
};

const ColorBox = styled.div<TypeColorBox>`
  background: #afa;
  margin: ${(p) => p.m || "0px"};
  padding: ${(p) => p.p || "0px"};
  border-radius: 5px;
`;

const PhotoContent = () => {
  return (
    <Container>
      <Row>
        <Col sm={1 / 2}>
          <ColorBox>This is ColorBox</ColorBox>
        </Col>
        <Col sm={1 / 2}>
          <ColorBox p="50px">
            This is ColorBox with padding: 50px
          </ColorBox>
        </Col>
        <Col sm={1 / 3}>
          <ColorBox p="50px">
            This is ColorBox with padding: 50px
          </ColorBox>
        </Col>
        <Col xs={1 / 3}>
          <ColorBox p="50px">
            This is ColorBox with padding: 50px
          </ColorBox>
        </Col>
        <Col xs={1 / 3}>
          <ColorBox p="50px">
            This is ColorBox with padding: 50px
          </ColorBox>
        </Col>
      </Row>
    </Container>
  );
};

export default PhotoContent;
