import Link from "next/link"
import { Wrapper } from "@/shared/layout/header/styles"
import NavLink from "../../components/nav-link"

function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <h1>Lacrei</h1>
      </Link>

      <nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/pessoa-usuaria">Pessoa Usuária</NavLink>
        <NavLink href="/profissional">Profissional</NavLink>
      </nav>
    </Wrapper>
  )
}

export default Header
