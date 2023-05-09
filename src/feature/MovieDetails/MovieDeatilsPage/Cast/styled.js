import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    margin: 52px auto 40px;
    padding: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0 12px;
        margin: 0;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    gap: 24px;
    padding: 12px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        grid-template-columns: repeat(auto-fill, minmax(120px,1fr));
    }
`;

export const StyledLink = styled(Link)`
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
    width: 200px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    transition: 0.5s;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;
    margin-right: 24px;
    margin-bottom: 24px;
    
    &:hover{
        transform: scale(1.05);
        box-shadow: ${({ theme }) => theme.hoverShadow};
    }
    &:active{
        box-shadow: ${({ theme }) => theme.activeShadow};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        padding: 8px;
    }
`;

export const Poster = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2/3;
    margin-bottom: 16px;
`;

export const NoPoster = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2/3;
    margin-bottom: 16px;
`;

export const ActorName = styled.h2`
    text-align: center;
    word-wrap: wrap;
    line-height: 1.3;
    font-weight: 500;
    font-size: 22px;
    margin: 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        font-size: 16px;
        padding-bottom: 10px;
    }
`;

export const ActorRole = styled.p`
    text-align: center;
    word-wrap: wrap;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.stormGrey};
    margin: 0px 10px 0px 0px;
    line-height: 1.5;    

`;