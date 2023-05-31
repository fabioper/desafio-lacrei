import Link from "next/link"
import Image from "next/image"
import { PrimaryButton, SecondaryButton } from "@/shared/styles/button"
import { Content } from "@/shared/styles/content"

export default function Home() {
  return (
    <Content hideBorder>
      <div>
        <h2>Boas vindas a Lacrei Saúde</h2>
        <p className="description">
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
        </p>

        <div className="buttons">
          <Link href="/pessoa-usuaria">
            <PrimaryButton>Pessoa Usuária</PrimaryButton>
          </Link>
          <Link href="/profissional">
            <SecondaryButton>Profissional</SecondaryButton>
          </Link>
        </div>
      </div>

      <Image src="/illustrations/home.svg" alt="" width={555} height={421} />
    </Content>
  )
}
