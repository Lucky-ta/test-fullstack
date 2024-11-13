import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 * {
margin: 0;
padding: 0;
box-sizing: border-box;
 }

  body {
    font-family: Sans-Serif ;
    color: #525252;
    height: 100dvh;
    overflow-x: hidden;
  }

  input, select {
    height: 45px;
    border: 1px solid #c3c7d0;
    border-radius: 4px;
    padding: 0 15px;
    width: 100%;


    &::placeholder {
      color: #c3c7d0;
    }

  }



  .container {
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
  }



`;
