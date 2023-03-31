import { createGlobalStyle } from "styled-components";
import Manrope from "../assets/Manrope.ttf";
import { color } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: Manrope;
    src: url(${Manrope}) format('truetype');
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: Manrope, sans-serif;
  }

  #root {
    width: 100%;
    height: 100%;
    background-color: ${color.darkBlue};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
