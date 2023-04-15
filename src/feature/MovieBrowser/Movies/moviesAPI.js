import { baseURL, APIkey } from "../dataAPI";

export const getPopularMovies = async () => {
    const response = await fetch(
        `${baseURL}/movie/popular?api_key=${APIkey}&language=en-US&page=1`
    );

    const popularMovies = await response.json();
    return popularMovies;
};

export const getGenres = async () => {
    const response = await fetch(
        `${baseURL}/genre/movie/list?api_key=${APIkey}&language=en-US`
    );

    const genres = await response.json();
    return genres;
};

export const getMovie = async (movieId) => {
    const response = await fetch(
        `${baseURL}/movie/${movieId}?api_key=${APIkey}&language=en-US`
    );

    const movie = await response.json();
    return movie
};

export const getMovieCredits = async (movieId) => {
    const response = await fetch(
        `${baseURL}/movie/${movieId}/credits?api_key=${APIkey}&language=en-US`
    );

    const credits = await response.json();
    return credits;
}