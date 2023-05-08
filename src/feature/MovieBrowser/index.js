import React from 'react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenres, fetchMovie, selectMovies, selectMovieStatus } from '../../movieBrowserSlice'


    const dispatch = useDispatch();

    // const movies = useSelector(selectMovies);
    const movieStatus = useSelector(selectMovieStatus);

    useEffect(() => {
        dispatch(fetchMovie());
        dispatch(fetchGenres());
    }, [dispatch]);
    
const MovieBrowser = () => {
    switch (movieStatus) {
        case "initial":
            return null;

        case "loading":
            return <Loading />;

        case "error":
            return <ErrorBox />;

        case "success":
            return <Data movies={movies} />;

        default:
            throw new Error(`incorrect status: ${movieStatus}`);
    }
}

export default MovieBrowser