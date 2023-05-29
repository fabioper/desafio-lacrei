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
`

export default GlobalStyles
