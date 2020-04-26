/** @jsx jsx */
import { jsx } from 'theme-ui'
import Waves from './Waves'

const Hero = () => (
  <div
    sx={{
      height: [
        'calc(100vh - 60px)',
        'calc(100vh - 90px)',
        'calc(100vh - 100px)'
      ],
      overflowX: 'hidden',
      width: '100%'
    }}
  >
    <Waves />
  </div>
)

export default Hero
