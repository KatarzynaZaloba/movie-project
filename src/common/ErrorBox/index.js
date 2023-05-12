import React from 'react'
import { Button, ButtonLink, ButtonText, Header, Info, Warning, Wrapper } from './styled'
import { toMovies } from '../../core/routes'

const ErrorBox = () => {
    return (
        <Wrapper>
            <Warning />
            <Header>Ooops! Something went&nbsp;wrong...</Header>
            <Info>
                Please check your network connection and try again
            </Info>
            <ButtonLink to={toMovies()}>
                <Button>
                    <ButtonText>Back to home page</ButtonText>
                </Button>
            </ButtonLink>

        </Wrapper>
    )
}

export default ErrorBox