import client from './sanity.client'

// gallery query

const galleryQuery = `
*[_type == "gallery"]{
  _id,
  name,
  slug,
  desc,
  imgs[] {
    'url':asset->url
  },
  'thumbnail':img {
    'url':asset->url
  }
}`

export const fetchGalleryData = async () => {
    return await client.fetch(galleryQuery)
}

// one gallery item query

export const fetchGalleryItemData = async (param: string) => {
    if (param === null || param === undefined) {
        throw new Error('Invalid parameter: insert query param')
    }

    const galleryItemQuery = `
    *[_type == "gallery" && _id == "${param}"][0]{
      name,
      slug,
      desc,
      imgs[] {
        'url':asset->url
      },
      'thumbnail':img {
        'url':asset->url
      }
    }`

    return await client.fetch(galleryItemQuery)
}

// testimonial query

const testimonialQuery = `
*[_type == "opinie"]{
  name,
  testimonial,
  'image':poster {
    'url':asset->url
  }
}`

export const fetchTestimonialsData = async () => {
    return await client.fetch(testimonialQuery)
}
