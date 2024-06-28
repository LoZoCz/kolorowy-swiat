import { H1, Para } from '@/components/typography'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const HeroSection: FC = () => {
    return (
        <section
            style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
            className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 rounded-lg px-4 pb-12 lg:flex-row"
        >
            <div className="hero-content z-20 flex-col items-start gap-6 justify-self-center p-0 lg:justify-self-end">
                <H1 classes="max-w-3xl max-w-3xl text-center lg:text-left">
                    Stroiki, bombki, kwiaty i wiele więcej rzeczy ktorych
                    jeszcze nie widziałeś.
                </H1>
                <Para classes="max-w-2xl py-4 font-semibold text-center lg:text-left">
                    Prezenty okolicznościowe czy też ozdoby na różne
                    uroczystości, które idealnie wpasują sie w twoje upodobania.
                    Przejrzyj moja galerie dzieł i jeśli masz ochote coś zamówić
                    skontaktuj sie ze mną.
                </Para>
                <div className="flex w-full flex-wrap justify-center gap-4 lg:justify-start">
                    <Link
                        aria-label="blog link"
                        href="/blog"
                        className="btn btn-primary text-lg"
                    >
                        Moje prace
                    </Link>
                    <Link
                        aria-label="contact link"
                        href="/contact"
                        className="btn btn-outline btn-secondary text-lg"
                    >
                        Skontaktuj się
                    </Link>
                </div>
            </div>
            <div className="grid max-w-xl grid-cols-2 grid-rows-2 gap-4 justify-self-end">
                <Image
                    src="/images/stroik2.webp"
                    className="aspect-square w-full rounded-md object-cover opacity-85 shadow-xl"
                    alt="hero sect image"
                    width={500}
                    height={1000}
                    loading="lazy"
                />
                <Image
                    src="/images/stroik6.webp"
                    className="aspect-square w-full rounded-md object-cover opacity-85 shadow-xl"
                    alt="hero sect image"
                    width={1000}
                    height={500}
                    loading="lazy"
                />
                <Image
                    src="/images/stroik7.webp"
                    className="aspect-square w-full rounded-md object-cover opacity-85 shadow-xl"
                    alt="hero sect image"
                    width={500}
                    height={1000}
                    loading="lazy"
                />
                <Image
                    src="/images/stroik8.webp"
                    className="aspect-square w-full rounded-md object-cover opacity-85 shadow-xl"
                    alt="hero sect image"
                    width={500}
                    height={1000}
                    loading="lazy"
                />
            </div>
        </section>
    )
}

export default HeroSection
