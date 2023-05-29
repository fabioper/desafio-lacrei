import Link from "next/link"

function Footer() {
  return (
    <footer>
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

      <small>Desafio Front-end Lacrei</small>
    </footer>
  )
}

export default Footer
