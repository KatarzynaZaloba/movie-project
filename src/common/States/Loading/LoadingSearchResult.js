import { useQueryParameter } from "../../../core/QueryBox/useQueryParameter";
import { searchQueryParamName } from "../../../core/QueryBox/queryParamName"
import { LoadingContainer, LoadingWrapper, LoadingText, StyledLoadingSpinner } from "./styled";

const LoadingSearchResults = () => {
    const query = useQueryParameter(searchQueryParamName);

    return (
        <LoadingContainer>
            <LoadingWrapper>
                <LoadingText title={!query ? "" : `Search results for "${query}"`} />
                <StyledLoadingSpinner />
            </LoadingWrapper>
        </LoadingContainer>
    );
};

export default LoadingSearchResults;