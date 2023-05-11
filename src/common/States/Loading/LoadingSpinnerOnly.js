import { LoadingContainer, LoadingWrapper, StyledLoadingSpinner } from "./styled";

const LoadingSpinnerOnly = () => {
    return (
        <LoadingContainer>
            <LoadingWrapper>
                <StyledLoadingSpinner />
            </LoadingWrapper>
        </LoadingContainer>
    );
};

export default LoadingSpinnerOnly;