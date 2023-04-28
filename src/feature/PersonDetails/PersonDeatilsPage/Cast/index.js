import { data } from "./data";
import  MovieTile from "../../../MovieBrowser/Movies/List/PopularMovies/Data/MovieTile";
import { Wrapper, List } from "./styled";


const Cast = () => {

    const cast = data.people

    return (
        <Wrapper>
            {cast.map((people) =>
                <List key={people}>
                    <MovieTile />
                </List>
            )}
        </Wrapper>
    );
}
export default Cast;