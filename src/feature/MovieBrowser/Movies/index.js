import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Pagination } from '../../../common/Pagination';
import MovieTile from '../../../common/MovieTile';
import NoResults from '../../../common/NoResults';
import { Wrapper, Item, TileWrapper, StyledLink, Header } from './styled';
import { selectGenres } from '../movieBrowserSlice';
import { searchQueryParamName } from '../../../core/QueryBox/queryParamName';
import { toMovie } from '../../../core/routes';
import LoadingSpinnerOnly from '../../../common/States/Loading/LoadingSpinnerOnly';
import LoadingSearchResults from '../../../common/States/Loading/LoadingSearchResult';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchResults, setSearchResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const genres = useSelector(selectGenres);
    const location = useLocation();
    const history = useHistory();


    let searchQuery = new URLSearchParams(location.search).get(searchQueryParamName);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            try {
                const searchQuery = new URLSearchParams(location.search).get(
                    searchQueryParamName
                );
                let endpoint;
                if (searchQuery) {
                    endpoint = `https://api.themoviedb.org/3/search/movie?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&query=${searchQuery}&page=${currentPage}`;
                } else {
                    endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&page=${currentPage}`;
                }
                const response = await fetch(endpoint);
                const data = await response.json();
                if (searchQuery) {
                    setSearchResults({ query: searchQuery, count: data.total_results });
                    if (data.total_results === 0) {
                        setMovies([]);
                    } else {
                        setMovies(data.results);
                    }
                } else {
                    setSearchResults(null);
                    setMovies(data.results);
                }
                setTotalPages(data.total_pages);
            } catch (error) {
                console.error(error);
            }
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        };
        fetchMovies();
    }, [currentPage, location.search, searchQuery]);


    const renderHeader = () => {
        if (searchResults) {
            return (
                searchResults.count > 1 ?
                    <Header>
                        Search results for "{searchResults.query}" ({searchResults.count})
                    </Header>
                    :
                    <NoResults />
            );
        } else {
            return <Header>Browse Movies</Header>;
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        if (searchQuery) {
            history.push(`/movies?${searchQueryParamName}=${searchQuery}&page=${pageNumber}`);
        } else {
            history.push(`/movies?page=${pageNumber}`);
        }
    };

    return (
        <Wrapper>
            {renderHeader()}
            {isLoading && !searchQuery && <LoadingSpinnerOnly />}
            {isLoading && searchQuery && <LoadingSearchResults />}
            {!isLoading && (
                <TileWrapper>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <Item key={movie.id}>
                                <StyledLink to={toMovie({ movieId: movie.id })}>
                                    <MovieTile
                                        movie={movie}
                                        genres={genres}
                                    />
                                </StyledLink>
                            </Item>
                        ))
                    ) : (
                        <></>
                    )}
                </TileWrapper>
            )}
            {movies.length < 0 ?
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
                :
                <></>
            }

        </Wrapper>
    );
};

export default Movies;