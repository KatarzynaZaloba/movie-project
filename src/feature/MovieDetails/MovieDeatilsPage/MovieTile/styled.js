import styled from "styled-components";
import { ReactComponent as StarIcon } from "../Rating/star.svg";

export const ContainerTile = styled.div`
max-width: 1368px;
margin: auto;
`;

export const WrapperTile = styled.article`
 background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
`;

export const ImageTitle = styled.img`
  width: 312px;
  height: 464px;
   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: auto 1fr ;
    width: 140px;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-template-columns: 1fr auto;
    width: 114px;
    height: auto;
  }
`;

export const ContentTile = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
   grid-template-columns: auto 1fr;
  }
`;

export const MovieTitle = styled.header`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 24px;
  word-break: break-word;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 18px;
    margin: 0 0 18px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 12px;
    
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 8px;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 16px;
    line-height: 1.3;
    margin-top: -16px;
    margin-bottom: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
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
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    display: none;
  }
`;

export const BlackText = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  line-height: 1.2;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 15px;
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
   @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
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
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
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
  margin: -14px;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin: 0 0 4px 0;
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
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  flex: none;
  order: 1;
  flex-grow: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
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
  order: 2;
  flex-grow: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 13px;
  }
`;

export const Description = styled.p`
  display: grid;
  font-weight: 400;
  margin: 24px 0 0 0;
  line-height: 1.6;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 17px;
    margin-top: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    margin-top: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 14px;
    margin-top: 4px;
  }
`;