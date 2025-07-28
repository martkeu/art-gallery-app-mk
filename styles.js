import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import img from "/assets/rauschen.png";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    font-family: system-ui;    
  }

  body div {
    display: flex;
    flex-direction: column;
    /* padding: 1rem 0 0 0; */
    min-height: 100vh;
  }

  main {
   display: flex;
   flex-direction: column;
   align-items: center;
   flex: 1;
   padding-inline: 1rem;
    /* background-image: url(${img}); */
   background-color: #dde49f;
   background-color: #e0e0e0;
   background-color: #345644;
  }

  img {
   width: 100%;
   height: auto;
  }
`;
