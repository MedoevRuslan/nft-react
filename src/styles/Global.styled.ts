import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    svg {
        display: inline-block;
    }
    
    button {
        background-color: unset;
        border: unset;
    }
    
    body {
        margin: 0;
        font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .App {
        min-height: 100vh;
        background-color: #FFF;
        display: flex;
    }

`;
