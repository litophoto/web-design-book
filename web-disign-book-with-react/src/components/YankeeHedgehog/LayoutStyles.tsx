import styled from "styled-components";

const BasicStyle = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.text};
  display: grid;
  grid-template: "header" auto "contents" 1fr "footer" auto/100%;
  min-height: 100vh;
`;
const Header = styled.header`
  grid-area: header;
  text-align: center;
`;

const Main = styled.main`
  grid-area: contents;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

export { BasicStyle, Header, Main, Footer };
