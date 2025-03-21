import { getPost, getPosts } from '#blog/actions'
import Newsletter from '#blog/components/newsletter'
import { Post as PostTemplate } from '#blog/templates'

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({ slug: post.slug }))
}

const Post = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const post = await getPost((await params).slug)

  return (
    <section className="bg-background px-8 pb-24">
      <div className="mx-auto max-w-screen-md">
        <PostTemplate post={post} />
        <Newsletter className="mt-16 md:mt-20" />
      </div>
    </section>
  )
}
export default Post
