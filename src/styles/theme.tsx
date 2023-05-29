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
    primary: "red",
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
