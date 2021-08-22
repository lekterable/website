import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import * as Styled from './styled'

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
    <Styled.Container>
      <motion.div
        style={{
          position: 'absolute',
          x: useSpring(x1, { stiffness: 150, damping: 10 })
        }}
      >
        <Styled.WhiteWave />
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          x: useSpring(x2, { stiffness: 1000, damping: 50 })
        }}
      >
        <Styled.BlackWave />
      </motion.div>
    </Styled.Container>
  )
}

export default Waves
