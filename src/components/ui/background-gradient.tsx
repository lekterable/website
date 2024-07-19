import { motion } from 'framer-motion'
import { cn } from '~utils'

const variants = {
  animate: { backgroundPosition: ['0, 50%', '100% 50%', '0 50%'] },
  initial: { backgroundPosition: '0 50%' },
}

type Props = {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: Props) => (
  <div className={cn('group relative p-[4px]', containerClassName)}>
    <motion.div
      variants={animate ? variants : undefined}
      initial={animate ? 'initial' : undefined}
      animate={animate ? 'animate' : undefined}
      transition={
        animate
          ? {
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }
          : undefined
      }
      style={{
        backgroundSize: animate ? '400% 400%' : undefined,
      }}
      className={cn(
        'absolute inset-0 scale-105 rounded-lg opacity-80 blur-xl transition duration-500 will-change-transform group-hover:scale-110 group-hover:opacity-100',
        'bg-[radial-gradient(circle_farthest-side_at_0_100%,#ff00ff,transparent),radial-gradient(circle_farthest-side_at_100%_0,#00ffff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ff00ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#00ffff,#141316)]',
      )}
    />
    <motion.div
      variants={animate ? variants : undefined}
      initial={animate ? 'initial' : undefined}
      animate={animate ? 'animate' : undefined}
      transition={
        animate
          ? {
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }
          : undefined
      }
      style={{
        backgroundSize: animate ? '400% 400%' : undefined,
      }}
      className={cn(
        'absolute inset-0 rounded-lg will-change-transform',
        'bg-[radial-gradient(circle_farthest-side_at_0_100%,#ff00ff,transparent),radial-gradient(circle_farthest-side_at_100%_0,#00ffff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ff00ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#00ffff,#141316)]',
      )}
    />

    <div className={cn('relative', className)}>{children}</div>
  </div>
)
