import { screen } from "@testing-library/react"
import { setup } from "@/shared/helpers"
import PessoaUsuaria from "@/app/pessoa-usuaria/page"

describe("Pessoa usuária", () => {
  it("should have correct title", () => {
    setup(<PessoaUsuaria />)

    const heading = screen.getByRole("heading", { name: /pessoa usuária/i })
    expect(heading).toBeInTheDocument()
  })
})
