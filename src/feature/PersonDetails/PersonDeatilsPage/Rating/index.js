import { Score, StyledRating, StyledStarIcon, Votes, Wrapper, Rate } from './styled'

const Rating = () => {
    return (
        <Wrapper>
            <StyledStarIcon />
            <Rate>
                <StyledRating>
                    <Votes>
                        <Score>
                            7,8
                        </Score>
                        / 10
                    </Votes>

                    <Votes> 335 votes</Votes>
                </StyledRating>
            </Rate>
        </Wrapper >
    )
}

export default Rating