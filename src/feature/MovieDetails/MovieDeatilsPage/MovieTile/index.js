import {
    BlackText,
    ContentTile,
    ContainerTile,
    MovieTitle,
    ImageTile,
    Rate,
    Rating,
    Year,
    Description,
    Tags,
    Votes,
    StyledStarIcon,
    WrapperTile,
    Tag,
    GreyText,
    Production,
    DetailsMovie,
} from "./styled";
import poster from "./poster.png"

const MovieTile = () => {
    return (
        <>
            <ContainerTile>
                <WrapperTile>
                    <ImageTile src={poster} alt="" />
                    <ContentTile>
                        <DetailsMovie>
                            <MovieTitle>Mulan</MovieTitle>
                            <Year>2020</Year>
                            <Production>
                                <GreyText>Production:</GreyText>
                                <BlackText>China, USA</BlackText>
                            </Production >
                            <Production>
                                <GreyText>Release date: </GreyText>
                                <BlackText>24.10.2020</BlackText>
                            </Production>
                            <Tags>
                                <Tag>Action</Tag>
                                <Tag>Adventure</Tag>
                                <Tag>Drama</Tag>
                            </Tags>
                            <Rating>
                                <StyledStarIcon /> <Rate>7,8</Rate>
                                <Votes>/ 10</Votes> <Votes>335 votes</Votes>
                            </Rating>
                        </DetailsMovie>
                    </ContentTile>
                    <Description>
                        <div>
                            A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father.
                        </div>
                    </Description>
                </WrapperTile>
            </ContainerTile>
        </>
    );
};
export default MovieTile