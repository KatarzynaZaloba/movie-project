import { useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { searchMovies, searchPeople } from "./searchApi";
import { SearchWrapper, SearchBar, StyledSearchIcon, SearchBarInput } from "./styled";
import { toMovie, toPerson } from "../../../core/routes";
import { useQueryParameter, useReplaceQueryParameter } from "../../../core/QueryBox/useQueryParameter";
import { searchQueryParamName } from "../../../core/QueryBox/queryParamName";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const inputRef = useRef(null);
    const timerRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = query || '';
    }, [query]);

    const selectInputText = () => {
        inputRef.current.select();
    };

    const searchEndpoint = location.pathname.includes("/people")
        ? searchPeople
        : searchMovies;

    const performSearch = (value) => {
        if (value) {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                searchEndpoint(value).then((results) => {
                    setSearchQuery(value);
                    setSearchResults(results);
                    setSearchLoading(false);

                    const path = location.pathname;
                    history.push({
                        pathname: path,
                        search: `?${searchQueryParamName}=${value}`,
                    });

                    if (results.length > 0) {
                        const movieId = results[0].id;
                        if (location.pathname.includes("/people")) {
                            history.push(toPerson({ personId: movieId }));
                        } else {
                            history.push(toMovie({ movieId }));
                        }
                    }
                }).catch((error) => {
                    setSearchError(error);
                    setSearchLoading(false);
                });
                setSearchLoading(true);
            }, 1000);
        } else {
            setSearchQuery('');
            setSearchResults([]);
        }
    };
    const onInputChange = () => {
        const inputValue = inputRef.current.value.trim() !== "" ? inputRef.current.value : undefined;

        replaceQueryParameter(searchQueryParamName, inputValue);

        performSearch(inputValue);
    };

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            const inputValue = inputRef.current.value.trim() !== "" ? inputRef.current.value : undefined;

            replaceQueryParameter(searchQueryParamName, inputValue);

            performSearch(inputValue);
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
                onKeyPress={onKeyPress}
            />
        </SearchWrapper>
    );
};