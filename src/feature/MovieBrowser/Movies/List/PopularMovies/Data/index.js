import { useSelector } from "react-redux"
import MovieTile from "./MovieTile"
import { Item, Wrapper } from "./styled"
import { selectGenres } from "../../movieListSlice"
import Rating from "./Rating"

const Data = ({ movies }) => {
    const genres = useSelector(selectGenres)
    
    return (
        <Wrapper>
            {movies.map((movie) =>
                <Item key={movie.id}>
                    <MovieTile
                        movie={movie}
                        genres={genres}
                    />
                </Item>
            )}
        </Wrapper >
    )
}

export default Data