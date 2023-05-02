import { data } from "./data";
import  MovieTile from "../../../MovieBrowser/Movies/List/PopularMovies/Data/MovieTile";
import { Wrapper, List } from "./styled";


const Cast = () => {

    const cast = data.movies

    return (
        <Wrapper>
            {cast.map((movies) =>
                <List key={movies}>
                    {/* <MovieTile /> */}
                </List>
            )}
        </Wrapper>
    );
}
export default Cast;