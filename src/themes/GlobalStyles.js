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
      font-family: 'Rubik', sans-serif;
  }

  input::placeholder{
    font-family: 'Rubik', sans-serif;
  }
  


`;

export default GlobalStyle;
