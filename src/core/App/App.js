import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "../../feature/Header";
import { toMovie, toMovies, toPeople, toPerson } from "../routes";
import MoviesList from "../../feature/MovieBrowser/Movies";
import { Pagination } from "./Pagination";
import MovieDescription from "../../feature/MovieBrowser/Movies/MovieDescription";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie()}>
          <MovieDescription />
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
    </HashRouter>
  );
};

export default App;
