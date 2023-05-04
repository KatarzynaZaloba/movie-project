import { useSelector } from "react-redux";
import { selectMovieDetails } from "../../movieDetailsSlice";
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
            {backdrop_path && (
                <BackdropContainer>
                    <BackdropWrapper>
                        <Pleksa />
                        <BackdropImage
                            src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                            alt=""
                        />
                        <BackdropInfoContainer>
                            <LongTitle>{original_title}</LongTitle>
                            <Rating>
                                <StarIcon src={star} />
                                <RateBig>{vote_average.toFixed(1)}</RateBig>
                                <RateSmall>/ 10</RateSmall>
                                <Votes>{vote_count} votes</Votes>
                            </Rating>
                        </BackdropInfoContainer>
                    </BackdropWrapper>
                </BackdropContainer>
            )}
        </>
    );
};

export default Backdrop;