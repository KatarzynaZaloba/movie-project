import {
  PageCounter,
  ButtonText,
  PrevVectorIcon,
  Wrapper,
  PageNumbers,
  Button,
  NextVectorIcon,
} from "./styled";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  const lastPage = totalPages > 500 ? 500 : totalPages;

  const handleNextPageClick = () => {
    onPageChange(currentPage < 500 ? currentPage +++ 1 : currentPage );
  };

  const handlePrevPageClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleLastPageClick = () => {
    onPageChange(currentPage !== 500 ? lastPage : currentPage );
  };

  const handleFirstPageClick = () => {
    onPageChange(1);
  };

  return (
    <Wrapper>
      <Button disabled={currentPage === 1} onClick={handleFirstPageClick}>
        <PrevVectorIcon />
        <PrevVectorIcon mobile="true" />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={currentPage === 1} onClick={handlePrevPageClick}>
        <PrevVectorIcon />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page <PageNumbers>{currentPage}</PageNumbers> of{" "}
        <PageNumbers>{lastPage}</PageNumbers>
      </PageCounter>
      <Button
        disabled={currentPage === "500"}
        onClick={handleNextPageClick}
      >
        <ButtonText>Next</ButtonText>
        <NextVectorIcon />
      </Button>
      <Button
        disabled={currentPage === "500"}
        onClick={handleLastPageClick}
      >
        <ButtonText>Last</ButtonText>
        <NextVectorIcon />
        <NextVectorIcon mobile="true" />
      </Button>
    </Wrapper>
  );
};