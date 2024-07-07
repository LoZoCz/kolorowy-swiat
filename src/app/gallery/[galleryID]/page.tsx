import ImageCarousel from '@/components/ImageCarousel'
import TextRender from '@/components/TextRender'
import Main from '@/components/main'
import { H1 } from '@/components/typography'
import { fetchGalleryItemData } from '@/sanity/sanity.queries'
import { GalleryDataTypes } from '@/sanity/sanity.types'

interface Props {
    params: { galleryID: string }
}

export default async function BlogPage({ params }: Props) {
    const galleryItemData: GalleryDataTypes = await fetchGalleryItemData(
        params.galleryID
    )

    return (
        <Main>
            <section
                style={{
                    minHeight: 'calc(100dvh - var(--header-h))',
                }}
                className="mx-auto flex max-w-screen-2xl flex-wrap items-center gap-12 px-8"
            >
                <div className="flex-1 space-y-4">
                    <H1>{galleryItemData.name}</H1>
                    <TextRender data={galleryItemData} classes="space-y-4" />
                </div>
                <ImageCarousel images={galleryItemData.imgs} />
            </section>
        </Main>
    )
}
