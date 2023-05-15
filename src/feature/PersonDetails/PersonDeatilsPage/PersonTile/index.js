import {
    ContainerTile,
    WrapperTile,
    ImageTile,
    ContentTile,
    DetailsMovie,
    MovieTitle,
    Production,
    GreyText,
    BlackText,
    Rating,
    StyledStarIcon,
    Rate,
    Votes,
    Description,
} from "./styled";
import poster from "./poster.png"

const PersonTile = ({ person }) => {
    const { name, profile_path, birthday, place_of_birth, biography } = person;

    return (
        <>
            <ContainerTile>
                <WrapperTile>
                    <ImageTile src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="" />
                    <ContentTile>
                        <DetailsMovie>
                            <MovieTitle>{name}</MovieTitle>
                            <Production>
                                <GreyText>Date of birth:</GreyText>
                                <BlackText>{birthday}</BlackText>
                            </Production>
                            <Production>
                                <GreyText>Place of birth: </GreyText>
                                <BlackText>{place_of_birth}</BlackText>
                            </Production>
                        </DetailsMovie>
                    </ContentTile>
                    <Description>
                            {biography}
                    </Description>
                </WrapperTile>
            </ContainerTile>
        </>
    );
};

export default PersonTile;