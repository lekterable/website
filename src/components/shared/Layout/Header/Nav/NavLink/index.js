/** @jsx jsx */
import { jsx } from 'theme-ui'

const NavLink = ({ to, children }) => (
  <li
    sx={{
      ml: ['0', '0', 5],
      mb: [4, 4, '0'],
      fontWeight: 500,
      textAlign: 'center'
    }}
  >
    <a
      href={to}
      sx={{
        pb: 1,
        borderBottomStyle: 'none',
        ':hover': {
          borderBottomStyle: 'solid'
        }
      }}
    >
      {children}
    </a>
  </li>
)

export default NavLink
