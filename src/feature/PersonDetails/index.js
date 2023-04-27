
import { Wrapper, SectionTitle, DetailsWrapper } from './styled'
import Backdrop from './PersonDeatilsPage/BackdropBox'
import PersonTile from './PersonDeatilsPage/PersonTile'
import Cast from './PersonDeatilsPage/Cast'
import Crew from './PersonDeatilsPage/Crew'

const PersonDetails = () => {
    return (
        <>
            <Backdrop />
            <Wrapper>
                <DetailsWrapper>
                    <PersonTile />
                    <SectionTitle>Movies - cast (4)</SectionTitle>
                    <Cast />
                    <SectionTitle>Movies - crew (4)</SectionTitle>
                    <Crew />
                </DetailsWrapper>
            </Wrapper>
        </>
    )
}

export default PersonDetails;