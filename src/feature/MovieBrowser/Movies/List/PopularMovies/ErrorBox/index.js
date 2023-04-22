import React from 'react'
import { Button, ButtonText, Header, Info, Warning, Wrapper } from './styled'

const ErrorBox = () => {
    return (
        <Wrapper>
            <Warning />
            <Header>Ooops! Something went&nbsp;wrong...</Header>
            <Info>
                Please check your network connection and try again
            </Info>
            <Button>
                <ButtonText>Back to home page</ButtonText>
            </Button>
        </Wrapper>
    )
}

export default ErrorBox