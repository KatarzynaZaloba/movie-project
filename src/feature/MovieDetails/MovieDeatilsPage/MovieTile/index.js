import { useSelector } from "react-redux";
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

import { selectMovieDetails } from "../../movieDetailsSlice";


const MovieTile = () => {
    const movieDetails = useSelector(selectMovieDetails);
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
                {movieDetails.poster_path && (
                    <ImageTile src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                        alt={movieDetails.title} />
                )}
                <ContentTile>
                    <DetailsMovie>
                        <MovieTitle>{movieDetails.original_title}</MovieTitle>
                        <Year>{movieDetails.release_date.slice(0, 4)}</Year>
                        {movieDetails.production_countries.length !== 0 && (
                            <Production>
                                <GreyText>Production:</GreyText>
                                <BlackText>{movieDetails.production_countries.map((country) => country.name).join(", ")}</BlackText>
                            </Production>
                        )}
                        {movieDetails.release_date && (
                            <Production>
                                <GreyText>Release date: </GreyText>
                                <BlackText>{formatDate(movieDetails.release_date)}</BlackText>
                            </Production>
                        )}
                        <Tags>
                            {movieDetails.genres.map((genre) => (
                                <Tag key={genre.id}>{genre.name}</Tag>
                            ))}
                        </Tags>
                        <Rating>
                            <StyledStarIcon /> <Rate>{movieDetails.vote_average.toFixed(1)}</Rate>
                            <Votes>/ 10</Votes> <Votes>{movieDetails.vote_count} votes</Votes>
                        </Rating>
                    </DetailsMovie>
                </ContentTile>
                <Description>
                    {movieDetails.overview}
                </Description>
            </WrapperTile>
        </ContainerTile>
    );
};

export default MovieTile;