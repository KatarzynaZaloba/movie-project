import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
    gap: 24px;
`;

export const Item = styled.div`
    width: 100%;
    height: 100%;

    @media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
        max-width: 288px;
    }
`;

