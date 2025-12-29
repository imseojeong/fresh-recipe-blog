import styled from '@emotion/styled'
import { theme } from '../styles/theme'
import { css } from '@emotion/react'
import { media } from '../styles/utils/media'

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  background-color: ${theme.colorStyles.background.main};
  border: 1px solid ${theme.colorStyles.dividers.divider1};
  border-top: 0;
  ${theme.textStyles.paragraph2};

  .home a,
  .ingredient-info,
  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    height: 34px;
  }
  .home a,
  .ingredient-info {
    border-right: 1px solid ${theme.colorStyles.dividers.divider1};
    ${media.md(css`
      border-right: 0;
    `)(theme)}
  }
  .home a:hover,
  .about:hover {
    text-decoration: underline;
  }
  .ingredient-info {
    display: flex;
    justify-content: center;
    align-content: center;
    flex: 1;
  }

  .todays {
    display: none;
    ${media.md(css`
      display: inline;
    `)(theme)}
  }

  .ingredient::after {
    content: '•';
    margin: 0 8px;
  }
`
