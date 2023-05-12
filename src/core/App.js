import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import MovieDetails from "../feature/MovieDetails";
import PeopleList from "../feature/People/PeopleList/List";
import PersonDetails from "../feature/PersonDetails";
import MovieBrowser from "../feature/MovieBrowser";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path={toMovies()}>
            <MovieBrowser />
          </Route>
          <Route path={toMovie({ movieId: ":movieId" })}>
            <MovieDetails />
          </Route>
          <Route path={toPeople()}>
            <PeopleList />
          </Route>
          <Route path={toPerson({ personId: ":personId" })}>
            <PersonDetails />
          </Route>
          <Route>
            <Redirect to={toMovies()} />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;