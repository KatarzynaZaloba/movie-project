export const toMovies = () => '/movies';
export const toMovie = ({ movieId }) => `/movies/${movieId}`;
export const toPeople = () => '/people';
export const toPerson = ({ personId } = { personId: ':personId' }) => `/person/${personId}`;

//export const toPerson = () => '/person/:personId';
