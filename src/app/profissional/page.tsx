import Image from "next/image"

export default function Profissional() {
  return (
    <main>
      <div>
        <h1>Profissional</h1>
        <p>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </p>
      </div>

      <Image
        src="/illustrations/profissional.svg"
        alt=""
        width={600}
        height={600}
      />
    </main>
  )
}
