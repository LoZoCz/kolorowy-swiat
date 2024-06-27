import Main from '@/components/main'
import { H1, H4 } from '@/components/typography'
import { fetchGalleryData } from '@/sanity/sanity.queries'
import { GalleryDataTypes } from '@/sanity/sanity.types'
import Image from 'next/image'
import Link from 'next/link'

export default async function Blog() {
    const galleryData: GalleryDataTypes[] = await fetchGalleryData()

    return (
        <Main classes="block">
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="pb-12"
            >
                <H1 classes="mx-auto my-8 text-center">Galeria moich dzieł</H1>

                <article className="mx-auto grid max-w-screen-2xl grid-cols-blogGrid gap-6 px-12">
                    {galleryData.map(
                        ({ name, slug, _id, thumbnail }, index) => (
                            <Link
                                href={'/gallery/' + _id}
                                key={index}
                                className="relative flex aspect-square w-full cursor-pointer overflow-hidden rounded-md bg-primary text-left text-base-100 before:absolute before:inset-0 before:z-20 before:bg-gradient-to-t before:from-slate-800 before:via-transparent before:opacity-100 before:transition-opacity before:duration-300 before:content-['']"
                            >
                                <H4 classes="mt-auto pb-2 pl-2 z-30">{name}</H4>
                                <Image
                                    className="absolute inset-0 h-full w-full bg-primary object-cover"
                                    alt={slug.current + '-image'}
                                    src={thumbnail.url}
                                    width={600}
                                    height={400}
                                    priority
                                />
                            </Link>
                        )
                    )}
                </article>
            </section>
        </Main>
    )
}
