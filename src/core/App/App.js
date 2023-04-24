import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { toMovie, toMovies, toPeople, toPerson } from "../routes";
import MoviesList from "../../feature/MovieBrowser/Movies";
import PeopleList from "../../feature/People";
import { Pagination } from "../../common/Pagination";
import { Header } from "../../common/Header";


function App() {
  return (
    <BrowserRouter>
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
          <PeopleList />
        </Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
      <Pagination />
    </BrowserRouter>
  );
}

export default App;
