import { imgBackdrop } from "../../../../core/APIBox/apiSource";
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

const Backdrop = ({ backdrop_path, title, vote_count, vote_average }) => {
    return (
        <>
            <BackdropContainer>
                <BackdropWrapper >
                    <Pleksa />
                    <BackdropImage
                        src={`${imgBackdrop}${backdrop_path}`}
                        alt="" />
                    <BackdropInfoContainer>
                        <LongTitle>{title}</LongTitle>
                        <Rating>
                            <StarIcon src={star} />
                            <RateBig>{vote_average.toFixed(1)}</RateBig>
                            <RateSmall>/ 10</RateSmall>
                            <Votes>{vote_count} votes</Votes>
                        </Rating>
                    </BackdropInfoContainer>
                </BackdropWrapper>
            </BackdropContainer>
        </>
    );
};

export default Backdrop;