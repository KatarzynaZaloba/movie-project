import styled from "styled-components";
import { ReactComponent as star } from "./vector.svg"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

export const Star = styled(star)`

`;

export const Score = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
`;

export const Votes = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.waterloo};
`;