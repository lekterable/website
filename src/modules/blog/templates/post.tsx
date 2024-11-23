import is from '@sindresorhus/is'
import type { PostOrPage } from '@tryghost/content-api'
import { format } from 'date-fns'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '~utils'
import HighlightSyntax from '#blog/components/highlight-syntax'

type Props = { post: PostOrPage }

const headingClasses = `
  prose-h1:mt-12 prose-h1:mb-10 prose-h1:text-7xl
  prose-h2:mt-10 prose-h2:mb-8 prose-h2:text-5xl
  prose-h3:mt-10 prose-h3:mb-8 prose-h3:text-4xl
  prose-h4:mt-6 prose-h4:mb-5 prose-h4:text-3xl
  prose-h5:mt-6 prose-h5:mb-5 prose-h5:text-2xl
  prose-h6:mt-4 prose-h6:mb-4 prose-h6:text-xl
`

const Post = async ({ post }: Props) => {
  const {
    reading_time,
    feature_image,
    feature_image_alt,
    title,
    custom_excerpt,
    excerpt,
    html,
    primary_author,
    primary_tag,
    published_at,
    feature_image_caption,
  } = post

  return (
    <article>
      <Link
        className="mb-8 flex w-max items-center gap-1 leading-none text-primary hover:text-accent"
        href="/blog"
      >
        <ArrowLeft className="mb-1 h-5 w-5" /> All Posts
      </Link>

      {primary_tag && (
        <div
          className="text-xl text-accent-foreground md:text-2xl"
          // href={`/tags/${primary_tag.slug}`}
        >
          # {primary_tag.name}
        </div>
      )}

      <h1 className="my-2 text-5xl leading-tight sm:text-6xl md:text-8xl lg:mb-6">
        {title}
      </h1>

      <p className="text-lg sm:text-xl">{custom_excerpt ?? excerpt}</p>

      <header className="my-4 lg:my-6">
        <address className="mb-6 flex items-center justify-between not-italic">
          {primary_author && (
            <div
              // TODO: Add author page
              // href={`/authors/${primary_author.slug}`}
              // rel="author"
              className="flex items-center gap-4 font-bold text-primary md:text-xl"
            >
              <Image
                width={40}
                height={40}
                className="rounded-full"
                src={primary_author.profile_image ?? ''}
                alt={primary_author.name ?? ''}
              />
              <p>{primary_author.name}</p>
            </div>
          )}

          <div className="flex items-center">
            {is.string(published_at) && (
              <time
                className="mx-1 text-sm text-primary md:text-base"
                dateTime={published_at}
                title={format(new Date(published_at), 'yyyy-MM-dd')}
              >
                {format(new Date(published_at), 'dd MMMM, yyyy')}
              </time>
            )}
            <div className="mx-1"> ・ </div>
            <p className="text-sm text-muted-foreground md:text-base">
              {reading_time} min read
            </p>
          </div>
        </address>
      </header>

      <figure>
        {is.string(feature_image) && (
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              className="h-full w-full rounded-lg object-cover"
              src={feature_image}
              alt={feature_image_alt ?? title ?? 'Post feature image'}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 1280px"
            />
          </div>
        )}
        {is.string(feature_image_caption) && (
          <figcaption
            suppressHydrationWarning
            className="text-center"
            dangerouslySetInnerHTML={{ __html: feature_image_caption }}
          />
        )}
      </figure>

      <div
        suppressHydrationWarning
        className={cn(
          'prose prose-lg prose-slate prose-sky mt-8',
          headingClasses,
        )}
        dangerouslySetInnerHTML={{ __html: html ?? '' }}
      />
      <HighlightSyntax />
    </article>
  )
}

export default Post
