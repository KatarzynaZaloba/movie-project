import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
    gap: 24px;
    @media (max-width: ${({theme})=>theme.breakpoints.small}px) {
        grid-template-columns: minmax(200px, 1fr);
    }
`;

export const Item = styled.div`
    text-decoration: none;
    margin: 0;
    @media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
        width: 100%;
    }
`;