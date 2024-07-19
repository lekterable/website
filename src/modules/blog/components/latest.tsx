import { getPosts } from '../actions'
import PostCard from './post-card'

type Props = { className?: string }

const Latest = async ({ className }: Props) => {
  const posts = await getPosts()

  return (
    <div className={className}>
      <h2 className="text-6xl font-bold">Latest posts</h2>
      <div
        className={
          'mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 3xl:grid-cols-4'
        }
      >
        {posts?.map((post) => <PostCard key={post.uuid} post={post} />)}
      </div>
    </div>
  )
}

export default Latest
