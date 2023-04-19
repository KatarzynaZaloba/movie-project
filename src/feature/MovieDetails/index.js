
import { Wrapper, SectionTitle, DetailsWrapper } from './styled'
import Backdrop from './MovieDeatilsPage/BackdropBox'
import MovieTile from './MovieDeatilsPage/MovieTile'
import Cast from './MovieDeatilsPage/Cast'
import Crew from './MovieDeatilsPage/Crew'

const MovieDetails = () => {
    return (
        <>
            <Backdrop />
            <Wrapper>
                <DetailsWrapper>
                    <MovieTile />
                    <SectionTitle>Cast</SectionTitle>
                    <Cast />
                    <SectionTitle>Crew</SectionTitle>
                    <Crew />
                </DetailsWrapper>
            </Wrapper>
        </>
    )
}

export default MovieDetails