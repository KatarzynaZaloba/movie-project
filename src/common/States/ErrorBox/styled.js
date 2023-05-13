import styled from "styled-components"
import { ReactComponent as warning } from "../Images/warning.svg"
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 195px;
`;

export const Warning = styled(warning)`
`;

export const Header = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin: 0;
`;

export const Info = styled.span`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    font-style: normal;
`;

export const ButtonLink = styled(Link)`
`;

export const Button = styled.button`
    padding: 16px 24px;
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    border-radius: 5px;
    border-color: none;
    border: none;
    cursor: pointer;
`;

export const ButtonText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.3;
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
`;