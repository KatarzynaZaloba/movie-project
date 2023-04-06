import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
    gap: 24px;
`;

export const Item = styled.div`
    width: 100%;
    height: 100%;
    
`;

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;

    @media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
        display: flex;
        flex-direction: row;
    }
`;

export const Poster = styled.img`
    height: 100%;
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 5px;
    margin-bottom: 16px;

    @media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
        display: grid;
        grid-template-columns: auto 1fr;
        width: 200px;
        height: auto;
        margin-bottom: 0;
        margin-right: 16px;
    }
`;

export const Details = styled.div`

`;

export const Title = styled.h2`
    line-height: 1.3;
    font-weight: 500;
    font-size: 22px;
    margin: 0;
`;

export const Year = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.waterloo};
    margin: 8px 0;
`;

export const Genres = styled.ul`
    padding: 0;
`;

export const Genre = styled.li`
    list-style: none;
    text-align: center;
    max-width: 78px;
    max-height: 36px;
    padding: 8px 16px;
    margin-bottom:40px ;
    background-color: ${({theme}) => theme.colors.mystic};
    border-radius: 5px;
`;