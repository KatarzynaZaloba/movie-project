import { searchQueryParamName } from "../../../core/QueryBox/queryParamName";
import { useQueryParameter } from "../../../core/QueryBox/useQueryParameter";
import { Disclaimer, Picture, PictureWrapper, Wrapper } from "./styled";

const NoResults = () => {
  const query = useQueryParameter(searchQueryParamName);

  return (
    <Wrapper>
      <Disclaimer>
        <p>{`Sorry, there are no results for "${query}"`}</p>
      </Disclaimer>
      <PictureWrapper>
        <Picture />
      </PictureWrapper>
    </Wrapper>
  );
};

export default NoResults;