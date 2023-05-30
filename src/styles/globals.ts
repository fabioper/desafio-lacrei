"use client"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }
  
  body {
    background: ${props => props.theme.colors.background}
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      opacity: 0.75;
    }
  }
`

export default GlobalStyles
