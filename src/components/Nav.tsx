import { StyledNav } from './Nav.styles'

const Nav = () => {
  return (
    <StyledNav>
      <h1 className="home">
        <a href="/">
          <span>Home</span> :)
        </a>
      </h1>
      <p className="ingredient-info ">
        <span className="todays">Today’s Ingredient:&nbsp;</span>
        <span className="ingredient">{'Swiss Chard'}</span>
        <span className="day-count">Day {263}</span>
      </p>
      <a href="/about" className="about">
        About Me
      </a>
    </StyledNav>
  )
}

export default Nav
