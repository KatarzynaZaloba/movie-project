import styled from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;
  height: 22px;
   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Score = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;

export const Votes = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.waterloo};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;
export const StyledRating = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-bottom: 4px;
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin-bottom: 10px;
  }
`;

export const Rate = styled.span`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    line-height: 1;
    font-size: 22px;
    margin-right: 16px;
    margin-bottom: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin-bottom: 8px;
    font-size: 14px;
    margin-right: 8px;
  }
`;