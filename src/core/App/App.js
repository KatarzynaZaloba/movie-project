import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toMovie, toMovies, toPeople, toPerson } from "../routes";

import PeopleList from "../../feature/People";
import { Header } from "../../common/Header";
import PersonDetails from "../../feature/PersonDetails";


function App() {
  return (
    <HashRouter>
      <Header />

      <Switch>
        <Route path={toMovie()}>

        </Route>
        <Route path={toMovies()}>
        <PersonDetails />
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
    </HashRouter>
  );
}

export default App;
