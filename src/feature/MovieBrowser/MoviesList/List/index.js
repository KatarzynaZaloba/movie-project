import React from 'react'
import { Details, Genre, Genres, Item, MovieList, Poster, Tile, Title, Wrapper, Year } from './styled'
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
                            <Details>
                                <Title>{movie.title}</Title>
                                <Year>{movie.year}</Year>
                                <Genres>
                                    <Genre>{movie.genre}</Genre>
                                </Genres>
                                <Rating
                                    rating={movie.rating}
                                    votes={movie.votes}
                                />
                            </Details>
                        </Tile>
                    </Item>
                )}
        </Wrapper>
    )
}

export default List