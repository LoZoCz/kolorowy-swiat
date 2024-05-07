import Image from 'next/image'
import Link from 'next/link'
import image from '@/../public/heroImage.jpg'
import { FC } from 'react'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center gap-8 px-4">
            <HeroSection />
        </main>
    )
}

const HeroSection: FC = () => {
    return (
        <section
            style={{ minHeight: 'calc(100dvh - 12rem)' }}
            className="flex w-full items-center justify-evenly rounded-lg p-3"
        >
            <div className="hero-content mt-36 flex-col items-start gap-6">
                <h2 className="max-w-3xl font-libre text-5xl font-bold leading-[3.25rem]">
                    Stroiki, bombki, kwiaty i wiele więcej rzeczy ktorych
                    jeszcze nie widziałeś.
                </h2>
                <p className="max-w-xl py-4 font-inter text-lg">
                    Prezenty okolicznościowe czy też ozdoby na różne
                    uroczystości, które idealnie wpasują sie w twoje upodobania.
                    Przejrzyj moja galerie dzieł i jeśli masz ochote coś zamówić
                    skontaktuj sie ze mną.
                </p>
                <div className="flex gap-4">
                    <Link href="/blog" className="btn btn-primary text-lg">
                        Moje prace
                    </Link>
                    <Link href="/contact" className="btn btn-secondary text-lg">
                        Skontaktuj się
                    </Link>
                </div>
            </div>
            <Image
                src={image}
                alt="hero image"
                width={800}
                height={800}
                className="mask mask-squircle aspect-square max-w-2xl"
            />
        </section>
    )
}
