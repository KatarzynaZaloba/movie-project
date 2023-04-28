import { useContext } from "react";
import { SearchResultsContext } from "../../../core/useSearchResults";
import { useQueryParameter } from "../../../core/QueryBox/useQueryParameter";
import { searchQueryParamName } from "../../../core/QueryBox/queryParamName";
import { LoadingContainer, LoadingWrapper, LoadingText, LoadingSpinner } from "./styled";

export const Loading = () => {
    const query = useQueryParameter(searchQueryParamName);
    const { isLoading } = useContext(SearchResultsContext);

    if (!isLoading) {
        return null;
    }

    return (
        <LoadingContainer>
            <LoadingWrapper>
                <LoadingText title={!query ? "" : `Search results for "${query}"`} />
                <LoadingSpinner />
            </LoadingWrapper>
        </LoadingContainer>
    );
};

export default Loading;

