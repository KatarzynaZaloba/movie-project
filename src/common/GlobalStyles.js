import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
::after,
::before {
    box-sizing: inherit;
}

body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding: 16px;
// I will check it how to manage it with media-querries -K.
    background-color: ${({ theme }) => theme.colors.whisper};
    color: ${({ theme }) => theme.colors.black}
}`
