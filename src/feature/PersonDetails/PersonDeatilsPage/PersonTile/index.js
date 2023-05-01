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

const PersonTile = () => {
    return (
        <>
            <ContainerTile>
                <WrapperTile>
                    <ImageTile src={poster} alt="" />
                    <ContentTile>
                        <DetailsMovie>
                            <MovieTitle>Liu Yifei</MovieTitle>
                            <Production>
                                <GreyText>Date of birth:</GreyText>
                                <BlackText>25.08.1987</BlackText>
                            </Production >
                            <Production>
                                <GreyText>Place of birth: </GreyText>
                                <BlackText>Wuhan, Hubei, China</BlackText>
                            </Production>
                        </DetailsMovie>
                    </ContentTile>
                    <Description>
                        <div>
                        Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.
                        </div>
                    </Description>
                </WrapperTile>
            </ContainerTile >
        </>
    );
};
export default PersonTile;