/** @jsx jsx */
import { jsx } from 'theme-ui'

const Footer = () => (
  <footer sx={{ textAlign: 'center', py: 3 }}>
    © {new Date().getFullYear()} Made with ❤️by{' '}
    <a
      href="https://www.github.com/lekterable"
      sx={{
        color: 'link',
        borderColor: 'link',
        transition: 'border-color 0.3s, color 0.3s',
        ':hover': {
          color: 'special',
          borderColor: 'special'
        }
      }}
    >
      lekterable
    </a>
  </footer>
)

export default Footer
