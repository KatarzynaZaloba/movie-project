import React from 'react'
import { Score, Star, Votes, Wrapper } from './styled'

const Rating = ({ rating, votes }) => {
    return (
        <Wrapper>
            <Star />
            <Score>{rating.toFixed(1)}</Score>
            <Votes>{votes} votes</Votes>
        </Wrapper>
    )
}

export default Rating