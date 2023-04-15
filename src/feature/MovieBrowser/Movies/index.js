import React from 'react'
import { Header, Wrapper } from './styled'
import List from './List'

const Movies = () => {
    return (
        <Wrapper>
            <Header>Popular movies</Header>
            <List />
        </Wrapper>
    )
}

export default Movies