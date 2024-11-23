import { Waves } from '~components'
import LatestProjects from './latest-projects'

const Projects = () => (
  <section id="projects">
    <Waves className="rotate-180" upsideDown />
    <LatestProjects />
    <Waves />
  </section>
)

export default Projects
