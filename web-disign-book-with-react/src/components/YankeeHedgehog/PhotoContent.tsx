import styled from "styled-components";
import theme from "../../pages/Theme";

const ContentArea = styled.div`
  display: flex column;
  gap: 10px;
  // background-color: ${(p) => p.theme.color.secondary};

  padding: 10px;
`;

const ContentRow = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  background-color: ${(p) => p.theme.color.secondary};
  color: ${(p) => p.theme.color.primary};

  border-radius: 5px;
  width: 100%;
  height: 100px;

  // margin: 10px;
`;

const Container = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

type TypeCol = {
  media?: string;
  rate?: number;
};

const Col = styled.div<TypeCol>`
  flex: 0 0 auto;
  width: ${(p) => p.rate || 100}%;
  background: #333;
`;

const PhotoContent = () => {
  return (
    // <ContentArea>
    //   <ContentRow>
    //     <Content></Content>
    //   </ContentRow>
    //   <ContentRow>
    //     <Content></Content>
    //   </ContentRow>
    //   <ContentRow>
    //     <Content></Content>
    //   </ContentRow>
    // </ContentArea>
    <Container>
      <Row>
        <Col>sample</Col>
        <Col>sample</Col>
        <Col>sample</Col>
        <Col>sample</Col>
      </Row>
    </Container>
  );
};

export default PhotoContent;
