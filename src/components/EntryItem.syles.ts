import styled from '@emotion/styled'
import { theme } from '../styles/theme'
import { css } from '@emotion/react'
import { media } from '../styles/utils/media'

export const StyledEntryItem = styled.li`
  border-bottom: 1px solid ${theme.colorStyles.dividers.divider1};
  ${media.md(css`
    border-right: 1px solid ${theme.colorStyles.dividers.divider1};
    &:nth-child(2n) {
      border-right: 0;
    }
  `)(theme)}
  ${media.lg(css`
    &:nth-child(2n) {
      border-right: 1px solid ${theme.colorStyles.dividers.divider1};
    }
    &:nth-child(3n) {
      border-right: 0;
    }
  `)(theme)}

  a {
    display: block;
    padding: 45px 12px 40px;
    ${theme.textStyles.paragraphLarge};
    color: ${theme.colorStyles.text.body1};

    .entry-item-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 40px;
      height: 375px;
    }

    .folios {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 30px;
    }

    figure {
      margin-bottom: 30px;
      width: 100%;
      height: 175px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      width: 100%;
      margin-bottom: 30px;
      text-align: center;

      strong {
        width: 177px;
      }
    }

    button {
      align-self: flex-end;
      img {
        display: block;
        width: 28px;
        height: 28px;
      }
    }
  }
`
