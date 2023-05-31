import Image from "next/image"
import { Content } from "@/shared/styles/content"

export default function PessoaUsuaria() {
  return (
    <Content>
      <div>
        <h2>Pessoa Usuária</h2>
        <p className="description">
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </p>
      </div>

      <Image src="/illustrations/usuaria.svg" alt="" width={555} height={421} />
    </Content>
  )
}
