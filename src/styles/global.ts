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

  .gallery-wrap {
    background-color: #d53f41;
    margin-left: -5vw;
    margin-right: -5vw;
  }

  .gallery-counter {
    position: absolute;
    top: 10%;
    left: 100px;
    z-index: 1;
    mix-blend-mode: difference;
    line-height: 16px;
    color: #dbd8d6;

    font-family: "Bai Jamjuree";
    font-weight: 600;

    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    display: inline-block;

    .divider {
      content: "";
      background-color: white;
      width: 6.25vw;
      margin: 7px 10px;
      height: 1px;
      display: inline-block;
    }
  }

  .gallery {
    height: 80vh;

    padding: 10vh 0;
    width: 400%;
    display: flex;
    flex-wrap: nowrap;

    .gallery-item {
      width: 100%;
      height: 100%;
      position: relative;
      will-change: transform;
    }

    .gallery-item-info {
      position: absolute;
      bottom: 10%;
      z-index: 1;
      transform: translateX(-20%);
      color: #dbd8d6;
      color: white;
      .gallery-info-title {
        line-height: 6vw;
        font-family: "Bai Jamjuree";
        font-weight: 600;

        font-size: 6vw;
        -webkit-font-smoothing: antialiased;
      }

      .gallery-info-subtitle {
        position: relative;
        line-height: 6vw;
        color: transparent;
        font-family: "Bodoni Moda";
        font-weight: 400;
        font-size: 6vw;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke: 2px #dbd8d6;
      }

      .gallery-info-category {
        position: relative;
        line-height: 24px;
        font-family: "Bai Jamjuree";
        font-weight: 400;
        font-size: 24px;
        -webkit-font-smoothing: antialiased;
        margin-top: 2vh;
      }
    }
    .gallery-item-wrapper {
      aspect-ratio: 16/9;
      height: 100%;
      display: grid;
      grid-template-columns: 20vw 1fr 200px;
      width: 100vw;

      &.is-reveal {
        .gallery-item-image {
          transform: scale(1);
          filter: none;
        }
      }
    }
    .gallery-item-image {
      background-size: cover;
      background-position: center;
      transform-origin: center;
      width: 100%;
      height: 100%;
      will-change: transform;
      transform: scale(0.7);
      transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
      filter: grayscale(100%) sepia(20%) brightness(80%);
    }
  }
`;

GlobalStyles.defaultProps = {
  theme: typedTheme,
};

export default GlobalStyles;
