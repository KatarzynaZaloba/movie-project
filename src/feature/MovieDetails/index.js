import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectMovieDetails,
    selectCast,
    selectCrew,
    selectStatus,
    fetchMovieDetails,
} from "./movieDetailsSlice";
import Backdrop from "./MovieDeatilsPage/Backdrop";
import Cast from "./MovieDeatilsPage/Cast";
import Crew from "./MovieDeatilsPage/Crew";
import MovieTile from "./MovieDeatilsPage/MovieTile";
import Loading from "../../common/States/Loading";
import ErrorBox from "../MovieBrowser/Movies/List/PopularMovies/ErrorBox";
import NoResult from "../../common/NoResults";
import { Wrapper, DetailsWrapper, SectionTitle } from "./styled";
import { useQueryParameter } from "../../core/QueryBox/useQueryParameter";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const movieId = useQueryParameter("movieId");

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
        return <Loading />;
    }

    if (status === "failed") {
        return <ErrorBox />;
    }

    if (status === "noresult") {
        return <NoResult />;
    }

    return (
        <>
            {movieDetails && movieDetails.backdrop_path && <Backdrop />}
            <Wrapper>
                <DetailsWrapper>
                    {movieDetails && movieDetails.title && (
                        <MovieTile movie={movieDetails} />
                    )}
                    {cast.length > 0 && (
                        <>
                            <SectionTitle title={"Cast"} />
                            <Cast cast={cast} />
                        </>
                    )}
                    {crew.length > 0 && (
                        <>
                            <SectionTitle title={"Crew"} />
                            <Crew crew={crew} />
                        </>
                    )}
                </DetailsWrapper>
            </Wrapper>
        </>
    );
};

export default MovieDetails;