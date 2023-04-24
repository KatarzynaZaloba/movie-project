import { useSelector } from "react-redux"
import MovieTile from "./MovieTile"
import { Item, Wrapper } from "./styled"
import { selectGenres } from "../../movieListSlice"
import { Header } from "../../../styled"

const Data = ({ movies }) => {
    
    const genres = useSelector(selectGenres)
    
    return (
        <>
        <Header>Popular Movies</Header>
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
        </>
    )
}

export default Data