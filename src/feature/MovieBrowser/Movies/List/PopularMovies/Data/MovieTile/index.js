import React from 'react'
import { Details, Genre, GenresList, Name, Poster, Tile, Title, Year } from './styled'
import Rating from '../Rating'

const MovieTile = ({ movie, genres }) => {

    return (
        <Tile>
            <Poster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <Details>
                <Title>{movie.title}</Title>
                <Year>{movie.release_date.slice(0, 4)}</Year>
                {movie.genre_ids && genres ? (
                    <GenresList>
                        {movie.genre_ids.map((genre_id) => (
                            <Genre key={genre_id}>
                                <Name>{genres[genre_id]}</Name>
                            </Genre>
                        ))}
                    </GenresList>
                ) : (
                    ""
                )}
            </Details>
            <Rating 
            rating={movie.vote_average}
            votes={movie.vote_count}
            />
        </Tile>
    )
}

export default MovieTile