import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { toMovie, toMovies, toPeople, /*toPerson*/ } from "./routes";
import MoviesList from "../feature/MovieBrowser/Movies";
import MovieDetails from "../feature/MovieDetails";
import PeopleList from "../feature/People";
import PersonDetails from "../feature/PersonDetails";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie({ movieId: ":movieId" })} name="movie" component={MovieDetails} />
        <Route exact path={toMovies()} name="movies" component={MoviesList} />
        <Route path={toPerson({ personId: ":personId" })} name="person" component={PersonDetails} />
        <Route path={toPeople()} name="people">
        <Route path="/" component={MoviesList} />
      </Switch>
    </HashRouter>
    </>
  );
}

export default App;