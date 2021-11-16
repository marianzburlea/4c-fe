import theme from './theme'

type CustomTheme = typeof theme

interface Color {
  white: string
  black: string
  primary: string
  secondary: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color
    borderRadius: string
  }
}
