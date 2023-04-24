import { BrowserRouter } from "react-router-dom";
import MovieDetails from "../feature/MovieDetails";
import { Pagination } from "../common/Pagination";
import { Header } from "../common/Header";




function App() {
    return (
        <BrowserRouter>
            <Header />


            <MovieDetails />

            <Pagination />
        </BrowserRouter>
    );
}

export default App;

export default App;