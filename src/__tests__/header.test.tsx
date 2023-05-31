import { setup } from "@/shared/helpers"
import Header from "@/shared/layout/header"
import { screen } from "@testing-library/react"

describe("Header", () => {
  it("should have a logo", () => {
    setup(<Header />)
    const logo = screen.getByRole("heading", { name: /lacrei/i })
    expect(logo).toBeInTheDocument()
  })

  it("should have correct links", () => {
    setup(<Header />)
    const links = {
      home: "/",
      usuária: "/pessoa-usuaria",
      profissional: "/profissional",
    }

    for (const [link, href] of Object.entries(links)) {
      const linkItem = screen.getByRole("link", { name: new RegExp(link, "i") })
      expect(linkItem).toBeInTheDocument()
      expect(linkItem).toHaveAttribute("href", href)
    }
  })
})
