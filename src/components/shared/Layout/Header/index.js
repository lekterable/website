/** @jsx jsx */
import { jsx } from 'theme-ui'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => (
  <header
    sx={{
      height: ['60px', '90px', '100px'],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: [4, 6],
      py: [4, 5]
    }}
  >
    <Logo />
    <Nav />
  </header>
)

export default Header
