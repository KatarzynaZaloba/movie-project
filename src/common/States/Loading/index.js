import { LoadingContainer, LoadingWrapper, LoadingText, LoadingSpinner } from "./styled";

const Loading = () => (
    <>
        <LoadingContainer>
            <LoadingWrapper>
                <LoadingText>Search result for "Mulan"</LoadingText>
                <LoadingSpinner />
            </LoadingWrapper>
        </LoadingContainer>
    </>
);

export default Loading;