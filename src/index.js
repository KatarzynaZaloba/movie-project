import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./common/GlobalStyles";
import { theme } from "./common/theme";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
//import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>

    <ThemeProvider theme={theme}>

      <React.StrictMode>
        <GlobalStyle />
        <Normalize />
        <App />
      </React.StrictMode>
    </ThemeProvider>

  </HashRouter>
);

reportWebVitals();