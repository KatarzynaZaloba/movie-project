import { ThemeProvider } from "styled-components";
import MovieBrowser from "../../feature/MovieBrowser";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";
import { Pagination } from "./Pagination/index";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MovieBrowser />
      <Pagination />
    </ThemeProvider>

  );
}

export default App;
