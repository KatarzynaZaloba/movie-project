import React from 'react'
import { Poster, Tile, Title, Year } from './styled'
import Rating from '../Rating'
import Genres from './Genres'

const MovieTile = ({ title, poster, year, genresId, rating, votes }) => {
    return (
        <Tile>
            <Poster
                src={`https://image.tmdb.org/t/p/w500${poster}`}
                alt={title}
            />
            <div>
                <Title>{title}</Title>
                <Year>{year}</Year>
                <Genres />
                <Rating
                    rating={rating}
                    votes={votes}
                />
            </div>
        </Tile>
    )
}

export default MovieTile