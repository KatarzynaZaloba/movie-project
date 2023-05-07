import styled from "styled-components";
import { ReactComponent as StarIcon } from "../Rating/star.svg";

export const ContainerTile = styled.div`
 max-width: 1368px;
 max-height: 100%;
 margin: 56px auto;
`;

export const WrapperTile = styled.article`
  margin-top: 64px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  padding: 40px 40px 40px 40px;
  display: grid;
  justify-items: center;
  grid-column-gap: 36px;
  grid-template-columns: minmax(114px, 312px) auto;
  grid-template-areas:
    "poster content"
    "poster description"
    "poster area";
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 20px;
    grid-template-areas:
      "poster content"
      "poster content"
      "description description";
    grid-template-columns: 188px auto;
    padding: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-left: 10px;
    grid-gap: 38px;
    grid-template-areas:
      "poster content"
      "poster content"
      "description description";
    grid-template-columns: 114px auto;
  }
`;

export const ImageTile = styled.img`
margin: 0px;
width: 100%;
border-radius: 5px;
grid-area: poster;
`;

export const ContentTile = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
justify-self: left;
margin-bottom: 24px;
margin-left: 0px; 
grid-area: content;
`;

export const DetailsMovie = styled.div`
font-size: 18px;
display: flex;
flex-direction: column;
justify-self: left;
gap: 8px;
   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      gap: 24px;
      }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    gap: 16px; 
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    gap: 4px;   
     }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    gap: 0px;
    margin-right: 0px;
  }
`;

export const MovieTitle = styled.header`
font-weight: 600;
font-size: 36px;
word-break: break-word;
color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
    margin: 0 0 18px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 18px;
    margin: 0 0 8px 0;
  }
`;


export const Production = styled.div`
 margin: 0px;
 display: flex;
 flex-direction: row;
`;

export const GreyText = styled.p`
 font-weight: 400;
 font-size: 18px;
 color: ${({ theme }) => theme.colors.stormGrey};
 margin: 0px 10px 0px 0px;
 line-height: 1.2;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 12px;
  }
`;

export const BlackText = styled.span`
 font-weight: 400;
 font-size: 18px;
 color: ${({ theme }) => theme.colors.black};
 margin: 0;
 line-height: 1.2;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 12px;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
 width: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 12px;
  }
`;

export const Rate = styled.p`
 font-weight: 600;
 font-size: 22px;
 line-height: 1.3;
 color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 13px;
  }
`;

export const Votes = styled.p`
 font-weight: 400;
 font-size: 14px;
 line-height: 1.2;
 display: flex;
 align-items: center;
 color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 10px;
  }
`;

export const Description = styled.p`
 font-size: 20px;
 line-height: 160%;
 margin: 0;
 grid-area: description;
 word-wrap: wrap;
 text-align: justify;
 color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
      font-size: 14px;
  }
`;