/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import Hamburger from './Hamburger'
import NavLink from './NavLink'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)
  const mobileDisplay = isOpen ? 'flex' : 'none'

  return (
    <nav>
      <Hamburger
        sx={{ display: ['block', 'block', 'none'] }}
        onClick={handleClick}
        isOpen={isOpen}
      />
      <ul
        sx={{
          position: ['absolute', 'absolute', 'unset'],
          display: [mobileDisplay, mobileDisplay, 'flex'],
          flexDirection: ['column', 'column', 'row'],
          top: ['60px', '90px', '100px'],
          left: 0,
          right: 0,
          fontSize: 3,
          backgroundColor: '#fff'
        }}
      >
        <NavLink to="/">home</NavLink>
        <NavLink to="#about">about</NavLink>
        <NavLink to="#blog">blog</NavLink>
        <NavLink to="#contact">contact</NavLink>
      </ul>
    </nav>
  )
}

export default Nav
