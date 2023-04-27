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

const Backdrop = () => {
    return (
        <>
            <BackdropContainer>
                <BackdropWrapper >
                    <Pleksa />
                    <BackdropImage
                        src="https://www.themoviedb.org/t/p/original/5Hjp9BxalM0eDviMcD8gdHplGbT.jpg"
                        alt="Mulan" />
                    <BackdropInfoContainer>
                        <LongTitle>Mulan long title</LongTitle>
                        <Rating>
                            <StarIcon />
                            <RateBig>7,8</RateBig>
                            <RateSmall>/ 10</RateSmall>
                            <Votes>335 votes</Votes>
                        </Rating>
                    </BackdropInfoContainer>
                </BackdropWrapper>
            </BackdropContainer>
        </>
    );
};

export default Backdrop;