import Main from '@/components/main'
import { H1, H4 } from '@/components/typography'
import { fetchBlogData } from '@/sanity/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

export default async function Blog() {
    const blogData = await fetchBlogData()

    return (
        <Main classes="block">
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="pb-12"
            >
                <H1 classes="mx-auto my-8 text-center">Galeria moich dzieł</H1>

                <article className="mx-auto grid max-w-screen-2xl grid-cols-blogGrid gap-6 px-12">
                    {blogData.map(
                        (
                            item,
                            index // make types for the fetched data, dont use sanity's generated types
                        ) => (
                            <Link
                                href={'/' + item.slug.current}
                                key={index}
                                className="relative flex aspect-square w-full cursor-pointer overflow-hidden rounded-md bg-primary text-left text-base-100 before:absolute before:inset-0 before:z-20 before:bg-gradient-to-t before:from-slate-800 before:via-transparent before:opacity-100 before:transition-opacity before:duration-300 before:content-['']"
                            >
                                <H4 classes="mt-auto pb-2 pl-2 z-30">
                                    {item.name}
                                </H4>
                                <Image
                                    className="absolute inset-0 h-full w-full object-cover"
                                    alt={item.slug.current + '-image'}
                                    src={item.imgs[0].url}
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
