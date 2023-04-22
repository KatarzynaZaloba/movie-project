import { ReactComponent as Picture } from "../NoResults/noResultsIcon.svg";
import { Disclaimer, PictureWrapper, Wrapper } from "./styled";

const NoResults = () => {
  return (
    <Wrapper>
      <Disclaimer>Sorry, there are no results for " "</Disclaimer>
      <PictureWrapper>
        <Picture />
      </PictureWrapper>
    </Wrapper>
  );
};

export default NoResults;