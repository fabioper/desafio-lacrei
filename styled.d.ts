import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string
      primary: string
      footerBorderColor: string
    }

    sizes: {
      sm: string
      md: string
    }
  }
}
