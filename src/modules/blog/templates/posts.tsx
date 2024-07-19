import Featured from '../components/featured'
import Latest from '../components/latest'
import Newsletter from '../components/newsletter'

const Blog = async () => (
  <section className="px-8 pb-24">
    <div className="mx-auto max-w-screen-md">
      <Featured />
      <Newsletter className="mt-16 md:mt-20" />
      <Latest className="mt-16 md:mt-20" />
    </div>
  </section>
)

export default Blog
