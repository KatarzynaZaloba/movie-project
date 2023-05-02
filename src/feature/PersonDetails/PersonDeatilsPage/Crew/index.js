import MovieTile from "../../../MovieBrowser/Movies/List/PopularMovies/Data/MovieTile";
import { data } from "../Cast/data";
import { Wrapper, List } from "../Cast/styled";

const Crew = () => {

    const crew = data.people

    return (
        <Wrapper>
            {crew.map((people) =>
                <List key={people}>
                    {/* <MovieTile /> */}
                </List>
            )}
        </Wrapper>
    );
}
export default Crew;