'use client'

import type { PostsOrPages } from '@tryghost/content-api'
import Newsletter from '#blog/components/newsletter'
import PostCard from '#blog/components/post-card'
import SeparatorBoth from '~assets/separator-both.svg'

type Props = {
  featured?: PostsOrPages
}

const Blog = ({ featured }: Props) => (
  <section id="blog" className="min-h-safe flex bg-primary px-[34px] py-[89px]">
    <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-between">
      <header className="flex flex-col items-center">
        <h1 className="text-[55px] text-secondary md:text-[89px]">Blog</h1>
        <SeparatorBoth className="w-[189px] text-accent" />
        <h2 className="mt-[13px] text-center text-[34px] font-semibold text-secondary md:text-[47px]">
          Some of my written content.
        </h2>
      </header>

      <div className="mt-16 grid min-h-[512px] grid-cols-1 gap-10 !text-muted-foreground sm:grid-cols-2 lg:gap-x-6">
        {featured?.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            className="lg:grid-cols-2 lg:gap-6"
            titleClass="text-secondary"
          />
        ))}
      </div>

      <Newsletter className="mt-16 max-w-screen-md md:mt-20" />
    </div>
  </section>
)

export default Blog
