import styled from '@emotion/styled'
import { theme } from '../styles/theme'
import bgImage from '../assets/images/footer.png'

export const StyledFooter = styled.footer`
  padding: 173px 0;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;

  .footer-container {
    width: 298px;
    margin: 0 auto;
  }

  figure {
    width: 100%;
    height: 116px;
    margin-bottom: 28px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  ul.footer-links {
    text-align: center;
    li {
      margin-bottom: 28px;
      &:last-child {
        margin-bottom: 0;
      }
      a {
        ${theme.textStyles.heading2};
        color: ${theme.colorStyles.text.headline2};
      }
    }
  }
`
