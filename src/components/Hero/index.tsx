import dynamic from 'next/dynamic'
import Message from './Message'
const Waves = dynamic(() => import('./Waves'), { ssr: false })
import * as Styled from './styled'

const Hero = () => (
  <Styled.Container>
    <Message />
    <Waves />
  </Styled.Container>
)

export default Hero
