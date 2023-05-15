import { useRef, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { searchMovies, searchPeople } from "./searchApi";
import { SearchWrapper, SearchBar, StyledSearchIcon, SearchBarInput } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "../../../core/QueryBox/useQueryParameter";
import { searchQueryParamName } from "../../../core/QueryBox/queryParamName";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const inputRef = useRef(null);
    const timerRef = useRef(null);
    const [hasNoResults, setHasNoResults] = useState(false);

    useEffect(() => {
        inputRef.current.value = query || '';
        inputRef.current.focus();
    }, [query, inputRef]);

    const selectInputText = () => {
        inputRef.current.select();
    };

    const executeSearch = (searchValue) => {
        const searchEndpoint = location.pathname.includes("/people")
            ? searchPeople
            : searchMovies;

        searchEndpoint(searchValue).then((results) => {
            if (results.length > 0) {
                replaceQueryParameter(searchQueryParamName, searchValue);
                setHasNoResults(false);
            } else {
                replaceQueryParameter(searchQueryParamName, '');
                setHasNoResults(true);
            }

            history.push({
                pathname: location.pathname,
                search: `?${searchQueryParamName}=${searchValue}`
            });
        });
    };

    const onInputChange = (event) => {
        const inputValue = event.target.value.trim();

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (inputValue) {
            timerRef.current = setTimeout(() => {
                executeSearch(inputValue);
            }, 1000);
        } else {
            executeSearch('');
        }
    };

    return (
        <SearchWrapper>
            <SearchBar>
                <StyledSearchIcon />
            </SearchBar>
            <SearchBarInput
                placeholder={
                    location.pathname.includes("movie")
                        ? "Search for movies..."
                        : "Search for people..."
                }
                defaultValue={query || ''}
                ref={inputRef}
                onFocus={selectInputText}
                onChange={onInputChange}
            />
        </SearchWrapper>
    );
};
