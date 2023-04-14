import React from 'react'
import { Genre, Genres, Item, Poster, Tile, Title, Wrapper, Year } from './styled'
import { data } from "./data"
import Rating from './Rating'

const List = () => {

    const movies = data.movie

    return (
        <Wrapper>
            {movies.map((movie) =>
                <Item key={movie}>
                    <Tile>
                        <Poster src={movie.poster} alt={movie.title} />
                        <div>
                            <Title>{movie.title}</Title>
                            <Year>{movie.year}</Year>
                            <Genres>
                                <Genre>{movie.genre}</Genre>
                            </Genres>
                            <Rating
                                rating={movie.rating}
                                votes={movie.votes}
                            />
                        </div>
                    </Tile>
                </Item>
            )}
        </Wrapper>
    )
}

export default List