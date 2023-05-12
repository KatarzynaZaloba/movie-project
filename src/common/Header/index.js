import {
    StyledHeader,
    StyledTitleLink,
    PositionHeader,
    Wrapper,
    StyledVideoIcon,
    TittleText,
    NavigationList,
    StyledNavLink,
} from "./styled";
import { Search } from "./Search";

export const Header = () => {

    return (
        <StyledHeader>
            <PositionHeader>
                <Wrapper>
                    <StyledTitleLink to="/movies">
                        <StyledVideoIcon />
                        <TittleText>Movies Browser</TittleText>
                    </StyledTitleLink>
                    <nav>
                        <NavigationList>
                            <li>
                                <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to="/people">PEOPLE</StyledNavLink>
                            </li>
                        </NavigationList>
                    </nav>
                </Wrapper>
                <Search />
            </PositionHeader>
        </StyledHeader>
    );
};