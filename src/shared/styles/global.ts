'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        background-color: #24283B; 
        color: #C0CAF5; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
    }

    a {
        text-decoration: none;
        color: #7AA2F7;
        transition: color 0.3s ease;

        &:hover,
        &:focus {
            color: #9AADF9;
            outline: none;
        }
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
    }

    ul, ol {
        list-style: none;
    }

    img {
        max-width: 100%;
        display: block;
    }
`;

export default GlobalStyle;
