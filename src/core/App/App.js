import Header from "../common/Header";
import { Pagination } from "../common/Pagination";
import MovieBrowser from "../feature/MovieBrowser"


function App() {
  return (
    <>
      <Header />
      <MovieBrowser />
      <Pagination />
    </>
  );
}

export default App;
