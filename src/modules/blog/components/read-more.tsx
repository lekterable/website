import { ArrowRight } from 'lucide-react'
import { cn } from '~utils'

type Props = {
  children: React.ReactNode
  lines?: number
} & React.HTMLAttributes<HTMLDivElement>

const ReadMore = ({ lines = 3, children, className, ...props }: Props) => (
  <div className="flex flex-col">
    <div
      style={{
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: lines,
        display: '-webkit-box',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
    <div
      className={cn(
        'mt-2 inline-flex items-center gap-1 text-primary',
        className,
      )}
      {...props}
    >
      Read more <ArrowRight className="h-4 w-4" />
    </div>
  </div>
)

export default ReadMore
