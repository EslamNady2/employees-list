import styled, { createGlobalStyle } from "styled-components";
import { colors } from "src/configs/themeData";

export const AppContainer = styled.div`
  background: ${colors.bodyColor};
  width: 100%;
  height: 100%;
  box-sizing: content-box;
`;

export const GlobalStyle = createGlobalStyle`
     html {
      scroll-behavior: smooth;
      height: 100%;
    }
    body {
        font-family: sans-serif;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    #root {
        height: 100%;
    }
`;
