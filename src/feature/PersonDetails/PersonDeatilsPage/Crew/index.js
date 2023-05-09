import MovieTile from "../../MovieTile";
//import { data } from "../Cast/data";
import { Wrapper, List } from "../Cast/styled";
import { StyledLink } from "../../../MovieBrowser/Movies/styled";
import { toMovie } from "../../../../core/routes";
import { useHistory } from "react-router-dom";

const Crew = ({ crew }) => {
    const history = useHistory();
    const handleClick = (movieId) => {
        history.push(toMovie({ movieId: movieId }));
    };
    return (
        <Wrapper>
            {crew.map((movie) => (
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
}
export default Crew;