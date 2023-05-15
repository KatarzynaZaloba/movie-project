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


const MovieTile = ({movie}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <ContainerTile>
            <WrapperTile>
                {movie.poster_path && (
                    <ImageTile src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title} />
                )}
                <ContentTile>
                    <DetailsMovie>
                        <MovieTitle>{movie.original_title}</MovieTitle>
                        <Year>{movie.release_date.slice(0, 4)}</Year>
                        {movie.production_countries.length !== 0 && (
                            <Production>
                                <GreyText>Production:</GreyText>
                                <BlackText>{movie.production_countries.map((country) => country.name).join(", ")}</BlackText>
                            </Production>
                        )}
                        {movie.release_date && (
                            <Production>
                                <GreyText>Release date: </GreyText>
                                <BlackText>{formatDate(movie.release_date)}</BlackText>
                            </Production>
                        )}
                        <Tags>
                            {movie.genres.map((genre) => (
                                <Tag key={genre.id}>{genre.name}</Tag>
                            ))}
                        </Tags>
                        <Rating>
                            <StyledStarIcon /> <Rate>{movie.vote_average.toFixed(1)}</Rate>
                            <Votes>/ 10</Votes> <Votes>{movie.vote_count} votes</Votes>
                        </Rating>
                    </DetailsMovie>
                </ContentTile>
                <Description>
                    {movie.overview}
                </Description>
            </WrapperTile>
        </ContainerTile>
    );
};

export default MovieTile;