import styled from "styled-components";
import { ReactComponent as picture } from "../NoResults/noResultsIcon.svg";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 50px auto 0;
`;

export const Disclaimer = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 16px;
  }
`;

export const PictureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-top: 100px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 70px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    margin-top: 40px;
  }
`;

export const Picture = styled(picture)`
  width: 400px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 300px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 250px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 150px;
  }
`
