'use client'

import { usePathname } from 'next/navigation'
import { cn } from '~utils'
import Link from './link'

type TLink = {
  href: string
  label: string
  offset?: number
  className?: string
}

const useNav = () => {
  const pathname = usePathname()

  const basePath = pathname === '/' ? '#' : '/#'

  const links: TLink[] = [
    { href: `${basePath}hero`, label: 'Home' },
    { href: `${basePath}about`, label: 'About' },
    { href: `${basePath}projects`, label: 'Projects', offset: 233 },
    { href: `${basePath}blog`, label: 'Blog' },
    {
      className: 'text-accent-foreground',
      href: `${basePath}contact`,
      label: 'Contact',
      offset: 233,
    },
  ]

  return { links }
}

type Props = {
  onLink?: () => void
} & React.HTMLAttributes<HTMLDivElement>

const Nav = ({ onLink, className, ...props }: Props) => {
  const { links } = useNav()

  return (
    <nav className={cn('text-sm font-bold text-primary', className)} {...props}>
      {links.map((link) => (
        <Link key={link.href} onClick={onLink} {...link}>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
