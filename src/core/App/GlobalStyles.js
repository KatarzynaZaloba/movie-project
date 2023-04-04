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
    background-color: ${({ theme }) => theme.colors.mercury};
    color: ${({ theme }) => theme.colors.black}
}`