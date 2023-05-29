import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <div>
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <div>
          <Link href="/pessoa-usuaria">
            <button>Pessoa Usuária</button>
          </Link>
          <Link href="/profissional">
            <button>Profissional</button>
          </Link>
        </div>
      </div>

      <Image src="/illustrations/home.svg" alt="" width={600} height={600} />
    </main>
  )
}
