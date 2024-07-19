import is from '@sindresorhus/is'
import type { PostOrPage } from '@tryghost/content-api'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '~utils'
import ReadMore from './read-more'
import { CardContainer, CardItem } from '~components/ui/3d-card'

type Props = {
  titleClass?: string
  className?: string
  post: PostOrPage
}

const PostCard = ({ className, post, titleClass }: Props) => {
  const {
    // primary_tag,
    feature_image,
    feature_image_alt,
    // published_at,
    reading_time,
    slug,
    title,
    custom_excerpt,
    excerpt,
  } = post

  const link = `/blog/${slug}`

  return (
    <Link href={link}>
      <CardContainer
        className={cn('group/card group relative grid gap-3', className)}
      >
        {is.string(feature_image) && (
          <CardItem
            className="relative w-full"
            style={{ aspectRatio: '16/9' }}
            translateZ="60"
          >
            <Image
              className="h-full w-full rounded-lg object-cover"
              src={feature_image}
              alt={feature_image_alt ?? title ?? 'Post card image'}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 1280px"
            />
          </CardItem>
        )}

        <div className="flex flex-col gap-2">
          <CardItem translateZ="40">
            <p className="flex font-mono text-xs leading-none">
              {reading_time} min read
            </p>
          </CardItem>

          {/* {primary_tag && (
              <Link href={`/tags/${primary_tag.slug}`}>
              <h3 className="text-xl uppercase leading-none tracking-wide text-muted-foreground">
              {primary_tag.name}
              </h3>
              </Link>
            )} */}

          <CardItem translateZ="60">
            <h3
              className={cn(
                'text-4xl leading-none tracking-tight lg:text-3xl',
                titleClass,
              )}
            >
              {title}
            </h3>
          </CardItem>

          <CardItem translateZ="40">
            <ReadMore
              lines={3}
              className="text-accent-foreground group-hover:text-accent"
            >
              {custom_excerpt ?? excerpt}
            </ReadMore>
          </CardItem>
        </div>
      </CardContainer>
    </Link>
  )
}

export default PostCard
