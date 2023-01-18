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
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  gap?: string;
};

const getWidthString = (rate: number, gap?: string) => {
  if (!rate) return;
  return `width: calc(${(rate || 1) * 100}% - ${gap || 0})`;
};

const Col = styled.div<TypeCol>`
  flex: 0 0 auto;
  width: calc(${(p) => (p.xs || 1) * 100}% - ${p => p.gap || 0});
  @media only screen and (min-width: 768px) {
    ${(p) => p.sm && getWidthString(p.sm, p.gap)};
  }
  @media only screen and (min-width: 992px) {
    ${(p) => p.md && getWidthString(p.md, p.gap)};
  }
  @media only screen and (min-width: 1200px) {
    ${(p) => p.lg && getWidthString(p.lg, p.gap)};
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
        <Col gap="10px">
          <ColorBox p="50px">This is ColorBox with padding: 50px</ColorBox>
        </Col>
        <Col xs={1 / 2} gap="10px">
          <ColorBox p="50px">allways harf ColorBox</ColorBox>
        </Col>
        <Col sm={1 / 3} gap="10px">
          <ColorBox p="50px">This is ColorBox with padding: 50px</ColorBox>
        </Col>
        <Col xs={1 / 3} gap="10px">
          <ColorBox p="50px">This is ColorBox with padding: 50px</ColorBox>
        </Col>
        <Col xs={1 / 3} gap="10px">
          <ColorBox p="50px">This is ColorBox with padding: 50px</ColorBox>
        </Col>
        <Col xs={1 / 3} gap="10px">
          <ColorBox p="50px">This is ColorBox with padding: 50px</ColorBox>
        </Col>
      </Row>
    </Container>
  );
};

export default PhotoContent;
