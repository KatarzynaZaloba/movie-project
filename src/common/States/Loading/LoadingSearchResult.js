import { useQueryParameter } from "../../../core/QueryBox/useQueryParameter";
import { searchQueryParamName } from "../../../core/QueryBox/queryParamName"
import { LoadingContainer, LoadingWrapper, LoadingText, StyledLoadingSpinner } from "./styled";

const LoadingSearchResults = () => {
    const query = useQueryParameter(searchQueryParamName);

    return (
        <>
            <LoadingText>{!query ? "" : `Search results for "${query}"`}</LoadingText>
            <LoadingContainer>
                <LoadingWrapper>
                    <StyledLoadingSpinner />
                </LoadingWrapper>
            </LoadingContainer>
        </>
    );
};

export default LoadingSearchResults;