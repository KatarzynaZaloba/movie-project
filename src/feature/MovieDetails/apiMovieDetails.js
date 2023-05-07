import axios from 'axios';

const ApiKey = "d3f19b5007aaab7cb579f83b9a664dec";
const ApiUrl = "https://api.themoviedb.org/3/";
export const language = "&language=en-US";
export const imgBaseUrl = "https://image.tmdb.org/t/p";
export const imgBaseBackdrop = "https://image.tmdb.org/t/p/original";

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(
        `${ApiUrl}/movie/${movieId}?api_key=${ApiKey}${language}`
    );

    return await response.data;
};

export const getMovieDetailsCredits = async (movieId) => {
    const response = await axios.get(
        `${ApiUrl}/movie/${movieId}/credits?api_key=${ApiKey}${language}`
    );

    return await response.data;
};