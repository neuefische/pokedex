import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0px 100px;
    height: 100vh;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      124deg,
      rgba(255, 255, 255, 1) 55%,
      rgba(212, 212, 212, 1) 100%
    );
  }
  
  @media (max-width: 900px) {
    body {
      margin: 0 50px;
    }
  }
`;
