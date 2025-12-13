import { css } from '@emotion/react'
import type { Theme } from '@emotion/react'

export const globalStyles = (theme: Theme) => css`
  * {
    margin: 0;
    ${theme.textStyles.paragraph1};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  html {
    ${theme.textStyles.paragraph1};
  }
  body {
    ${theme.textStyles.paragraph1};
    color: ${theme.colorStyles.text.body1};
    background-color: ${theme.colorStyles.background.main};
  }

  h1 {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  a,
  button {
    cursor: pointer;
  }
  button {
    padding: 0;
  }
  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }
  address {
    font-style: normal;
  }
`
