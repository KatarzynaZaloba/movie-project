import Loading from "../../../../../common/States/Loading";
import Data from "./Data";
import ErrorBox from "./ErrorBox";

const PopularMovies = ({ status, movies }) => {
    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />;

        case "error":
            return <ErrorBox />;

        case "success":
            return <Data movies={movies} />;

        default:
            throw new Error(`incorrect status: ${status}`);
    }
};

export default PopularMovies