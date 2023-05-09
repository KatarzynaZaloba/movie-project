import styled from "styled-components";

export const Wrapper = styled.div` 
  max-width: 1368px;
  margin: 52 auto 40px;
  padding: 0 16px;
`;

export const DetailsWrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: auto 1fr;
    }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 16px;
    margin-bottom: 16px;
    grid-gap: 16px;
    }
`;

export const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.woodSmoke};
    margin-left: 10px;
    margin-bottom: 24px;
    margin-top: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 20px;
    }
`;