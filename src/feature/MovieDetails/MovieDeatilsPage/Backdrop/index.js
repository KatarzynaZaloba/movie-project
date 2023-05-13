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


const Backdrop = ({ backdrop_path, original_title, vote_average, vote_count }) => {

    return (
        <>
            {backdrop_path && (
                <BackdropContainer>
                    <BackdropWrapper>
                        <Pleksa />
                        <BackdropImage
                            src={`${imgBaseBackdrop}${backdrop_path}`}
                            alt={`poster of ${original_title}`}
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