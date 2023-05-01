
import styled from "styled-components";

export const Wrapper = styled.div` 
  max-width: 1368px;
  margin: 0 auto;
`;

export const DetailsWrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 24px;
    margin-bottom: 24px;
    grid-gap: 32px;
    }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 16px;
   margin-bottom: 16px;
    grid-gap: 16px;
     }
`;

export const SectionTitle = styled.header`
    margin-top: 64px;
    margin-bottom: 32px;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.woodsmoke};
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 26px;
    margin-bottom: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.MobileMin}) {
    font-size: 20px;
    margin-bottom: 12px;
    }
    `;