import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Wrapper, SectionTitle, DetailsWrapper } from './styled';
import Loading from "../../common/States/Loading";
import { fetchMovieDetails, selectCast, selectCrew, selectMovieDetails, selectStatus } from './movieDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from './MovieDeatilsPage/Backdrop';
import Cast from './MovieDeatilsPage/Cast';
import Crew from './MovieDeatilsPage/Crew';
import MovieTile from './MovieDeatilsPage/MovieTile';
import LoadingSearchResults from '../../common/States/Loading/LoadingSearchResult';
import ErrorBox from '../MovieBrowser/Movies/List/PopularMovies/ErrorBox';
import NoResult from '../../common/NoResults';


const MovieDetails = () => {
    const { movieId } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        if (movieId !== null) {
            dispatch(fetchMovieDetails(movieId));
        }
    }, [dispatch, movieId]);

    const movieDetails = useSelector(selectMovieDetails);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);
    const status = useSelector(selectStatus);

    if (status === "loading") {
        return <LoadingSearchResults />;
    }

    if (status === "failed") {
        return <ErrorBox />;
    }

    if (status === "noresult") {
        return <NoResult />;
    }

    return (
        <>
            {movieDetails && movieDetails.backdrop_path && <Backdrop backdropPath={movieDetails.backdrop_path} />}
            <Wrapper>
                <DetailsWrapper>
                    {movieDetails && movieDetails.title && <MovieTile movie={movieDetails} />}
                    {cast.length > 0 && (
                        <>
                            <SectionTitle title="Cast" />
                            <Cast cast={cast} />
                        </>
                    )}
                    {crew.length > 0 && (
                        <>
                            <SectionTitle title="Crew" />
                            <Crew crew={crew} />
                        </>
                    )}
                </DetailsWrapper>
            </Wrapper>
        </>
    );
};

export default MovieDetails;