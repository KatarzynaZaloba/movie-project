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
import { toMovies, toPeople } from "../../core/routes";

export const Header = () => {

    return (
        <StyledHeader>
            <PositionHeader>
                <Wrapper>
                    <StyledTitleLink to={toMovies()}>
                        <StyledVideoIcon />
                        <TittleText>Movies Browser</TittleText>
                    </StyledTitleLink>
                    <nav>
                        <NavigationList>
                            <li>
                                <StyledNavLink to={toMovies()}>MOVIES</StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink to={toPeople()}>PEOPLE</StyledNavLink>
                            </li>
                        </NavigationList>
                    </nav>
                </Wrapper>
                <Search />
            </PositionHeader>
        </StyledHeader>
    );
};