import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../common/Header";
import { Pagination } from "../common/Pagination";
import MovieBrowser from "../feature/MovieBrowser";
import { MovieDetails } from "../feature/MovieDetails";
import { toMovies, toMovie } from "../core/routes";


function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie()}>
          <MovieDetails />
        </Route>
        <Route path={toMovies()}>
          <MovieBrowser />
        </Route>

        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
      <Pagination />
    </HashRouter>
  );
}

export default App;