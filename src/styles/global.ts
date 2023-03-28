import * as styled from "styled-components";

import { defaultTheme } from "./theme";

const typedTheme: styled.DefaultTheme = defaultTheme;

const GlobalStyles = styled.createGlobalStyle`
  *,
  html,
  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }

  html::-webkit-scrollbar {
    display: none;
  }

  html,
  body,
  #root,
  main {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    line-height: 1;
  }

  main {
    width: 100vw;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  :focus {
    outline: 0;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .clear {
    clear: both;
  }

  img {
    border: 0;
  }

  img a {
    border: 0;
    padding: 0;
    margin: 0;
  }
`;

GlobalStyles.defaultProps = {
  theme: typedTheme,
};

export default GlobalStyles;
