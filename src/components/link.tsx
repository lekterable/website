'use client'

import type { LinkProps as NextLinkProps } from 'next/link'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import type { LinkProps as ScrollLinkProps } from 'react-scroll'
import { Link as ScrollLink } from 'react-scroll'
import { cn } from '~utils'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
} & Omit<ScrollLinkProps, 'ref' | 'to'>

const Link = ({
  href,
  onClick,
  className,
  children,
  ...props
}: Props): JSX.Element => {
  const router = useRouter()

  const isHashLink = href.startsWith('#')

  if (isHashLink) {
    const hash = href.replace(/^\/?#/, '')

    return (
      <ScrollLink
        className={cn(
          'cursor-pointer text-primary underline-offset-8 hover:text-accent hover:underline',
          className,
        )}
        duration={300}
        spy
        to={hash}
        smooth
        onClick={onClick}
        {...props}
      >
        {children}
      </ScrollLink>
    )
  }

  return (
    <NextLink
      href={href}
      className={cn(
        'cursor-pointer text-primary underline-offset-8 hover:text-accent hover:underline',
        className,
      )}
      onClick={() => {
        router.push(href)
        onClick?.()
      }}
      {...(props as Omit<NextLinkProps, 'href'>)}
    >
      {children}
    </NextLink>
  )
}

export default Link
