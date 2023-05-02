import React from 'react'
import { useState, useEffect } from 'react';
import { Wrapper } from './styled'
import List from './List'
import { Pagination } from '../../../common/Pagination'

const Movies = () => {
    const [movie, setMovie] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&page=${currentPage}`
                );
                const data = await response.json();
                const lastPage = (data.total_pages > 500 ? 500 : data.totalPages )
                setMovie(data.results);
                setTotalPages(lastPage);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPopularMovies();
    }, [currentPage]);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);

    };
    return (
        <Wrapper>
            <List
            movies={movie} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange} />
        </Wrapper>
    )
}

export default Movies;