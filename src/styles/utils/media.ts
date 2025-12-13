import { css } from '@emotion/react'
import type { Theme } from '@emotion/react'

export const media = {
  sm: (styles: ReturnType<typeof css>) => (theme: Theme) =>
    css`
      @media (min-width: ${theme.breakpoints.sm}) {
        ${styles}
      }
    `,
  md: (styles: ReturnType<typeof css>) => (theme: Theme) =>
    css`
      @media (min-width: ${theme.breakpoints.md}) {
        ${styles}
      }
    `,
  lg: (styles: ReturnType<typeof css>) => (theme: Theme) =>
    css`
      @media (min-width: ${theme.breakpoints.lg}) {
        ${styles}
      }
    `,
}
