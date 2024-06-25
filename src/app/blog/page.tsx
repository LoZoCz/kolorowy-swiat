import Main from '@/components/main'
import { H1, H3, Para } from '@/components/typography'

export default function Blog() {
    return (
        <Main classes="block">
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="pb-12"
            >
<<<<<<< HEAD
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
=======
                <H1 classes="mx-auto my-8 text-center">About Page</H1>
                <article className="mx-auto grid max-w-screen-2xl grid-cols-blogGrid gap-6 px-12">
                    {Array(21)
                        .fill(null)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="group relative grid aspect-3/4 w-full overflow-hidden rounded-md bg-primary text-base-100 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-800 before:via-transparent before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100"
                            >
                                <div className="z-50 self-end p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <H3>Main title</H3>
                                    <Para>
                                        Lorem ipsum lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Excepturi,
                                        minus?
                                    </Para>
                                </div>
                            </div>
                        ))}
>>>>>>> f7ebf0b46fd41979d83871733891696962a83ac5
                </article>
            </section>
        </Main>
    )
}
