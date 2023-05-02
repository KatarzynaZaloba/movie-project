import styled from "styled-components";
import { ReactComponent as star } from "./vector.svg"

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`;

export const Star = styled(star)`
    width: 24px;
    height: auto;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 20px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 16px;
    }
`;

export const Score = styled.span`
    color: ${({ theme }) => theme.colors.woodSmoke};
    margin: 0 12px;
    font-weight: 600;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        margin: 0 12px 0 10px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 10px;
    }
`;

export const Votes = styled.span`
    color: ${({ theme }) => theme.colors.waterloo};
    font-weight: 400;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 10px;
    }
`;