import React from 'react'
import { Score, Star, Votes, Wrapper } from './styled'

const Rating = ({ rating, votes }) => {
    return (
        <Wrapper>
            <Star />
            <Score>{rating}</Score>
            <Votes>{votes} votes</Votes>
        </Wrapper>
    )
}

export default Rating