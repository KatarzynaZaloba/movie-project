
import MovieTile from "./MovieTile"
import { Item, Wrapper } from "./styled"

const Data = ({ movies }) => {
    return (
        <Wrapper>
            {movies.map((movie) =>
                <Item key={movie.id}>
                    <MovieTile
                        title={movie.title}
                        poster={movie.poster_path}
                        year={movie.release_date}
                        genresId={movie.genres_ids}
                        rating={movie.vote_average}
                        votes={movie.vote_count}
                    />
                </Item>
            )}
        </Wrapper >
    )
}

export default Data