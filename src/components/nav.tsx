import Link from './link'

type Props = {
  onLink?: () => void
} & React.HTMLAttributes<HTMLDivElement>

const Nav = ({ onLink, ...props }: Props): JSX.Element => (
  <nav {...props}>
    <Link onClick={onLink} to="hero">
      home
    </Link>
    <Link onClick={onLink} to="about">
      about
    </Link>
    <Link onClick={onLink} to="contact" offset={300}>
      contact
    </Link>
  </nav>
)

export default Nav
