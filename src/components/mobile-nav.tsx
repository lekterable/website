'use client'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Link from './link'
import LogoIMG from '~assets/logo.png'
import { Button } from '~components/ui/button'
import { ScrollArea } from '~components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '~components/ui/sheet'
import { siteConfig } from '~config/site'

const MobileNav = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  const closeSheet = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <HamburgerMenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent overlay side="left">
        <Link to="/" onClick={closeSheet}>
          <motion.div
            className="inline-flex"
            whileHover={{ rotate: 13, scale: 1.2 }}
          >
            <Image src={LogoIMG} className="h-[55px] w-[55px]" alt="KD logo" />
          </motion.div>
          <span className="hidden font-bold">{siteConfig.name}</span>
        </Link>
        <ScrollArea className="my-[21px] pb-10">
          <div className="flex flex-1 flex-col items-center justify-end space-y-[18px] text-[47px] font-bold">
            <Link onClick={closeSheet} className="hover:text-accent" to="hero">
              home
            </Link>
            <Link onClick={closeSheet} className="hover:text-accent" to="about">
              about
            </Link>
            <Link
              onClick={closeSheet}
              className="hover:text-accent"
              to="contact"
              offset={350}
            >
              contact
            </Link>
            {/* <ThemeToggle /> */}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
