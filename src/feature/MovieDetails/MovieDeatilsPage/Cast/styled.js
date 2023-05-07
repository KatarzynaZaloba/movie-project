import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 1368px;
  width: 100%;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  grid-gap: 24px;
@media(max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: repeat(4, 1fr);
}
@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(3, 1fr);
}
@media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 12px auto 0;
}
`;

export const List = styled.div`
    list-style: none;
    
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  width: 208px;
  height: 100%;
  box-shadow: ${({ theme }) => theme.hoverShadow};
  border-radius: 5px;
  font-size: 22px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.activeShadow};
    transform: scale(1.05);
  }
`;

export const Poster = styled.img`
    max-width: 177px;
    height: 264px;
    border-radius: 5px;
    margin-bottom: 16px;
    `;

export const NoPoster = styled.img`
    max-width: 177px;
    height: 264px;
    border-radius: 5px;
    margin-bottom: 16px;
    `;

export const ActorName = styled.p`
    text-align: center;
    word-wrap: wrap;
    line-height: 1.3;
    font-weight: 500;
    font-size: 22px;
    margin: 0;
`;
export const ActorRole = styled.p`
text-align: center;
    word-wrap: wrap;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.stormGrey};
    margin: 0px 10px 0px 0px;
    line-height: 1.5;    

`;