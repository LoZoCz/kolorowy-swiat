import Main from '@/components/main'
import { H1 } from '@/components/typography'
import { fetchGalleryItemData } from '@/sanity/sanity.queries'
import { GalleryDataTypes } from '@/sanity/sanity.types'

interface Props {
    params: { galleryID: string }
}

export default async function BlogPage({ params }: Props) {
    console.log(params.galleryID)

    const galleryItemData: GalleryDataTypes = await fetchGalleryItemData(
        params.galleryID
    )

    // console.log(galleryItemData)

    return (
        <Main>
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className=""
            >
                <H1>{galleryItemData.name}</H1>
            </section>
        </Main>
    )
}
