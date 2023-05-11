import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    margin: 52px auto 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 24px;
    padding: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 0;
        grid-template-columns: repeat(auto-fill, minmax(120px,1fr));
        padding: 0 12px;
    }
`;

export const List = styled.div`
`

export const StyledLink = styled(Link)`
    outline: 1px solid;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    &:hover {
        text-decoration: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 100%;
    }
`;

export const Tile = styled.div`
    max-width: 200px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    transition: 0.5s;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;
    
    &:hover{
        transform: scale(1.05);
        box-shadow: ${({ theme }) => theme.hoverShadow};
    }
    &:active{
        box-shadow: ${({ theme }) => theme.activeShadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 8px;
    }
`;

export const Poster = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2/3;
    margin-bottom: 8px;
    object-fit: cover;
`;

export const NoPoster = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2/3;
    margin-bottom: 16px;
    object-fit: cover;
`;

export const ActorName = styled.h2`
    text-align: center;
    word-wrap: wrap;
    line-height: 1.3;
    font-weight: 500;
    font-size: 22px;
    margin: 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        padding-bottom: 0px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 14px;
    }
`;

export const ActorRole = styled.p`
    text-align: center;
    word-wrap: wrap;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.stormGrey};
    line-height: 1.5;    

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
        padding-bottom: 0px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 13px;
    }

`;