import { useSelector } from "react-redux";
import { selectMovieDetails } from "../../movieDetailsSlice";
import { imgBaseBackdrop } from "../../apiMovieDetails"
import {
    BackdropContainer,
    Pleksa,
    BackdropImage,
    BackdropWrapper,
    BackdropInfoContainer,
    StarIcon,
    Rating,
    RateBig,
    RateSmall,
    Votes,
    LongTitle,
} from "./styled";
import star from "../image/star.svg";


const Backdrop = () => {
    const movieDetails = useSelector(selectMovieDetails);

    return (
        <>
            {movieDetails.backdrop_path && (
                <BackdropContainer>
                    <BackdropWrapper>
                        <Pleksa />
                        <BackdropImage
                            src={`${imgBaseBackdrop}${movieDetails.backdrop_path}`}
                            alt={`poster of ${movieDetails.original_title}`}
                        />
                        <BackdropInfoContainer>
                            <LongTitle>{movieDetails.original_title}</LongTitle>
                            <Rating>
                                <StarIcon src={star} />
                                <RateBig>{movieDetails.vote_average.toFixed(1)}</RateBig>
                                <RateSmall>/ 10</RateSmall>
                                <Votes>{movieDetails.vote_count} votes</Votes>
                            </Rating>
                        </BackdropInfoContainer>
                    </BackdropWrapper>
                </BackdropContainer>
            )}
        </>
    );
};

export default Backdrop;