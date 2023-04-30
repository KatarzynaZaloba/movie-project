import axios from 'axios';

const API_KEY = 'd3f19b5007aaab7cb579f83b9a664dec';
const API_URL = 'https://api.themoviedb.org/3';

export const getMovieDetails = movieId => {
    return axios.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
};

export const getMovieCast = movieId => {
    return axios.get(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
};

export const getMovieCrew = movieId => {
    return axios.get(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&append_to_response=crew`);
};