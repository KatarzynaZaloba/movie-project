import axios from 'axios';

const API_KEY = 'd3f19b5007aaab7cb579f83b9a664dec';

export const searchMovies = async (query) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        return data.results;
    } catch (error) {
        console.error(error);
    }
};

export const searchPeople = async (query) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${query}`);
        return data.results;
    } catch (error) {
        console.error(error);
    }
};