import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./common/GlobalStyles";
import { theme } from "./common/theme";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";
import App from "./core/App/App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <GlobalStyle />
        <Normalize />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();