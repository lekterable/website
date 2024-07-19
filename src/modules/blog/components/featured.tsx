import PostCard from './post-card'
import { getPosts } from '#blog/actions'

type Props = {
  className?: string
}

const Featured = async ({ className }: Props) => {
  const featured = await getPosts({ filter: 'featured:true', limit: 2 })

  return (
    <div className={className}>
      <h2 className="text-7xl font-bold sm:text-8xl">Featured</h2>
      <div className="mt-8 flex flex-col gap-8">
        {featured.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            className="md:grid-cols-2 md:gap-6"
          />
        ))}
      </div>
    </div>
  )
}

export default Featured
