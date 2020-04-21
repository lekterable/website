/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
import LogoIcon from '../../../../../assets/logo.svg'

const Logo = () => (
  <Link to="/" sx={{ lineHeight: 0, borderBottomStyle: 'none' }}>
    <LogoIcon
      sx={{
        width: '50px',
        height: '50px',
        ':hover': {
          '#logo': {
            transition: 'fill 0.3s',
            fill: 'special'
          }
        }
      }}
    />
  </Link>
)

export default Logo
