import * as Styled from './styled'

const Footer = () => (
  <Styled.Footer>
    © {new Date().getFullYear()} Made with
    <span role="img" className="emoji" aria-label="heart emoji">
      &nbsp;❤️&nbsp;
    </span>
    by&nbsp;
    <Styled.Link href="https://www.github.com/lekterable">
      lekterable
    </Styled.Link>
  </Styled.Footer>
)

export default Footer
