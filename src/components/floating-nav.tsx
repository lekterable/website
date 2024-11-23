'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '~utils'
import Brand from './brand'
import Nav from './nav'
import useScrollStatus from '~hooks/use-scroll-status'

const FloatingNav = () => {
  const { isScrollingUp, scrollDistance } = useScrollStatus()
  const [isVisible, setIsVisible] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      if (!navRef.current) return

      const navHeight = navRef.current.offsetHeight + 40
      const isVisible =
        isScrollingUp &&
        scrollDistance > navHeight &&
        window.scrollY > navHeight

      setIsVisible(isVisible)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrollingUp, scrollDistance])

  return (
    <motion.div
      ref={navRef}
      className={cn(
        'fixed left-1/2 top-10 z-20 hidden w-max -translate-x-1/2 transform gap-6 rounded-full border bg-background px-5 py-3 shadow-lg transition-all duration-300 md:flex',
        isVisible ? 'opacity-100' : 'opacity-0 md:hidden',
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <Brand className="h-[34px] w-[34px]" />
      <Nav className="mt-0.5 flex select-none items-center justify-center gap-6 text-base" />
    </motion.div>
  )
}

export default FloatingNav
