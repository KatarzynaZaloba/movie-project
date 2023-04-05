import React from 'react'
import { Header, Wrapper } from './styled'
import List from './List'

const MoviesList = () => {
    return (
        <Wrapper>
            <Header>Popular movies</Header>
            <List/>
        </Wrapper>
    )
}

export default MoviesList