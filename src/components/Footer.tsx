import { StyledFooter } from './Footer.styles'
import { Link } from 'react-router-dom'
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
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@figma"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/figma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </StyledFooter>
  )
}

export default Footer
