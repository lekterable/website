/** @jsx jsx */
import { jsx } from 'theme-ui'
import Message from './Message'
import Waves from './Waves'

const Hero = () => (
  <div
    sx={{
      height: [
        'calc(100vh - 60px)',
        'calc(100vh - 90px)',
        'calc(100vh - 100px)'
      ],
      width: '100%'
    }}
  >
    <Message />
    <Waves />
  </div>
)

export default Hero
