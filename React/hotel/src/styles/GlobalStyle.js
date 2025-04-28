import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Vitro-Inspire';
    src: url('/src/assets/fonts/VITRO_INSPIRE.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: #fff;
    color: #333;
    line-height: 1.6;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: 'Noto Sans', sans-serif;
    cursor: pointer;
  }
`;

export default GlobalStyle;
