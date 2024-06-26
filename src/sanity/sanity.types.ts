export type BlogTypes = {
    map(
        arg0: (item: any, index: any) => import('react').JSX.Element
    ): import('react').ReactNode
    _id: string
    _type: 'blog'
    _createdAt: string
    _updatedAt: string
    _rev: string
    name?: string
    slug?: Slug
    desc?: Array<{
        children?: Array<{
            marks?: Array<string>
            text?: string
            _type: 'span'
            _key: string
        }>
        style?:
            | 'normal'
            | 'h1'
            | 'h2'
            | 'h3'
            | 'h4'
            | 'h5'
            | 'h6'
            | 'blockquote'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
            href?: string
            _type: 'link'
            _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
    }>
    imgs?: Array<{
        asset?: {
            _ref: string
            _type: 'reference'
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'poster'
        _key: string
    }>
}

export type Slug = {
    _type: 'slug'
    current?: string
    source?: string
}

export type SanityImageCrop = {
    _type: 'sanity.imageCrop'
    top?: number
    bottom?: number
    left?: number
    right?: number
}

export type SanityImageHotspot = {
    _type: 'sanity.imageHotspot'
    x?: number
    y?: number
    height?: number
    width?: number
}

export declare const internalGroqTypeReferenceTo: unique symbol
