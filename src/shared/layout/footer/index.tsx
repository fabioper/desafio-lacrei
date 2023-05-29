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
          <Link href="/">
            <Image
              src="/icons/facebook.svg"
              alt="Ícone do Facebook"
              width={24}
              height={24}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="/icons/instagram.svg"
              alt="Ícone do Instagram"
              width={24}
              height={24}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="/icons/linkedin.svg"
              alt="Ícone do Linkedin"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </ul>

      <small>Desafio Front-end Lacrei</small>
    </footer>
  )
}

export default Footer
