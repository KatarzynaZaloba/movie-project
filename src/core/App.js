import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../common/Header";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import MoviesList from "../feature/MovieBrowser/Movies";
import { Pagination } from "../common/Pagination";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={toMovie()}>

        </Route>
        <Route path={toMovies()}>
          <MoviesList />
        </Route>
        <Route path={toPerson()}>

        </Route>
        <Route path={toPeople()}>

        </Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
      <Pagination />
    </>
  );
}

export default App;
