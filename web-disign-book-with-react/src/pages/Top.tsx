import React, { ReactNode, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./Theme";

import PhotoContent from "../components/YankeeHedgehog/PhotoContent";

const StyledBasic = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.text};
  display: grid;
  grid-template: "header" auto "contents" 1fr "footer" auto/100%;
  min-height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
`;

const Main = styled.main`
  grid-area: contents;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

const StyledDark = styled.div`
  background-color: ${(p) => p.theme.color.secondary};
`;

const H1Title = styled.h1`
  display: flex;
  algin-items: center;
`;

const IconGroup = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding: 3px;
  position: sticky;
  top: 0px;
`;

const Icon = styled.i<{ size?: number }>`
  display: inline-block;
  width: ${(p) => p.size || 75}px;
  height: ${(p) => p.size || 75}px;
  background-color: ${(p) => p.theme.color.secondary};
  margin: 3px;
  border-radius: 50%;
`;

const ToTopButton = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;

  // background-color: ${(p) => p.theme.color.secondary};
  border: none;
  transition: all 0.5s;
  :hover&:focus {
    transform: scale(1.15);
  }
`;

const BottomNavigationbar = styled.div`
  background: ${(p) => p.theme.color.dark};
  position: absolute;
  bottom: 0px;

  width: 100%;
  height: 80px;
`;

const FooterContent = styled.div`
  display: block;
  background: ${(p) => p.theme.color.background};
  text-align: center;
`;

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

const useToTop = () => {
  const [showToTop, setShowToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return [showToTop, goToTop] as const;
};

type TypeUseSelectTab = {
  tabs: ReactNode[];
  initialTab: ReactNode;
};

const useSelectTab = ({ tabs, initialTab }: TypeUseSelectTab) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const selectTab = (nextTab: ReactNode) => {
    setSelectedTab(nextTab);
  };

  return [selectedTab, selectTab] as const;
};

const Top = () => {
  const [showToTop, goToTop] = useToTop();

  return (
    <ThemeProvider theme={theme}>
      <StyledBasic>
        <Header>
          <H1Title>
            <Icon></Icon>Yankee Hedgehog
          </H1Title>
          <p>Portfolio of YH, system development illustration 2dolcreator</p>
        </Header>

        <Main>
          <IconGroup>
            <Icon size={100}></Icon>
            <Icon></Icon>
            <Icon></Icon>
            <Icon></Icon>
            <Icon></Icon>
            <Icon></Icon>
            <Icon></Icon>
          </IconGroup>
          {/* <ContentArea>
            <ContentRow>
              <Content>some text</Content>
              <Content></Content>
            </ContentRow>
            <ContentRow>
              <Content></Content>
              <Content></Content>
            </ContentRow>
            <ContentRow>
              <Content></Content>
            </ContentRow>
            <ContentRow>
              <Content></Content>
              <Content></Content>
              <Content></Content>
            </ContentRow>
            <ContentRow>
              <Content></Content>
            </ContentRow>
            <ContentRow>
              <Content></Content>
            </ContentRow>
            <ContentRow>
              <Content></Content>
            </ContentRow>
          </ContentArea>
          <ContentArea>
            <h1>Photo Content</h1>
            <ContentRow>
              <Content></Content>
              <Content></Content>
            </ContentRow>
          </ContentArea> */}
          <PhotoContent />
        </Main>

        <Footer>
          {showToTop && (
            <ToTopButton onClick={() => goToTop()}>
              <Icon></Icon>
            </ToTopButton>
          )}
          {/* <BottomNavigationbar></BottomNavigationbar> */}
          <FooterContent>
            <p>Yankee Hedgehog</p>
            <p>Created by YH</p>
          </FooterContent>
        </Footer>
      </StyledBasic>
    </ThemeProvider>
  );
};

export default Top;
