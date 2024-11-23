import { About, Blog, Contact, Hero, Projects } from './components'
import { getPosts } from '#blog/actions'

const Home = async () => (
  <div className="pb-[34px] md:pb-[55px]">
    <Hero />
    <About />
    <Projects />
    <Blog featured={await getPosts({ limit: 4 })} />
    <Contact />
  </div>
)

export default Home
