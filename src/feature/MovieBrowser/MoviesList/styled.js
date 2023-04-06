import styled from "styled-components";

export const Wrapper = styled.div` 
    max-width: 1368px;
    margin: 40px auto 0;
    padding: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 24px auto 0;
        max-width: 320px;
    }
`;

export const Header = styled.h1`
    margin-bottom: 24px;
    max-width: 320px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 12px;
    }
`;