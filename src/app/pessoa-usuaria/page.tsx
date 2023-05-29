import Image from "next/image"

export default function PessoaUsuaria() {
  return (
    <main>
      <div>
        <h1>Pessoa Usuária</h1>
        <p>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </p>
      </div>

      <Image src="/illustrations/usuaria.svg" alt="" width={600} height={600} />
    </main>
  )
}
