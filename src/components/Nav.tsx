import { StyledNav } from './Nav.styles'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <StyledNav>
      <h1 className="home">
        <Link to="/">
          <span>Home</span> :)
        </Link>
      </h1>
      <p className="ingredient-info ">
        <span className="todays">Today’s Ingredient:&nbsp;</span>
        <span className="ingredient">{'Swiss Chard'}</span>
        <span className="day-count">Day {263}</span>
      </p>
      <Link to="/about" className="about">
        About Me
      </Link>
    </StyledNav>
  )
}

export default Nav
