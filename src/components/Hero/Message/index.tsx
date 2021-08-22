import * as Styled from './styled'

const Message = () => (
  <Styled.Container>
    <Styled.Message css={{ '@md': { ml: '$9' } }}>
      Looking for a dev?
    </Styled.Message>
    <Styled.Message
      css={{
        fontWeight: 'bold',
        mt: '$4',
        '@md': { textAlign: 'right', mr: '$10' }
      }}
    >
      You&apos;ve found one!
    </Styled.Message>
  </Styled.Container>
)

export default Message
