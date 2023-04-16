import React, { useEffect } from 'react'
import { GenresList, Genre } from './styled'
import { useDispatch } from 'react-redux'
import { fetchGenres } from './genresSlice' 

const Genres = ({ genresId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch])

    return (
        <GenresList>
            <Genre>

            </Genre>

        </GenresList>
    )
}

export default Genres