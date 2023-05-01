import {
    ContainerTile,
    WrapperTile,
    ImageTile,
    ContentTile,
    DetailsMovie,
    MovieTitle,
    Year,
    Production,
    GreyText,
    BlackText,
    Tags,
    Tag,
    Rating,
    StyledStarIcon,
    Rate,
    Votes,
    Description,
} from "./styled";

const MovieTile = ({
    poster_path,
    original_title,
    release_date,
    production_countries,
    overview,
    vote_average,
    vote_count,
    genres,
    release_year,
}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <ContainerTile>
            <WrapperTile>
                {poster_path && (
                    <ImageTile src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Poster" />
                )}
                <ContentTile>
                    <DetailsMovie>
                        <MovieTitle>{original_title}</MovieTitle>
                        <Year>{release_year.slice(0, 4)}</Year>
                        {production_countries.length !== 0 && (
                            <Production>
                                <GreyText>Production:</GreyText>
                                <BlackText>{production_countries.map((country) => country.name).join(", ")}</BlackText>
                            </Production>
                        )}
                        {release_date && (
                            <Production>
                                <GreyText>Release date: </GreyText>
                                <BlackText>{formatDate(release_date)}</BlackText>
                            </Production>
                        )}
                        <Tags>
                            {genres.map((genre) => (
                                <Tag key={genre.id}>{genre.name}</Tag>
                            ))}
                        </Tags>
                        <Rating>
                            <StyledStarIcon /> <Rate>{vote_average}</Rate>
                            <Votes>/ 10</Votes> <Votes>{vote_count} votes</Votes>
                        </Rating>
                    </DetailsMovie>
                </ContentTile>
                <Description>
                    <div>{overview}</div>
                </Description>
            </WrapperTile>
        </ContainerTile>
    );
};

export default MovieTile;