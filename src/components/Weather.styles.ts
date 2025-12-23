import styled from '@emotion/styled'
import { theme } from '../styles/theme'
import { css } from '@emotion/react'
import { media } from '../styles/utils/media'

export const StyledWeather = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33px;
  border-bottom: 1px solid ${theme.colorStyles.dividers.divider1};
  ${theme.textStyles.paragraph2};
  ${media.md(css`
    height: 42px;
  `)(theme)}

  .weather {
    &-icon {
      margin: 0 50px;
      ${media.md(css`
        font-size: 24px;
      `)(theme)}
    }
    &-info {
      margin-right: 100px;
    }
    &-label {
      margin-right: 6px;
    }
  }
`
