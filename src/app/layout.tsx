import { Nunito } from "next/font/google"
import React, { type PropsWithChildren } from "react"
import StyledComponentsRegistry from "@/lib/registry"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Desafio Lacrei",
  description: "Desafio Front-end Lacrei",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
