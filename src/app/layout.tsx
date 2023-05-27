import './globals.css'
import { Nunito } from 'next/font/google'
import React from "react";

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Desafio Lacrei',
  description: 'Desafio Front-end Lacrei',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
