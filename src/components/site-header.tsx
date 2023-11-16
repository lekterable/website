'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from './link'
import MobileNav from './mobile-nav'
import LogoIMG from '~assets/logo.png'
import { siteConfig } from '~config/site'
// import ThemeToggle from './theme-toggle'

const SiteHeader = (): JSX.Element => (
  <header className="absolute top-[13px] w-full px-[13px] sm:px-[21px] lg:top-[34px]">
    <div className="flex items-center">
      <div className="flex flex-1 flex-row items-center justify-between">
        <Link
          to="hero"
          className="mr-6 flex select-none items-center space-x-2"
        >
          <motion.div whileHover={{ rotate: 13, scale: 1.2 }}>
            <Image
              src={LogoIMG}
              className="pointer-events-none h-[47px] w-[47px] sm:h-[55px] sm:w-[55px]"
              alt="KD logo"
            />
          </motion.div>
          <span className="hidden font-bold">{siteConfig.name}</span>
        </Link>
        <MobileNav />
      </div>
      <div className="hidden flex-1 items-center justify-end space-x-[34px] text-[34px] font-bold md:flex">
        <Link to="hero">home</Link>
        <Link to="about">about</Link>
        <Link to="contact" offset={300}>
          contact
        </Link>
        {/* <ThemeToggle /> */}
      </div>
    </div>
  </header>
)

export default SiteHeader
