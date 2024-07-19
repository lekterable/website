'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '~utils'
import LogoIMG from '~assets/logo.png'

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => (
  <motion.div whileHover={{ rotate: 13, scale: 1.2 }}>
    <Image
      alt="KD logo"
      className={cn('pointer-events-none', className)}
      src={LogoIMG}
    />
  </motion.div>
)

export default Logo
