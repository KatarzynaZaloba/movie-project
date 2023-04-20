import { SearchWrapper, SearchBar, StyledSearchIcon, SearchBarInput } from "./styled";

export const Search = () => {
    return (
        <SearchWrapper>
            <SearchBar>
                <StyledSearchIcon />
            </SearchBar>
            <SearchBarInput
                placeholder="Search for people..."
            />
        </SearchWrapper>
    )
}