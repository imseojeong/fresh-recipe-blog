import styled from '@emotion/styled'
import { theme } from '../styles/theme'
import { css } from '@emotion/react'
import { media } from '../styles/utils/media'
import bgImage from '../assets/images/home-hero.png'

export const StyledHome = styled.div`
  /* hero */
  .home-hero {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 700px;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    border-bottom: 1px solid ${theme.colorStyles.dividers.divider1};

    &::before {
      /* 5% 투명도의 검정색 오버레이*/
      content: '';
      position: absolute;
      inset: 0; /* top, right, bottom, left 모두 0 */
      background-color: rgba(0, 0, 0, 0.05);
      pointer-events: none;
    }
    & > * {
      position: relative; /* 글자가 오버레이 위에 올라오도록 */
    }
    .hero-information {
      padding: 0 40px;
      text-align: center;
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      ${media.md(css`
        width: 600px;
      `)(theme)}
      h1 {
        margin-bottom: 20px;
        ${theme.textStyles.heading1};
        color: ${theme.colorStyles.text.headline1};
      }
      p {
        ${theme.textStyles.caption};
        color: ${theme.colorStyles.text.body2};
      }
    }
  }
  /* main */
  main {
    /* header */
    header {
      padding: 150px 10px;
      text-align: center;
      border-bottom: 1px solid ${theme.colorStyles.dividers.divider1};
      h2 {
        margin-bottom: 30px;
        ${theme.textStyles.heading2};
        color: ${theme.colorStyles.text.headline2};
      }
      p {
        ${theme.textStyles.paragraph1};
        color: ${theme.colorStyles.text.body1};
      }
    }
  }

  /* entry list */
  .entry-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    ${media.md(css`
      grid-template-columns: repeat(2, 1fr);
    `)(theme)}
    ${media.lg(css`
      grid-template-columns: repeat(3, 1fr);
    `)(theme)}
  }
`
