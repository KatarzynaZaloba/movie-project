import { ThemeProvider } from "styled-components";
import MovieBrowser from "../../feature/MovieBrowser";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MovieBrowser />
    </ThemeProvider>

  );
}

export default App;
