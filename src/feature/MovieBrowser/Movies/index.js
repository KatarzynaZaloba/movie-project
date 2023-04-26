import React from 'react'
import { useState, useEffect } from 'react';
import { Wrapper } from './styled'
import List from './List'
import { Pagination } from '../../../common/Pagination'

const Movies = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=${currentPage}`
                );
                const data = await response.json();
                setTotalPages(data.total_pages);
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
            <List />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange} />
        </Wrapper>
    )
}

export default Movies