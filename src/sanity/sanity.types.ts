// Gallery sanity data types

export type StyleType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'normal'
    | 'blockquote'

export interface Desc {
    _key: string
    _type: 'block'
    style: StyleType
    markDefs: any[]
    children: Child[]
    level?: number
    listItem?: string
}

export interface Child {
    _key: string
    _type: 'span'
    text: string
    marks: string[]
}

export interface GalleryDataTypes {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    desc: Desc[]
    img: {
        _type: string
        asset: {
            _ref: string
            _type: string
        }
    }
    imgs: Array<{
        _key: string
        _type: string
        asset: {
            _ref: string
            _type: string
        }
        url: string
    }>
    thumbnail: {
        url: string
    }
    name: string
    slug: {
        _type: string
        current: string
    }
    _updatedAt: string
}

// Testimonial sanity data types

export interface TestimonialDataTypes {
    name: string
    testimonial: Testimonial[]
    image: Image
}

export interface Image {
    url: string
}

export interface Testimonial {
    _type: string
    style: string
    _key: string
    markDefs: any[]
    children: TestChild[]
}

export interface TestChild {
    _type: string
    marks: any[]
    text: string
    _key: string
}

//
