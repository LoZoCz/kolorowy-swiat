export interface GalleryDataTypes {
    _id: string
    name: string
    slug: Slug
    desc: Desc[]
    imgs: Thumbnail[]
    thumbnail: Thumbnail
}

export interface Desc {
    markDefs: any[]
    children: Child[]
    _type: DescType
    style: Style
    _key: string
    listItem?: string
    level?: number
}

export enum DescType {
    Block = 'block',
}

export interface Child {
    _type: ChildType
    marks: any[]
    text: string
    _key: string
}

export enum ChildType {
    Span = 'span',
}

export enum Style {
    Normal = 'normal',
}

export interface Thumbnail {
    url: string
}

export interface Slug {
    current: string
    _type: string
}
