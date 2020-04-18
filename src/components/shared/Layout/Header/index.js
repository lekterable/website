/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

const Header = () => (
  <header sx={{ px: [4, 6], py: [4, 5] }}>
    <Link
      to="/"
      sx={{
        pb: ['unset', 'unset', 1],
        borderBottomStyle: ['none', 'none', 'solid'],
        color: 'primary',
        fontSize: [4, 4, 5],
        transition: 'border-color 0.3s, color 0.3s',
        ':hover': {
          color: 'special',
          borderBottomColor: 'special'
        }
      }}
    >
      KD
    </Link>
  </header>
)

export default Header
