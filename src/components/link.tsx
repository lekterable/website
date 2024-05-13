'use client'

import { useRouter } from 'next/navigation'
import type { LinkProps } from 'react-scroll'
import { Link as LinkComponent } from 'react-scroll'
import { cn } from '~utils'

type Props = {
  to: string
  children: React.ReactNode
  className?: string
} & Omit<LinkProps, 'ref'>

const Link = ({
  to,
  onClick,
  className,
  children,
  ...props
}: Props): JSX.Element => {
  const router = useRouter()

  return (
    <LinkComponent
      className={cn(
        'cursor-pointer underline-offset-8 hover:text-accent hover:underline',
        className,
      )}
      duration={300}
      spy
      to={to}
      smooth
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-base-to-string -- IDK
        router.push(`#${to}`)
        onClick?.()
      }}
      // prefetch
      {...props}
    >
      {children}
    </LinkComponent>
  )
}

export default Link
