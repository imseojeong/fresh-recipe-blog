import '@emotion/react'

type colorKeys = 'yellow' | 'orange' | 'red' | 'darkRed'

type textStyles = {
  fontSize: string
  lineHeight: string
  letterSpacing: string
  fontFamily: string
}
type TextStyleKeys =
  | 'heading1'
  | 'heading2'
  | 'paragraphLarge'
  | 'paragraph1'
  | 'paragraph2'
  | 'link'
  | 'caption'

type BackgroundColors = Record<'main' | 'secondary', string>
type AccentColors = Record<'primary', string>
type TextColors = Record<'headline1' | 'headline2' | 'body1' | 'body2', string>
type DividerColors = Record<'divider1', string>
type ColorStyles = {
  background: BackgroundColors
  accent: AccentColors
  text: TextColors
  dividers: DividerColors
}

declare module '@emotion/react' {
  export interface Theme {
    fontFamilies: {
      point: string
      main: string
    }
    colors: Record<colorKeys, string>
    breakpoints: {
      sm: string
      md: string
      lg: string
    }
    textStyles: Record<TextStyleKeys, TextStyles>
    colorStyles: ColorStyles
  }
}
