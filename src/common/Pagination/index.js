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
    </Wrapper>
  );
};