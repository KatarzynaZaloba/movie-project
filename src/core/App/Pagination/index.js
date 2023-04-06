import {
  PageCounter,
  ButtonText,
  PrevVectorIcon,
  Wrapper,
  PageNumbers,
  Button,
  NextVectorIcon,
} from "./styled";

export const Pagination = () => {
    return (
        <Wrapper>
      <Button >
        <PrevVectorIcon />
        <ButtonText>First</ButtonText>
      </Button>
      <Button>
        <PrevVectorIcon />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page
        <PageNumbers>Page</PageNumbers>
        of
        <PageNumbers>Pages</PageNumbers>
      </PageCounter>
      <Button>
        <ButtonText>Next</ButtonText>
        <NextVectorIcon />
      </Button>
      <Button>
        <ButtonText>Last</ButtonText>
        <NextVectorIcon />
      </Button>
    </Wrapper>
    )
}