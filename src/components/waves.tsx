'use client'

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useWillChange,
} from 'framer-motion'
import { cn } from '~utils'
import WaveBlack from '~assets/wave-black.svg'
import WaveWhite from '~assets/wave-white.svg'

const Wave = ({ variant }: { variant: 'black' | 'white' }) => {
  const Component = variant === 'white' ? WaveWhite : WaveBlack

  return (
    <Component
      className={cn(
        'h-[233px] w-[521vh]',
        variant === 'white' &&
          '[&_path]:fill-secondary [&_path]:stroke-primary lg:hover:[&_path]:fill-accent',
        variant === 'black' &&
          '[&_path]:pointer-events-auto [&_path]:fill-primary [&_path]:stroke-primary',
      )}
    />
  )
}

type Props = {
  className?: string
  upsideDown?: boolean
}

const Waves = ({ className, upsideDown }: Props) => {
  const willChange = useWillChange()
  const { scrollYProgress } = useScroll()

  const x = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      upsideDown === true ? [500, -3500] : [-3500, 500],
    ),
    { damping: 50, stiffness: 1000 },
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative h-[233px] overflow-hidden',
        upsideDown === true ? 'mt-[-1px]' : 'mb-[-1px]', // Prevent gap between waves
        className,
      )}
    >
      <motion.div
        animate={{ x: [-2000, 0, -2000] }}
        transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
        style={{ position: 'absolute', willChange }}
      >
        <Wave variant="white" />
      </motion.div>
      <motion.div
        style={{ pointerEvents: 'none', position: 'absolute', willChange, x }}
      >
        <Wave variant="black" />
      </motion.div>
    </motion.div>
  )
}

export default Waves
