//import { data } from "./data";
import  MovieTile from "../../MovieTile";
import { Wrapper, List } from "./styled";


const Cast = ({ cast }) => {
  return (
    <Wrapper>
      {cast.map((movie) => (
        <List key={movie.id}>
          <MovieTile movie={movie} />
        </List>
      ))}
    </Wrapper>
  );
};

export default Cast;