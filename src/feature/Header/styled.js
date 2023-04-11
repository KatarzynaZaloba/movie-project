import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as VideoIcon } from "./images/cameraIcon.svg";
import { ReactComponent as SearchIcon } from "./images/searchIcon.svg";


export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.black};
  padding: 24px 16px;
  color: ${({ theme }) => theme.colors.white};
   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
      padding: 16px;
     }
  `;

export const PositionHeader = styled.div`
  max-width: 1368px;
  margin: auto;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: auto minmax(205px, 432px);
     @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-template-columns: 1fr;
    gap: 24px;
     }
  `;

export const WrapperHeader = styled.div`
  display: flex;
  gap: 80px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
   justify-content: space-between;
    gap: 20px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  `;

export const TitleHeaderLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  gap: 12px;
  align-items: center;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    gap: 8px;
      }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  flex-shrink: 0;
   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 30px;
     }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
     width: 20px;
  }
`;

export const TitleHeaderStyled = styled.div`
  font-size: 24px;
  font-weight: 500;
  flex-shrink: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
   font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
   font-size: 16px;
  }
   @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
   font-size: 16px;
  }
 `;

export const Navigation = styled.nav`
 list-style: none;
 margin: 0;
 padding: 0;
 display: flex;
 grid-gap: 16px;  
 @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
   grid-template-columns: 1fr;
   grid-gap: 20px;
   margin-left: 30px;
    }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
   grid-template-columns: 1fr;
   grid-gap: 20px;
   margin-left: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {

   grid-gap: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 24px;
  display: block; 
  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
  &.hover {
    cursor: pointer;
  }
   @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
  `;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSearchIcon = styled(SearchIcon)`
 color: ${({ theme }) => theme.colors.waterloo};
@media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
   height: 44px;
    width: 35px;
}
`;

export const StyledSearchBarIcon = styled.div`
  width: 50px;
  height: 44px;
  color: ${({ theme }) => theme.colors.waterloo};
  background-color: ${({ theme }) => theme.colors.white};  
  border-radius: 32px 0 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
 `;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-left: none;
  border-radius: 0 33px 33px 0;
    &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
  }  
@media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
  height: 44px;
  width: 100%;
  padding: 10px;
}
`;