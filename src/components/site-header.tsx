'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from './link'
import MobileNav from './mobile-nav'
import Nav from './nav'
import LogoIMG from '~assets/logo.png'
import clientConfig from '~config/client'
// import ThemeToggle from './theme-toggle'

const SiteHeader = (): JSX.Element => (
  <header className="fixed z-10 w-full bg-secondary p-[13px] shadow-md sm:p-[21px] md:absolute md:p-[28px] md:shadow-none">
    <div className="flex items-center">
      <div className="flex flex-1 flex-row items-center justify-between">
        <Link
          to="hero"
          className="mr-6 flex select-none items-center space-x-2"
        >
          <motion.div whileHover={{ rotate: 13, scale: 1.2 }}>
            <Image
              src={LogoIMG}
              className="pointer-events-none h-[47px] w-[47px] md:h-[55px] md:w-[55px]"
              alt="KD logo"
            />
          </motion.div>
          <span className="hidden font-bold">{clientConfig.name}</span>
        </Link>
        <MobileNav />
      </div>
      <Nav className="hidden flex-1 items-center justify-end space-x-[34px] text-[34px] font-bold md:flex" />
      {/* <ThemeToggle /> */}
    </div>
  </header>
)

export default SiteHeader
