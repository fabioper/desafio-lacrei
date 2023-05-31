import Link from "next/link"
import Image from "next/image"
import { Wrapper } from "@/shared/layout/footer/styles"
import NavLink from "../../components/nav-link"

export default function Footer() {
  return (
    <Wrapper>
      <nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/pessoa-usuaria">Pessoa Usuária</NavLink>
        <NavLink href="/profissional">Profissional</NavLink>
      </nav>

      <div>
        <Link href="https://www.instagram.com/lacrei.saude" target="_blank">
          <Image
            src="/icons/instagram.svg"
            alt="Ícone do Instagram"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://www.facebook.com/lacrei.saude" target="_blank">
          <Image
            src="/icons/facebook.svg"
            alt="Ícone do Facebook"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://www.linkedin.com/company/lacrei" target="_blank">
          <Image
            src="/icons/linkedin.svg"
            alt="Ícone do Linkedin"
            width={32}
            height={32}
          />
        </Link>
      </div>

      <small>Desafio Front-end Lacrei</small>
    </Wrapper>
  )
}
