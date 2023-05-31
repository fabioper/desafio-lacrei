import userEvent from "@testing-library/user-event"
import { render } from "@testing-library/react"
import ThemeProvider from "@/styles/theme"

export const setup = (component: JSX.Element) => {
  return {
    user: userEvent.setup,
    ...render(<ThemeProvider>{component}</ThemeProvider>),
  }
}
