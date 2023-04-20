import React from 'react'
import { Genre, GenresList, Poster, Tile, Title, Year } from './styled'
import Rating from '../Rating'
import { useSelector } from 'react-redux'
import { selectGenres } from '../../../movieListSlice'


const MovieTile = ({ title, poster, year, movieGenres, rating, votes }) => {
    const genres = useSelector(selectGenres)

    return (
        <Tile>
            <Poster
                src={`https://image.tmdb.org/t/p/w500${poster}`}
                alt={title}
            />
            <div>
                <Title>{title}</Title>
                <Year>{year}</Year>
                <GenresList>
                    {movieGenres.genre_ids.map((genreId) => (
                        <Genre key={genreId}>
                            {genres[genreId]}
                        </Genre>
                    ))}
                </GenresList>
                <Rating
                    rating={rating}
                    votes={votes}
                />
            </div>
        </Tile>
    )
}

export default MovieTile