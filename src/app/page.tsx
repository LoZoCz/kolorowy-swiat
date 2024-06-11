'use client'

//MAIN FILE IMPORTS
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

//MAIN FILE COMPONENT
export default function Home() {
    return (
        <Main>
            <HeroSection />
            <CardsSection />
            <TestimonialsSeciton />
            <Footer />
        </Main>
    )
}

//HERO ICONS IMPORTS
import { H1, H2, H4, Para } from '@/components/typography'

// HERO SECTION COMPONENT
const HeroSection: FC = () => {
    return (
        <section
            style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
            className="grid max-w-screen-2xl grid-cols-1 grid-rows-2 place-items-center gap-6 rounded-lg px-4 lg:grid-cols-2 lg:grid-rows-1"
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

// CARDS SECTION IMPORTS
import {
    IoStarOutline,
    IoLogoEuro,
    IoExtensionPuzzleOutline,
} from 'react-icons/io5'

// CARDS SECTION COMPONENT
const CardsSection: FC = () => {
    return (
        <section className="max-w-screen-2xl px-4 py-8">
            <H2 classes="text-center mb-6">Zalety moich prac</H2>
            <div className="flex flex-col items-center justify-evenly gap-12 lg:flex-row lg:items-stretch">
                <div className="card w-full bg-base-100 shadow-xl md:w-1/2 lg:w-1/3">
                    <figure className="px-10 pt-10">
                        <IoStarOutline className="size-24 text-accent" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <H4 classes="card-title gap-4">Wysoka jakość</H4>
                        <Para>
                            Najwyższej jakości rękodzieła stworzone z dbałością
                            o każdy detal. Korzystamy wyłącznie z najlepszych
                            materiałów, zapewniając niezrównaną trwałość i
                            estetykę.
                        </Para>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl md:w-1/2 lg:w-1/3">
                    <figure className="px-10 pt-10">
                        <IoLogoEuro className="size-24 text-accent" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <H4 classes="card-title gap-4">Przystępna cena</H4>
                        <Para>
                            Doskonałe produkty nie muszą być drogie. Oferujemy
                            perfekcyjną równowagę między jakością a ceną,
                            zapewniając najbardziej atrakcyjne oferty dostępne
                            na rynku.
                        </Para>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl md:w-1/2 lg:w-1/3">
                    <figure className="px-10 pt-10">
                        <IoExtensionPuzzleOutline className="size-24 text-accent" />
                    </figure>
                    <div className="card-body  items-center justify-center text-center">
                        <H4 classes="card-title gap-4">Personalizowanie</H4>
                        <Para>
                            Tworzymy produkty, które są wyjątkowe tak samo jak
                            Ty. Dzięki możliwości personalizacji, możesz
                            dostosować każde zamówienie do swoich indywidualnych
                            potrzeb.
                        </Para>
                    </div>
                </div>
            </div>
        </section>
    )
}

// TESTIMONIALS IMPORTS
import { RiDoubleQuotesR } from 'react-icons/ri'
import Main from '@/components/main'

// TESTIMONIALS COMPONENT
const TestimonialsSeciton: FC = () => {
    return (
        <section className="mb-12 max-w-screen-2xl px-4 py-16">
            <H2 classes="text-center mb-6">Opinie klientów</H2>
            <div className="flex flex-col gap-24 lg:flex-row">
                <div className="relative flex gap-6 rounded-lg bg-primary/50 p-4">
                    <div>
                        <RiDoubleQuotesR className="mb-12 size-12" />
                        <div className="avatar absolute bottom-0 left-0">
                            <div className=" w-16 rounded-md">
                                <Image
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                    alt="avatar image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                    <Para classes="py-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Praesentium autem sint velit illum, atque facere
                        expedita vel explicabo ipsum pariatur.Lorem ipsum dolor
                        sit amet consectetur, adipisicing elit. Praesentium
                        autem sint velit illum, atque facere expedita vel
                        explicabo ipsum pariatur.
                    </Para>
                </div>
                <div className="relative flex gap-6 rounded-lg bg-primary/50 p-4">
                    <div>
                        <RiDoubleQuotesR className="mb-12 size-12" />
                        <div className="avatar absolute bottom-0 left-0">
                            <div className="w-16 rounded-md">
                                <Image
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                    alt="avatar image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                    <Para classes="py-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Praesentium autem sint velit illum, atque facere
                        expedita vel explicabo ipsum pariatur.Lorem ipsum dolor
                        sit amet consectetur, adipisicing elit. Praesentium
                        autem sint velit illum, atque facere expedita vel
                        explicabo ipsum pariatur.
                    </Para>
                </div>
            </div>
        </section>
    )
}

//FOOTER IMPORTS
import { AiOutlineFacebook } from 'react-icons/ai'
import { PiTiktokLogoLight } from 'react-icons/pi'

//FOOTER COMPONENT
const Footer: FC = () => {
    return (
        <footer className="footer footer-center w-full bg-secondary p-10 text-primary-content">
            <aside>
                <Image
                    src="/bigLogo.svg"
                    alt="footer logo"
                    width={200}
                    height={200}
                    className="size-32"
                    loading="lazy"
                />
                <p className="font-bold">Kolorowy Świat Upominków</p>
                <p className="font-semibold">Anna Czernik</p>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a
                        href="https://www.tiktok.com/@kolorowy.wiat.upo"
                        aria-label="facebook link"
                        className="link link-neutral"
                    >
                        <PiTiktokLogoLight className="size-8" />
                    </a>
                    <a
                        href="https://www.facebook.com/kolorowyswiat.upominkow"
                        aria-label="tiktok link"
                        className="link link-neutral"
                    >
                        <AiOutlineFacebook className="size-8" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}
