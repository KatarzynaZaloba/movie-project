import React from 'react'
import { Genre, Genres, Item, MovieList, Poster, Tile, Title, Wrapper, Year } from './styled'
import { data } from "./data"
import Rating from './Rating'

const List = () => {

    const movies = data.movie

    return (
        <Wrapper>
            <MovieList>
                {movies.map((movie) =>
                    <Item key={movie}>
                        <Tile>
                            <Poster src={movie.poster} alt={movie.title} />
                            <Title>{movie.title}</Title>
                            <Year>{movie.year}</Year>
                            <Genres>
                                <Genre>{movie.genre}</Genre>
                            </Genres>
                            <Rating
                                rating={movie.rating}
                                votes={movie.votes}
                            />
                        </Tile>
                    </Item>
                )}
            </MovieList>
        </Wrapper>
    )
}

export default List