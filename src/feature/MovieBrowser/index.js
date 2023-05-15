import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenres, fetchMovie, selectMovieStatus } from './movieBrowserSlice'
import Movies from './Movies'
import ErrorBox from '../../common/States/ErrorBox'

const MovieBrowser = () => {

    const dispatch = useDispatch();
    
    const movieStatus = useSelector(selectMovieStatus);

    useEffect(() => {
        dispatch(fetchMovie());
        dispatch(fetchGenres());
    }, [dispatch]);

    switch (movieStatus) {
        case "initial":
            return null;

        case "loading":
            return <></>;

        case "error":
            return <ErrorBox />;

        case "success":
            return <Movies />;

        default:
            throw new Error(`incorrect status: ${movieStatus}`);
    }
}

export default MovieBrowser