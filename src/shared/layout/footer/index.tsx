import Link from "next/link"
import Image from "next/image"

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

      <ul>
        <li>
          <Link href="https://www.instagram.com/lacrei.saude" target="_blank">
            <Image
              src="/icons/instagram.svg"
              alt="Ícone do Instagram"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/lacrei.saude" target="_blank">
            <Image
              src="/icons/facebook.svg"
              alt="Ícone do Facebook"
              width={32}
              height={32}
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/company/lacrei" target="_blank">
            <Image
              src="/icons/linkedin.svg"
              alt="Ícone do Linkedin"
              width={32}
              height={32}
            />
          </Link>
        </li>
      </ul>

      <small>Desafio Front-end Lacrei</small>
    </footer>
  )
}

export default Footer
