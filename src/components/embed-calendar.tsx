import Cal from '@calcom/embed-react'

type Props = {
  className?: string
}

const EmbedCalendar = ({ className }: Props) => (
  <div className={className}>
    <Cal
      namespace="intro"
      calLink="lekterable/intro"
      className="aspect-square h-full w-full overflow-scroll rounded-lg border-2"
      config={{ layout: 'week_view', theme: 'dark' }}
    />
  </div>
)

export default EmbedCalendar
