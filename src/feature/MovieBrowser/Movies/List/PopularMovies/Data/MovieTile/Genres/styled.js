import styled from "styled-components";

export const GenresList = styled.div`
    list-style: none;
    text-align: center;
    max-width: 78px;
    max-height: 36px;
    padding: 8px 16px;
    background-color: ${({theme}) => theme.colors.mystic};
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;

    @media (max-width: ${({theme})=> theme.breakpoints.mobileMax}px) {
        font-size: 10px;
        line-height: 1.1;
    }
`;

export const Genre = styled.div`
    margin-bottom: 10px;

    @media (max-width: ${({theme})=>theme.breakpoints.mobileMax}) {
        margin-bottom: 12px;
    }
`;