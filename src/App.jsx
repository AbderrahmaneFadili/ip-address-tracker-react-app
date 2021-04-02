import React, { Component } from "react";
import Home from "./pages/Home";
import GlobalStyle from "./themes/GlobalStyles";
import { themeColors } from "./themes/theme";
import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeColors}>
        <>
          <GlobalStyle />
          <Home />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
