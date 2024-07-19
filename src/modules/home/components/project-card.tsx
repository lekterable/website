import Image from 'next/image'
import type { Project } from './project-list'
import TechList from './tech-list'
import { CardContainer, CardItem } from '~components/ui/3d-card'

type Props = {
  project: Project
}

const ProjectCard = ({
  project: { title, description, technologies, image },
}: Props) => (
  <div className="group min-h-[377px] w-[322px] rounded-3xl">
    <CardContainer>
      {/* <Image src={image} alt={title} className="mb-4 h-[150px] w-auto" /> */}
      <CardItem translateZ="100" className="h-full w-full">
        <div className="overflow-hidden rounded-lg">
          <div
            className="relative w-full scale-110 transition duration-500 will-change-transform group-hover:scale-150"
            style={{ aspectRatio: '16/9' }}
          >
            <Image
              className="h-full w-full object-cover"
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 1280px"
            />
          </div>
        </div>
      </CardItem>

      <CardItem translateZ="100">
        <h3 className="mt-4 text-3xl">{title}</h3>
      </CardItem>

      <CardItem translateZ="80">
        <p className="mt-2 whitespace-pre-wrap text-sm text-foreground">
          {description}
        </p>
      </CardItem>

      <CardItem translateZ="80" className="mt-4">
        <TechList technologies={technologies} />
      </CardItem>
    </CardContainer>
  </div>
)

export default ProjectCard
