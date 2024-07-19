import type { Technology } from './project-list'
import CircleList from '~components/ui/circle-list'

type Props = { technologies: Technology[] }

const TechList = ({ technologies }: Props) => {
  const tech = technologies.map(({ icon, name }) => ({
    image: icon,
    title: name,
  }))

  return (
    <div className="mb-10 flex w-full flex-row items-center justify-center">
      <CircleList items={tech} />
    </div>
  )
}

export default TechList
