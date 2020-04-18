/** @jsx jsx */
import { jsx } from 'theme-ui'
import NavLink from './NavLink'

const Nav = () => (
  <nav>
    <ul sx={{ display: 'flex', fontSize: 1 }}>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="#about">ABOUT</NavLink>
      <NavLink to="#blog">BLOG</NavLink>
      <NavLink to="#contact">CONTACT</NavLink>
    </ul>
  </nav>
)

export default Nav
