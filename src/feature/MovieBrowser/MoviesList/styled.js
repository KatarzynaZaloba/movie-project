import styled from "styled-components";

export const Wrapper = styled.div` 
    max-width: 1368px;
    margin: 40px auto 0;
    padding: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 24px auto 0;
        max-width: 288px;
        width: 100%;
        padding: 0;
    }
`;

export const Header = styled.h1`
    margin-bottom: 24px;
    max-width: 320px;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 12px;
        font-size: 18px;
    }
`;