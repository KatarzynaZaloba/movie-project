import React from 'react'
import { Wrapper } from './styled'
import List from './List'
import { Pagination } from '../../../common/Pagination'

const Movies = () => {
    return (
        <Wrapper>
            <List />
            <Pagination />
        </Wrapper>
    )
}

export default Movies