'use client'

import is from '@sindresorhus/is'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '~utils'

type Item = {
  title: string
  subtitle?: string
  image: string | StaticImport
}

type Props = {
  items: Item[]
}

const CircleList = ({ items }: Props) => {
  const [active, setActive] = useState<number | null>(null)
  const config = { damping: 5, stiffness: 100 }
  const x = useMotionValue(0) // going to set this value on mouse move

  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), config)

  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-47, 47]), config)

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2

    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <div className="flex">
      {items.map(({ title, subtitle, image }, index) => (
        <div
          key={title}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
          onMouseMove={handleMouseMove}
          className={cn(index && '-ml-[13px]')}
        >
          <div className="relative">
            <AnimatePresence mode="popLayout">
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { damping: 10, stiffness: 260, type: 'spring' },
                    y: 0,
                  }}
                  exit={{ opacity: 0, scale: 0.6, y: 20 }}
                  style={{
                    left: '50%',
                    rotate,
                    transform: 'translateX(50%)',
                    translateX: '-50%',
                    whiteSpace: 'nowrap',
                    x: translateX,
                  }}
                  className="absolute -top-10 z-50 flex flex-col items-center justify-center rounded-md bg-primary px-4 py-2 text-xs shadow-xl"
                >
                  <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%]" />
                  <div className="absolute -bottom-px left-10 z-30 h-px w-[40%]" />
                  <div className="relative z-30 text-base font-bold text-secondary">
                    {title}
                  </div>
                  {is.string(subtitle) && (
                    <div className="text-xs text-secondary">{subtitle}</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex h-[47px] w-[47px] items-center justify-center overflow-hidden rounded-full border-2 bg-background">
              <Image height={34} width={34} src={image} alt={title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CircleList
