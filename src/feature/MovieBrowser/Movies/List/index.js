import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie, selectMovies, selectMovieStatus } from './movieListSlice'
import PopularMovies from './PopularMovies';

const List = () => {

    const dispatch = useDispatch();

    const movies = useSelector(selectMovies);
    const movieStatus = useSelector(selectMovieStatus);

    useEffect(() => {
        dispatch(fetchMovie());
    }, [dispatch])
    
    return (
        <PopularMovies
            status={movieStatus}
            movies={movies}
        />
    )
}

export default List