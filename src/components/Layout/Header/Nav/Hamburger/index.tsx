import * as Styled from './styled'

type Props = {
  onClick: () => void
  isOpen: boolean
}

const Hamburger = ({ onClick, isOpen }: Props) => (
  <Styled.Button
    onClick={onClick}
    aria-label={`${isOpen ? 'close menu' : 'open menu'}`}
  >
    <Styled.Container>
      <Styled.Stripe
        css={{
          top: isOpen ? '45%' : '12.5%',
          transform: `rotate(${isOpen ? '45deg' : '0'})`
        }}
      />
      <Styled.Stripe
        css={{
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: isOpen ? 'transparent' : '$primary'
        }}
      />
      <Styled.Stripe
        css={{
          bottom: isOpen ? '45%' : '12.5%',
          transform: `rotate(${isOpen ? '-45deg' : '0'})`
        }}
      />
    </Styled.Container>
  </Styled.Button>
)

export default Hamburger
