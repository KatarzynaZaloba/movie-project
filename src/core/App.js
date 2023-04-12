
import Header from "../../feature/Header";
import { Pagination } from "./Pagination";
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



//function App() {
// return (
//<>
//<Header />
//<Routes>
//<Route path="/" element={<MoviesList />} />
//<Route path="/movies" element={<MoviesList />} />
//<Route path="/people" element={<PeopleList />} />
//<Route path="/people/:id" element={<MoviePage />} />
//<Route path="/movies/:id" element={<PersonPage />} />
//</Routes>
//<Pagination />
    //</>
  //);
//}

