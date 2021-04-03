import React, { Component } from "react";
import Home from "./pages/Home";
import GlobalStyle from "./themes/GlobalStyles";
import { themeColors } from "./themes/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

//global loading style
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={themeColors}>
          <>
            <GlobalStyle />
            <Home />
          </>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
