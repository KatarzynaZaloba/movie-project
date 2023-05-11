import styled from "styled-components";
import { ReactComponent as StarIcon } from "../image/star.svg";

export const ContainerTile = styled.div`
  max-width: 1368px;
  max-height: 100%;
  margin: 52px auto 40px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0 12px;
        margin: 0;
    }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        padding: 0 12px;
        margin: 0;
    }
`;

export const WrapperTile = styled.article`
  margin-top: 64px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  padding: 40px 40px 40px 40px;
  display: grid;
  justify-items: center;
  grid-column-gap: 40px;
  grid-template-columns: minmax(114px, 312px) auto;
  grid-template-areas:
    "poster content"
    "poster description"
    "poster area";

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 20px;
    grid-template-areas:
      "poster content"
      "poster content"
      "description description";
    grid-template-columns: 188px auto;
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-gap: 16px;
    grid-template-areas:
      "poster content"
      "poster content"
      "description description";
    grid-template-columns: 116px auto;
    padding: 16px;
  }
`;

export const ImageTile = styled.img`
  margin: 0px;
  width: 100%;
  border-radius: 5px;
  grid-area: poster;
`;

export const ContentTile = styled.div`
display: flex;
  flex-direction: column;
  gap: 24px;
  justify-self: left;
  margin-bottom: 24px;
  margin-left: 0px; 
  grid-area: content;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  margin-bottom: 16px;
}

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
  margin-bottom: 0px;
}
`;

export const DetailsMovie = styled.div`
font-size: 18px;
display: flex;
flex-direction: column;
justify-self: left;
gap: 8px;
`;

export const MovieTitle = styled.header`
  font-weight: 600;
  font-size: 36px;
  word-break: break-word;
  padding-bottom: 24px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
    line-height: 20px;
    padding-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18.2px;
    padding-bottom: 0px;
  }
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  padding-bottom: 24px; 
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      font-size: 16px;
      line-height: 1.3;
      padding-bottom: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
      font-size: 13px;
      margin-top: 0;
      padding-bottom: 0px;
    }
`;

export const Production = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: column;
  }
`;

export const GreyText = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGrey};
  margin: 0px 10px 0px 0px;
  line-height: 1.2;
  word-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    line-height: 1.1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 12px;
    line-height: 14.4px;
  }
`;

export const BlackText = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    line-height: 1.1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 12px;
    line-height: 14.4px;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
    }
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.colors.mystic};
  height: 30px;
  padding: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
      font-size: 10px;
      line-height: 1.1;
    }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  margin: 0px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      margin: 0px;
      gap: 8px;
    }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      width: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
      width: 12px;
    }
`;

export const Rate = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.black};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      font-size: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
      font-size: 13px;
    }
`;

export const Votes = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      font-size: 13px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
      font-size: 10px;
    }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  margin: 0;
  grid-area: description;
  word-wrap: wrap;
  text-align: justify;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    line-height: 140%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 14px;
    line-height: 22.4px;
  }
`;