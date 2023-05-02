import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1368px;
`;

export const PeopleList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    gap: 24px;
    padding: 12px;
    
    @media (max-width: ${({theme})=>theme.breakpoints.mobileMin}px) {
        grid-template-columns: repeat(auto-fill, minmax(120px,1fr));
    }
    @media (max-width: ${({theme})=>theme.breakpoints.small}px) {
        grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
    }
`;

export const Item = styled.li`
    list-style: none;
`;

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    transition: 0.5s;
    &:hover{
        transform: scale(1.05);
        box-shadow: ${({ theme }) => theme.hoverShadow};
    }
    &:active{
        box-shadow: ${({ theme }) => theme.activeShadow};
    }
`;

export const Poster = styled.img`
    max-width: 100%;
    border-radius: 5px;
    margin-bottom: 16px;
    z-index: -1;
`;

export const Title = styled.h2`
    text-align: center;
    word-wrap: wrap;
    line-height: 1.3;
    font-weight: 500;
    font-size: 22px;
    margin: 0;
    @media (max-width: ${({theme})=>theme.breakpoints.mobileMin}px) {
        font-size: 16px;
    }
`;

export const Button = styled.button`
    justify-content: center;`