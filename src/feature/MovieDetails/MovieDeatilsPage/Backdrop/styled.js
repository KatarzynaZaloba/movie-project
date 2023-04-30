import styled from "styled-components";
import { ReactComponent as Star } from "../image/star.svg";

export const BackdropContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
        @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
       margin-right: -70px;
    }
        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
       margin-right: -220px;
    }
        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
       margin-right: -180px;
    }
        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
       margin-right: -80px;
    }
      @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
       margin-right: -210px;
    }
`;

export const BackdropWrapper = styled.div`
    position: relative;
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
`;

export const Pleksa = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 45px 45px rgba(0, 0, 0, 1);
     @media (max-width: ${({ theme }) => theme.breakpoints.max}px) {
        box-shadow: inset 0px 0px 40px 40px rgba(0, 0, 0, 1);
    }
     @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        box-shadow: inset 0px 0px 35px 30px rgba(0, 0, 0, 1);
    }
     @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 1);
    }
      @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        box-shadow: inset 0px 0px 25px 20px rgba(0, 0, 0, 1);
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        box-shadow: inset 0px 0px 25px 15px rgba(0, 0, 0, 1);
    }
`;

export const BackdropImage = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const BackdropInfoContainer = styled.div`
    padding-left: 25px;
    margin-bottom: clamp(10px, 3vw, 56px);
    display: flex;
    flex-direction: column;
    position: absolute;
    color: ${({ theme }) => theme.colors.white};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-left: 16px;
        }
`;

export const LongTitle = styled.header`
    font-weight: 600;
    font-size: clamp(24px, 5vw, 64px);
    margin-bottom: clamp(8px, 2vw, 25px);
    margin-top: 0;
`;

export const Rating = styled.div`
    margin-bottom: 18px;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-gap: 17px 8px;
    align-items: end;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: flex;
        align-items: center;
        margin: 0 8px 0 0;
    }
`;

export const StarIcon = styled(Star)`
    width: clamp(16px, 3vw, 40px);
    height: clamp(16px, 3vw, 40px);
`;

export const RateBig = styled.span`
    font-weight: 500;
    font-size: clamp(14px, 3vw, 30px);
    line-height: 1;
    margin: 3px;
`;

export const RateSmall = styled.span`
    font-size: clamp(10px, 2vw, 16px);
`;

export const Votes = styled.span`
    margin-left: 0;
    grid-row: 2;
    grid-column: 1 / 5;
    font-size: clamp(10px, 2vw, 16px);
`;