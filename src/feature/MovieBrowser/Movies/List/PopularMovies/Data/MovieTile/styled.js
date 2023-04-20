import styled from "styled-components";

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;

    @media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
        display: grid;
        grid-template-columns: auto 1fr; 
        grid-gap: 16px;
        width: 100%;
        height: auto;
    }
`;

export const Poster = styled.img`
    height: 100%;
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 5px;
    margin-bottom: 16px;

    @media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
        width: 114px;
        height: auto;
        margin-bottom: 0;
    }
`;

export const Title = styled.h2`
    line-height: 1.3;
    font-weight: 500;
    font-size: 22px;
    margin: 0;

    @media (max-width: ${({theme})=> theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`;

export const Year = styled.p`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
    margin: 8px 0;

    @media (max-width: ${({theme})=> theme.breakpoints.mobileMax}px) {
        font-size: 13px;
    }
`;

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