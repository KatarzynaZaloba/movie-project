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

    const onInputChange = () => {
        const inputValue = inputRef.current.value.trim() !== "" ? inputRef.current.value : undefined;

        if (inputValue) {
            const searchEndpoint = location.pathname.includes("/people")
                ? searchPeople
                : searchMovies;

            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                searchEndpoint(inputValue).then((results) => {
                    const path = location.pathname.includes("/people")
                        ? toPerson({ personId: "" })
                        : toMovie({ movieId: "" });

                    history.push({
                        pathname: path,
                        search: `?${searchQueryParamName}=${inputValue}`,
                    });

                    if (results.length > 0) {
                        console.log("Found movie result:", results[0]);
                        const movieId = results[0].id;
                        if (location.pathname.includes("/people")) {
                            history.push(toPerson({ personId: movieId }));
                        } else {
                            history.push(toMovie({ movieId }));
                        }
                    }
                });
            }, 1000);
        }

        replaceQueryParameter(searchQueryParamName, inputValue);
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
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        const searchEndpoint = location.pathname.includes("person")
                            ? searchPeople
                            : searchMovies;

                        searchEndpoint(inputRef.current.value).then((results) => {
                            if (results.length > 0) {
                                const movieId = results[0].id;
                                if (location.pathname.includes("/people")) {
                                    history.push(toPerson({ personId: movieId }));
                                } else {
                                    history.push(toMovie({ movieId }));
                                }
                            }
                        });
                    }
                }}
                onChange={onInputChange}
            />
        </SearchWrapper>
    );
};