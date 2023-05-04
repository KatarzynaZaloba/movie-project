import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1368px;
    margin: 56px auto 0;
    margin: 0 auto;
    padding: 0 16px;
    margin-bottom: 100px;
`;

export const Header = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.woodSmoke};
    margin-left: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 20px;
    }
`;