import Main from '@/components/main'
import { H1 } from '@/components/typography'

export default function Blog() {
    return (
        <Main classes="block">
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="pb-12"
            >
                <H1 classes="mx-auto my-8 text-center">Blog z moimi pracami</H1>
                <article className="mx-auto grid max-w-screen-2xl grid-cols-blogGrid gap-6 px-12">
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                    <div className="aspect-3/4 w-full rounded-md bg-primary"></div>
                </article>
            </section>
        </Main>
    )
}
