import { useState } from 'react'
import Hamburger from './Hamburger'
import NavLink from './NavLink'
import * as Styled from './styled'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <nav>
      <Hamburger onClick={handleClick} isOpen={isOpen} />
      <Styled.List
        state={{ '@initial': isOpen ? 'visible' : 'hidden', '@lg': 'visible' }}
      >
        <NavLink to="/">home</NavLink>
        <NavLink to="#about">about</NavLink>
        <NavLink to="#blog">blog</NavLink>
        <NavLink to="#contact">contact</NavLink>
      </Styled.List>
    </nav>
  )
}

export default Nav
