/** @jsx jsx */
import { jsx } from 'theme-ui'

const NavLink = ({ to, children }) => (
  <li sx={{ ml: 5, fontWeight: 500 }}>
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
