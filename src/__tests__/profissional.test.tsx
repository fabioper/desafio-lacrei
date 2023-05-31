import { setup } from "@/shared/helpers"
import { screen } from "@testing-library/react"
import Profissional from "@/app/profissional/page"

describe("Profissional", () => {
  it("should have correct title", () => {
    setup(<Profissional />)

    const heading = screen.getByRole("heading", { name: /profissional/i })
    expect(heading).toBeInTheDocument()
  })
})
