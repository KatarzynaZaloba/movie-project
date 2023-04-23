import styled from "styled-components";
import { ReactComponent as StarIcon } from "../Rating/star.svg";

export const ContainerTile = styled.div`
 max-width: 1368px;
 margin: auto;
`;

export const WrapperTile = styled.article`
  margin-top: 64px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  padding: 40px;
  display: grid;
  justify-items: center;
  grid-column-gap: 36px;
  grid-template-columns: minmax(114px, 312px) auto;
  grid-template-areas:
    "poster content"
    "poster description"
    "poster area";
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: -20px;
    margin-right: -16px;
    grid-gap: 20px;
    grid-template-areas:
      "poster content"
      "poster content"
      "description description";
    grid-template-columns: 188px auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-top: -20px;
    margin-right: -98px;
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
margin: 52px;
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
margin-top: 48px;
margin-left: 0px; 
grid-area: content;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: -22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-bottom: -12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin-bottom: -10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-bottom: -8px;
  }
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
    margin-left: -6px;
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

export const Year = styled.p`
 font-weight: 400;
 font-size: 22px;
 line-height: 1.2;
 display: flex;
 align-items: center;
 margin: 24px 0;
 color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    line-height: 1.3;
    margin-top: -16px;
    margin-bottom: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 13px;
    margin-top: 0;
    margin-bottom: 8px;
  }
`;

export const Production = styled.div`
 margin: 0px 0px 8px 0px;
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

export const Tags = styled.ul`
 list-style: none;
 padding-left: 0px;
 margin: 16px -8px;
 display: flex;
 flex-wrap: wrap;
   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
  }
`;

export const Tag = styled.li`
 background: ${({ theme }) => theme.colors.mystic};
 height: 30px;
 padding: 8px 16px;
 font-weight: 400;
 font-size: 14px;
 line-height: 1.4;
 margin: 8px;
 border-radius: 5px;
 border: none;
 display: flex;
 flex-direction: row;
 align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const Rating = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 padding: 0px;
 gap: 12px;
 margin: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
     margin: 0px;
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
 color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin-top: -24px;
    margin-bottom: -12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 16px;
    margin-top: -20px;
    margin-bottom: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 16px;
    margin-top: -20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
      font-size: 14px;
  }
`;