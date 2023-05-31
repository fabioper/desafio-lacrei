"use client"

import {
  type DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from "styled-components"
import React, { type PropsWithChildren } from "react"
import GlobalStyles from "@/styles/globals"

export const theme: DefaultTheme = {
  colors: {
    background: "#fff",
    primary: "#018762",
    footerBorderColor: "#b0e0d3",
  },
  sizes: {
    sm: "570px",
    md: "1024px",
  },
}

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}

      <GlobalStyles />
    </StyledComponentsThemeProvider>
  )
}
