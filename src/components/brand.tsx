'use client'

import { usePathname } from 'next/navigation'
import Link from './link'
import Logo from './logo'

type Props = {
  className?: string
}

const Brand = ({ className }: Props) => {
  const pathname = usePathname()

  const path = pathname === '/' ? '#hero' : '/'

  return (
    <Link href={path} className="select-none">
      <Logo className={className} />
    </Link>
  )
}

export default Brand
