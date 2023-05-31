import { setup } from "@/shared/helpers"
import Footer from "@/shared/layout/footer"
import { screen } from "@testing-library/react"

describe("Footer", () => {
  it("should have correct links", () => {
    setup(<Footer />)

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
