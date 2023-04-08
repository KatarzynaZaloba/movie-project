import { HashRouter, Redirect, Route, Switch } from "react-router-dom";




function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toMovies()}>
          <MoviesList />
        </Route>
        <Route path={toPerson()}>
          <ProfilePersonPage />
        </Route>
        <Route path={toPeople()}>
          <PeopleList />
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
