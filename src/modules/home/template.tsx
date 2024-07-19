'use client' // caused by SVG from all sections for some reason

import { About, Blog, Contact, Hero, Projects } from './components'

const Home = (): JSX.Element => (
  <div className="pb-[34px] md:pb-[55px]">
    <Hero />
    <About />
    <Projects />
    <Blog />
    <Contact />
  </div>
)

export default Home
