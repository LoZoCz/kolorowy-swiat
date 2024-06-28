import TextRender from '@/components/TextRender'
import Main from '@/components/main'
import { H1 } from '@/components/typography'
import { fetchGalleryItemData } from '@/sanity/sanity.queries'
import { GalleryDataTypes } from '@/sanity/sanity.types'
import Image from 'next/image'

interface Props {
    params: { galleryID: string }
}

export default async function BlogPage({ params }: Props) {
    console.log(params.galleryID)

    const galleryItemData: GalleryDataTypes = await fetchGalleryItemData(
        params.galleryID
    )

    return (
        <Main>
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="mx-auto flex max-w-screen-2xl flex-wrap items-center gap-4 px-8"
            >
                <div className="flex-1 space-y-4">
                    <H1>{galleryItemData.name}</H1>
                    <TextRender data={galleryItemData} classes="space-y-4" />
                </div>
                <Image
                    src={galleryItemData.imgs[0].url}
                    alt="nice image"
                    width={600}
                    height={400}
                    className="aspect-square h-full w-full flex-1 rounded-md object-cover"
                />
            </section>
        </Main>
    )
}
