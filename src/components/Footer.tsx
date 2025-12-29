import { StyledFooter } from './Footer.styles'
import BroccoliImage from '../assets/images/footer_broccoli.png'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <figure>
          <img src={BroccoliImage} alt="" />
        </figure>
        <ul className="footer-links">
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@figma">TikTok</a>
          </li>
          <li>
            <a href="https://www.instagram.com/figma/">Instagram</a>
          </li>
        </ul>
      </div>
    </StyledFooter>
  )
}

export default Footer
