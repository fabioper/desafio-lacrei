import Link from "next/link"

export function Header() {
  return (
    <header>
      <Link href="/">
        <h1>Lacrei</h1>
      </Link>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pessoa-usuaria">Pessoa Usuária</Link>
        </li>
        <li>
          <Link href="/profissional">Profissional</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
