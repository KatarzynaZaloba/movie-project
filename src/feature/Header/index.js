import {
    StyledHeader,
    PositionHeader,
    WrapperHeader,
    TitleHeaderLink,
    StyledVideoIcon,
    TitleHeaderStyled,
    Navigation,
    StyledNavLink,
    SearchBar,
    StyledSearchBarIcon,
    StyledSearchIcon,
    SearchBarInput,
} from "./styled";

const Header = () => {
    return (
        <StyledHeader>
            <PositionHeader>
                <WrapperHeader>
                    <TitleHeaderLink to="/movies">
                        <StyledVideoIcon />
                        <TitleHeaderStyled>Movies Browser</TitleHeaderStyled>
                    </TitleHeaderLink>
                    <Navigation>
                        <li>
                            <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink to="/people">PEOPLE</StyledNavLink>
                        </li>
                    </Navigation>
                </WrapperHeader>
                <SearchBar>
                    <StyledSearchBarIcon>
                        <StyledSearchIcon />
                    </StyledSearchBarIcon>
                    <SearchBarInput placeholder="Search for movies..." />
                </SearchBar>
            </PositionHeader>
        </StyledHeader>
    );
};

export default Header;