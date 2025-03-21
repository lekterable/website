'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Brand from './brand'
import MobileNav from './mobile-nav'
import Nav from './nav'
import useScrollStatus from '~hooks/use-scroll-status'
// import ThemeToggle from './theme-toggle'

const TopNav = () => {
  const { isScrollingUp } = useScrollStatus()
  const [isVisible, setIsVisible] = useState(true)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      if (navRef.current) {
        const headerHeight = navRef.current.offsetHeight / 2

        const isVisible = isScrollingUp || window.scrollY <= headerHeight

        setIsVisible(isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [navRef, isScrollingUp])

  return (
    <motion.div
      ref={navRef}
      className="fixed z-50 w-full bg-background p-[13px] shadow-lg md:absolute md:p-[21px] md:shadow-none lg:p-[34px]"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ damping: 30, stiffness: 300, type: 'spring' }}
    >
      <div className="mx-auto flex max-w-screen-3xl items-center">
        <div className="flex flex-1 flex-row items-center justify-between">
          <Brand className="h-[47px] w-[47px] md:h-[55px] md:w-[55px]" />
          <MobileNav />
        </div>
        <Nav className="hidden flex-1 items-center justify-end space-x-[34px] text-xl md:flex" />
        {/* <ThemeToggle /> */}
      </div>
    </motion.div>
  )
}

export default TopNav
