import { H1, Para } from '@/components/typography'
import Main from '@/components/main'
import Image from 'next/image'

const images = [
    '/aboutimage.webp',
    '/aboutimage1.webp',
    '/aboutimage2.webp',
    '/aboutimage3.webp',
]

export default function About() {
    return (
        <Main>
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="mx-auto flex max-w-screen-2xl flex-col items-center gap-4 px-6 py-4 lg:flex-row lg:gap-12"
            >
                <div className="flex flex-col gap-4 pb-12">
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
                <div className="flex justify-end">
                    <div className="mockup-phone m-0 border-primary">
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
