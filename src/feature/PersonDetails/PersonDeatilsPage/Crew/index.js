import MovieTile from "../../MovieTile";
//import { data } from "../Cast/data";
import { Wrapper, List } from "../Cast/styled";

const Crew = ({crew}) => {
    return (
        <Wrapper>
            {crew.map((movie) =>
                <List key={movie.id}>
                    <MovieTile movie={movie} />
                </List>
            )}
        </Wrapper>
    );
}
export default Crew;