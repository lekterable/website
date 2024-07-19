'use client'

import { usePathname } from 'next/navigation'
import Link from './link'
import Logo from './logo'

const Brand = () => {
  const pathname = usePathname()

  const path = pathname === '/' ? '#hero' : '/'

  return (
    <Link href={path} className="mr-6 flex select-none items-center">
      <Logo className="h-[47px] w-[47px] md:h-[55px] md:w-[55px]" />
    </Link>
  )
}

export default Brand
