'use client'

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useWillChange,
} from 'framer-motion'
import dynamic from 'next/dynamic'
import { cn } from '~utils'
import WaveBlack from '~assets/wave-black.svg'
import WaveWhite from '~assets/wave-white.svg'

const Wave = ({ variant }: { variant: 'black' | 'white' }) => {
  const Component = variant === 'white' ? WaveWhite : WaveBlack

  return (
    <Component
      className={cn(
        'h-[300px] w-[600vh]',
        variant === 'white' && 'hover:[&_path]:fill-accent',
        variant === 'black' && '[&_path]:pointer-events-auto',
      )}
    />
  )
}

const Waves = ({
  className,
  upsideDown,
}: {
  className?: string
  upsideDown?: boolean
}) => {
  const willChange = useWillChange()
  const { scrollYProgress } = useScroll()

  const x = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      upsideDown === true ? [1500, -3000] : [-3000, 1500],
    ),
    { damping: 50, stiffness: 1000 },
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn('relative h-[300px] overflow-hidden', className)}>
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
      </div>
    </motion.div>
  )
}

export default dynamic(async () => await Promise.resolve(Waves))
