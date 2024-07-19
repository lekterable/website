import type { PropsWithChildren } from 'react'

const Tag = async ({ children }: PropsWithChildren) => (
  <div className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium">
    {children}
  </div>
)

export default Tag
