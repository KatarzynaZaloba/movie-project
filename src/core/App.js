import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { toMovie, toMovies, toPeople, /*toPerson*/ } from "./routes";
import MoviesList from "../feature/MovieBrowser/Movies";
import MovieDetails from "../feature/MovieDetails";
import PeopleList from "../feature/People";
import PersonDetails from "../feature/PersonDetails";

function App() {
  const id = "movieId";
  return (
    <>
      <Header />
      <Switch>
        <Route path={toMovie({ movieId: id })}>
          <MovieDetails />
        </Route>
        <Route path="/person/:personId" component={PersonDetails} />
        <Route path={toMovies()}>
          <MoviesList />
        </Route>
        <Route path={toPeople()}>
          <PeopleList />
        </Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </>
  );
}

export default App;