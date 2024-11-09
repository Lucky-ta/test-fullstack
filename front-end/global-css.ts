import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 * {
margin: 0;
padding: 0;
 }

  body {
    font-family: Sans-Serif ;
    color: #525252;
    height: 100dvh;
    overflow-x: hidden;
  }

  .container {
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
  }
`;
