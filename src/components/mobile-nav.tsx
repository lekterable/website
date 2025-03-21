'use client'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '~utils'
import Link from './link'
import Nav from './nav'
import LogoIMG from '~assets/logo.png'
import { Button } from '~components/ui/button'
import clientConfig from '~config/client'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        onClick={onOpen}
        className="w-[47px] border text-foreground hover:bg-muted hover:text-primary focus-visible:bg-border focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <HamburgerMenuIcon className="h-[21px] w-[21px]" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={onClose}
            className="fixed left-0 top-0 z-10 h-screen w-screen backdrop-blur"
          />
        )}
      </AnimatePresence>
      <aside
        id="drawer-navigation"
        aria-labelledby="drawer-navigation-label"
        className={cn(
          'fixed left-0 top-0 z-20 h-screen w-[322px] overflow-y-auto border-r bg-white p-[13px] transition-transform',
          !isOpen && '-translate-x-full',
        )}
        tabIndex={-1}
      >
        <div className="flex items-start justify-between">
          <Link href="/" onClick={onClose}>
            <motion.div
              className="inline-flex"
              whileHover={{ rotate: 13, scale: 1.2 }}
            >
              <Image
                src={LogoIMG}
                className="h-[47px] w-[47px]"
                alt="KD logo"
              />
            </motion.div>
            <span className="hidden font-bold">{clientConfig.name}</span>
          </Link>
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            onClick={onClose}
            className="rounded-lg p-1.5 text-sm text-foreground hover:bg-muted hover:text-primary"
          >
            <X className="h-[21px] w-[21px]" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <Nav
          onLink={onClose}
          className="flex flex-1 flex-col items-center justify-end space-y-[18px] pt-[89px] text-[34px]"
        />
        {/* <ThemeToggle /> */}
      </aside>
    </>
  )
}

export default MobileNav
