import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<unknown>

const BlogLayout = ({ children }: Props): JSX.Element => (
  <div className="mt-[123px]">{children}</div>
)

export default BlogLayout
