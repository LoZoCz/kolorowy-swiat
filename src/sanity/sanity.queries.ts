// blog queries

import client from './sanity.client'

const blogQuery = `
*[ _type == "blog"]{
  name,
  slug,
  desc,
  imgs[] {
    'url':asset->url
  }
}`

export const fetchBlogData = async () => {
    return await client.fetch(blogQuery)
}
