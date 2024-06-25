import { H1, Para } from '@/components/typography'
import Main from '@/components/main'
import Image from 'next/image'

export default function About() {
    return (
        <Main>
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="flex max-w-screen-xl flex-col items-center gap-6 px-12 lg:flex-row"
            >
                <div className="flex flex-1 flex-col gap-4 pb-12">
                    <H1>Troche o mnie</H1>
                    <Para>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe officia delectus error temporibus expedita
                        assumenda iure aperiam libero nam quam ad quas
                        repudiandae tempora, impedit totam ea? Similique, culpa
                        error dignissimos.
                    </Para>
                    <Para>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe officia delectus error temporibus expedita
                        assumenda iure aperiam libero nam quam ad quas
                        repudiandae tempora, impedit totam ea? Similique, culpa
                        error dignissimos, laboriosam ratione cum amet, deserunt
                        a porro nulla in?
                    </Para>
                    <Para>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe officia delectus error temporibus expedita
                        assumenda iure aperiam libero nam quam ad quas
                        repudiandae tempora.
                    </Para>
                </div>
                <div className="flex flex-1">
                    <div className="mockup-phone mx-auto border-primary">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo aspect-9/16 w-full sm:w-80">
                                <Image
                                    src="/aboutimage.webp"
                                    alt="about page image"
                                    width={450}
                                    height={300}
                                    className="h-full w-full rounded-md object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    )
}
