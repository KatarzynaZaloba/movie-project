import { useState, useEffect } from "react";
import {
  PageCounter,
  ButtonText,
  PrevVectorIcon,
  Wrapper,
  PageNumbers,
  Button,
  NextVectorIcon,
} from "./styled";
import axios from "axios";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNextPageClick = () => {
    onPageChange(currentPage + 1);
  };

  const handlePrevPageClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleLastPageClick = () => {
    onPageChange(totalPages);
  };

  const handleFirstPageClick = () => {
    onPageChange(1);
  };

  const handleLoadMoreClick = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&page=${currentPage + 1}`
      )
      .then((response) => {
        onPageChange(currentPage + 1);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
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
        <PageNumbers>{totalPages}</PageNumbers>
      </PageCounter>
      <Button
        disabled={currentPage === totalPages || isLoading}
        onClick={handleNextPageClick}
      >
        <ButtonText>Next</ButtonText>
        <NextVectorIcon />
      </Button>
      <Button
        disabled={currentPage === totalPages || isLoading}
        onClick={handleLastPageClick}
      >
        <ButtonText>Last</ButtonText>
        <NextVectorIcon />
        <NextVectorIcon mobile="true" />
      </Button>
      {currentPage !== 1 && currentPage !== totalPages && (
        <Button disabled={isLoading} onClick={handleLoadMoreClick}>
          {isLoading ? "Loading..." : "Load More"}
        </Button>
      )}
    </Wrapper>
  );
};