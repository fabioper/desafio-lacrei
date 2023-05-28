import { Nunito } from "next/font/google"
import React from "react"
import StyledComponentsRegistry from "@/lib/registry"

const inter = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Desafio Lacrei",
  description: "Desafio Front-end Lacrei",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
