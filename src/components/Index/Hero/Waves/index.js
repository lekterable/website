/** @jsx jsx */
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import { jsx } from 'theme-ui'
import BlackWave from '../../../../assets/black-wave.svg'
import WhiteWave from '../../../../assets/white-wave.svg'

const Waves = () => {
  const { scrollY } = useViewportScroll()
  const hasWindow = typeof window !== 'undefined'

  const x1 = useTransform(
    scrollY,
    [0, hasWindow ? window.innerHeight : 0],
    [
      hasWindow ? -window.innerHeight : 0,
      hasWindow ? -window.innerWidth * 4 : 0
    ]
  )
  const x2 = useTransform(
    scrollY,
    [0, hasWindow ? window.innerHeight : 0],
    [
      hasWindow ? -window.innerWidth * 4 : 0,
      hasWindow ? -window.innerHeight : 0
    ]
  )

  return (
    <div
      sx={{
        pointerEvents: 'none',
        position: 'relative',
        height: '-webkit-fill-available',
        width: '100%'
      }}
    >
      <motion.div
        style={{
          height: '350px',
          position: 'absolute',
          bottom: 0,
          x: useSpring(x1, { stiffness: 150, damping: 10 })
        }}
      >
        <WhiteWave
          height={350}
          sx={{
            width: 'calc(600vw)',
            path: {
              pointerEvents: 'all',
              ':hover': {
                fill: 'special'
              }
            }
          }}
        />
      </motion.div>
      <motion.div
        style={{
          height: '350px',
          position: 'absolute',
          bottom: 0,
          x: useSpring(x2, { stiffness: 1000, damping: 50 })
        }}
      >
        <BlackWave
          height={350}
          sx={{
            width: 'calc(600vw)',
            path: {
              pointerEvents: 'all',
              ':hover': {
                fill: 'special'
              }
            }
          }}
        />
      </motion.div>
    </div>
  )
}

export default Waves
