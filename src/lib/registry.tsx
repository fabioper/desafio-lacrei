"use client"

import { useServerInsertedHTML } from "next/navigation"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import { type PropsWithChildren, useState } from "react"
import ThemeProvider from "@/styles/theme"

export default function StyledComponentsRegistry({
  children,
}: PropsWithChildren) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== "undefined") return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider>{children}</ThemeProvider>
    </StyleSheetManager>
  )
}
