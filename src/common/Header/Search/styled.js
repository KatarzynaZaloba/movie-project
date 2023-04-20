import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../images/searchIcon.svg";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.div`
  color: ${({ theme }) => theme.colors.waterloo};
  background-color: ${({ theme }) => theme.colors.white};
  height: 44px;
  width: 50px;
  border-radius: 32px 0 0 33px;
  display: flex;
  align-items: center;
  justify-content: right;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 44px;
    width: 35px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
  }
`;

export const SearchBarInput = styled.input`
  height: 44px;
  width: 100%;
  padding: 19px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-left: none;
  border-radius: 0 33px 33px 0;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 44px;
    width: 100%;
    padding: 10px;
  }
`;