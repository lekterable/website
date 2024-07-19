'use server'

import content from './content'

export const getPost = async (slug: string) =>
  await content.posts.read({ slug }, { include: ['tags', 'authors'] })

export const getPosts = async ({
  filter,
  limit,
}: { filter?: string; limit?: number } = {}) =>
  await content.posts.browse({
    filter,
    include: ['tags', 'authors'],
    limit: limit ?? 'all',
  })
