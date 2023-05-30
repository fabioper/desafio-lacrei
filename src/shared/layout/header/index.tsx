import Link from "next/link"
import { Wrapper } from "@/shared/layout/header/styles"

function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <h1>Lacrei</h1>
      </Link>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/pessoa-usuaria">Pessoa Usuária</Link>
        <Link href="/profissional">Profissional</Link>
      </nav>
    </Wrapper>
  )
}

export default Header
