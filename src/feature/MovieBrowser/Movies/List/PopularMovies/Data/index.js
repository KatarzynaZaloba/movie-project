import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieTile from "./MovieTile";
import { Item, Wrapper, StyledLink } from "./styled";
import { selectGenres, selectMovies } from "../../movieListSlice";
import { Header } from "../../../styled";
import NoResults from "../../../../../../common/NoResults";
import { useQueryParameter } from "../../../../../../core/QueryBox/useQueryParameter";
import { searchQueryParamName } from "../../../../../../core/QueryBox/queryParamName";
import { toMovie } from "../../../../../../core/routes";

const Data = () => {
    const history = useHistory();
    const query = useQueryParameter(searchQueryParamName);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const movies = useSelector(selectMovies);
    const genres = useSelector(selectGenres);

    useEffect(() => {
        setFilteredMovies(
            query
                ? movies.filter((movie) =>
                    movie.title.toLowerCase().includes(query.toLowerCase())
                )
                : movies
        );
    }, [query, movies]);

    const handleClick = (movieId) => {
        history.push(toMovie({ movieId: movieId }));
    };

    return (
        <>
            {!movies.length ? (
                <NoResults />
            ) : (
                <>
                    <Header>
                        {!query
                            ? "Popular Movies"
                            : `Search results for "${query}" (${filteredMovies.length})`}
                    </Header>
                    <Wrapper>
                        {filteredMovies.map((movie) => (
                            <Item key={movie.id}>
                                <StyledLink to={toMovie({ movieId: movie.id })}>
                                    <MovieTile
                                        movie={movie}
                                        genres={genres}
                                        onClick={() => handleClick(movie.id)}
                                    />
                                </StyledLink>
                            </Item>
                        ))}
                    </Wrapper>
                </>
            )}
        </>
    );
};

export default Data;