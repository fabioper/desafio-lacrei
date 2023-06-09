import { Nunito } from "next/font/google"
import React, { type PropsWithChildren } from "react"
import StyledComponentsRegistry from "@/styles/registry"
import Header from "@/shared/layout/header"
import Footer from "@/shared/layout/footer"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata = {
  title: "Desafio Lacrei",
  description: "Desafio Front-end Lacrei",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
