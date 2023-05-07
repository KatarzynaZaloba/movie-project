import  MovieTile from "../../MovieTile";
import { Wrapper, List } from "./styled";
import { StyledLink } from "../../../MovieBrowser/Movies/List/PopularMovies/Data/styled";
import { toMovie } from "../../../../core/routes";
import { useHistory } from "react-router-dom";

const Cast = ({ cast }) => {
  const history = useHistory();
  const handleClick = (movieId) => {
    history.push(toMovie({ movieId: movieId }));
};

  return (
    <Wrapper>
      {cast.map((movie) => (
        <List key={movie.id}>
          <StyledLink to={toMovie({ movieId: movie.id })}>
          <MovieTile 
          movie={movie}
          onClick={() => handleClick(movie.id)} />
          </StyledLink>
        </List>
      ))}
    </Wrapper>
  );
};

export default Cast;