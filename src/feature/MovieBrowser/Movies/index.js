import React from 'react'
import { useState, useEffect } from 'react';
import { Wrapper } from './styled'
import List from './List'
import { Pagination } from '../../../common/Pagination'

const Movies = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

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