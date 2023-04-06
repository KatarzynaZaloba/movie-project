import styled from "styled-components";

export const Wrapper = styled.div`
    
`;

export const MovieList = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
`;

export const Item = styled.li`
    list-style: none;
`;

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    max-width: 324px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
`;

export const Poster = styled.img`
    max-width: 292px;
    border-radius: 5px;
    margin-bottom: 16px;
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