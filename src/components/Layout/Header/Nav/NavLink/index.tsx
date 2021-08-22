import * as Styled from './styled'

type Props = {
  to: string
  children: string
}

const NavLink = ({ to, children }: Props) => (
  <Styled.ListItem>
    <Styled.Link href={to}>{children}</Styled.Link>
  </Styled.ListItem>
)

export default NavLink
