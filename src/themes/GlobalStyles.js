import styled, { createGlobalStyle } from "styled-components";

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

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default GlobalStyle;
