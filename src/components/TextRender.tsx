import { FC, ReactNode } from 'react'
import PortableText from 'react-portable-text'
import { ListItem, Para } from './typography'
import { GalleryDataTypes } from '@/sanity/sanity.types'

interface Props {
    data: GalleryDataTypes
    classes?: string
}

interface ChildrenTypes {
    children: string | ReactNode
}

const blockElementsStyle = {
    normal: ({ children }: ChildrenTypes) => <Para>{children}</Para>,
    li: ({ children }: ChildrenTypes) => <ListItem>{children}</ListItem>,
    ul: ({ children }: ChildrenTypes) => <ul className="pl-6">{children}</ul>,
}

const TextRender: FC<Props> = ({ data, classes }) => {
    return (
        <PortableText
            content={data.desc}
            serializers={blockElementsStyle}
            className={classes}
        />
    )
}

export default TextRender
