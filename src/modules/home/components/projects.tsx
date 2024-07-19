import { Waves } from '~components'
import ProjectList from './project-list'
import SeparatorBoth from '~assets/separator-both.svg'

const Projects = () => (
  <section id="projects">
    <Waves className="rotate-180" upsideDown />
    <div className="min-h-safe w-full px-[34px] pb-[55px] pt-[89px] xs:px-[55px]">
      <header className="flex flex-col items-center">
        <h1 className="text-[55px] md:text-[89px]">Projects</h1>
        <SeparatorBoth className="w-[189px] text-accent" />
        <div className="mt-[13px] flex flex-col text-center text-[34px] font-semibold md:text-[47px]">
          <h2>Things I&apos;ve worked on.</h2>
          <h2>(the latest)</h2>
        </div>
      </header>
      <ProjectList />
    </div>
    <Waves />
  </section>
)

export default Projects
