export const toMovies = () => '/movies';
export const toMovie = ({ movieId }) => `/movies/${movieId}`;
export const toPeople = () => '/people';
export const toPerson = ({ personId } = { personId: ':personId' }) => `/people/${personId}`;

//export const toPerson = () => '/person/:personId';
