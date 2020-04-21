/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
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
    <Link
      to="/"
      sx={{
        pb: ['unset', 'unset', 2],
        lineHeight: 1,
        borderBlockEndStyle: 'none',
        color: 'primary',
        fontSize: [4, 4, 5],
        ':hover': {
          color: 'special'
        }
      }}
    >
      KD
    </Link>
    <Nav />
  </header>
)

export default Header
