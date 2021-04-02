import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before{
        font-family: 'Rubik', sans-serif;
        padding:0;
        margin:0;
        box-sizing:border-box;
  }

  html{
      font-size:16px;
      font-family: 'Rubik', sans-serif;
  }

  input{
      font-size:18px;
  }
  
`;

export default GlobalStyle;
