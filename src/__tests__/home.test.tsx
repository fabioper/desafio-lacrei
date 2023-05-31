import { setup } from "@/shared/helpers"
import Home from "@/app/page"
import { screen } from "@testing-library/react"

describe("Home", () => {
  it("should have correct title", () => {
    setup(<Home />)

    const heading = screen.getByRole("heading", {
      name: /boas vindas a lacrei saúde/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it("should have buttons", () => {
    setup(<Home />)

    expect(screen.getByRole("button", { name: /usuária/i })).toBeInTheDocument()

    expect(
      screen.getByRole("button", { name: /profissional/i })
    ).toBeInTheDocument()
  })
})
