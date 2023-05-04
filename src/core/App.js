import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import MoviesList from "../feature/MovieBrowser/Movies";
import MovieDetails from "../feature/MovieDetails";
import PeopleList from "../feature/People";



function App() {
  const id = "movieId";
  return (
    <>
      <HashRouter>

        <Header />

        <Switch>
          <Route path={toMovie({ movieId: id })}>
            <MovieDetails />
          </Route>
          <Route path={toMovies()}>
            <MoviesList />
          </Route>
          <Route path={toPerson({ personId: "personId" })}>

          </Route>
          <Route path={toPeople()}>
            <PeopleList />
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
