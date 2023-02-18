import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

import {
  BasicStyle,
  Header,
  Main,
  Footer,
} from "../components/YankeeHedgehog/LayoutStyles";
import { H1Title, PText } from "../components/YankeeHedgehog/Utilities";
import Tabs from "../components/YankeeHedgehog/pages/Tabs";
import ToTopButton from "../components/YankeeHedgehog/pages/ToTopButton";
import GridContents from "../components/YankeeHedgehog/pages/GridContents";
import MarginWrapper from "../components/YankeeHedgehog/atoms/marginWrapper";
import { ReactComponent as FirstPaintHedgehog } from "../public/first-paint-Hedgehog.svg";

const FooterContent = styled.div`
  display: block;
  background: ${(p) => p.theme.color.background};
  text-align: center;
`;

const Top = () => {
  return (
    <ThemeProvider theme={theme}>
      <BasicStyle>
        <Header>
          <H1Title>
            <FirstPaintHedgehog
              title="FirstPaintHedgehog"
              style={{ width: "200px", color: "#4A452A" }}
            />
            Yankee Hedgehog
          </H1Title>
          <PText>
            Portfolio of YH, system development illustration 2dolcreator
          </PText>
        </Header>

        <Main>
          <Tabs />
          <MarginWrapper option={{ x: "5px" }}>
            <GridContents />
          </MarginWrapper>
        </Main>

        <Footer>
          <ToTopButton />
          <FooterContent>
            <p>Yankee Hedgehog</p>
            <p>@2023 Created by Mon</p>
          </FooterContent>
        </Footer>
      </BasicStyle>
    </ThemeProvider>
  );
};

export default Top;
