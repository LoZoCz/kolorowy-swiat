'use client'

//MAIN FILE IMPORTS
import { FC } from 'react'
import Link from 'next/link'

//MAIN FILE COMPONENT
export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center gap-8 px-4">
            <HeroSection />
            <CardsSection />
            <TestimonialsSeciton />
        </main>
    )
}

//HERO ICONS IMPORTS
import { H1, H2, H4, Para } from '@/components/typography'

// HERO SECTION COMPONENT
const HeroSection: FC = () => {
    return (
        <section
            style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
            className="relative flex w-full flex-col items-center justify-evenly gap-6 rounded-lg md:flex-row"
        >
            <div className="flex-2 hero-content z-20 flex-col items-center justify-center gap-6 p-0">
                <H1 classes="max-w-3xl max-w-3xl text-center">
                    Stroiki, bombki, kwiaty i wiele więcej rzeczy ktorych
                    jeszcze nie widziałeś.
                </H1>
                <Para classes="max-w-2xl py-4 font-semibold text-center">
                    Prezenty okolicznościowe czy też ozdoby na różne
                    uroczystości, które idealnie wpasują sie w twoje upodobania.
                    Przejrzyj moja galerie dzieł i jeśli masz ochote coś zamówić
                    skontaktuj sie ze mną.
                </Para>
                <div className="flex max-w-screen-sm flex-wrap justify-center gap-4">
                    <Link href="/blog" className="btn btn-primary text-lg">
                        Moje prace
                    </Link>
                    <Link href="/contact" className="btn btn-secondary text-lg">
                        Skontaktuj się
                    </Link>
                </div>
            </div>
            <Icons />
        </section>
    )
}

//HERO ICONS IMPORTS
import {
    HiOutlineScissors,
    HiOutlinePencil,
    HiOutlineSparkles,
    HiOutlineBookOpen,
    HiOutlineCake,
    HiOutlineDocument,
    HiOutlineHeart,
} from 'react-icons/hi2'
import { PiFlowerLight } from 'react-icons/pi'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import Image from 'next/image'

// HERO ICONS COMPONENT
const Icons: FC = () => {
    const heroIcons = {
        left: [
            <HiOutlineScissors key={1} className="size-12 text-accent/40" />,
            <HiOutlinePencil key={2} className="size-12 text-accent/40" />,
            <HiOutlineSparkles key={3} className="size-12 text-accent/40" />,
            <HiOutlineBookOpen key={4} className="size-12 text-accent/40" />,
        ],
        right: [
            <HiOutlineCake key={5} className="size-12 text-accent/40" />,
            <HiOutlineDocument key={6} className="size-12 text-accent/40" />,
            <HiOutlineHeart key={8} className="size-12 text-accent/40" />,
            <PiFlowerLight key={9} className="size-12 text-accent/40" />,
        ],
    }

    return (
        <>
            {heroIcons.left.map((icon, index) => (
                <div
                    key={index}
                    className="absolute left-12 z-10 hidden origin-center translate-y-8 animate-iconsAnim lg:block"
                    style={{ top: index * 25 + '%' }}
                >
                    {icon}
                </div>
            ))}
            {heroIcons.right.map((icon, index) => (
                <div
                    key={index}
                    className="absolute right-12 z-10 hidden origin-center translate-y-8 animate-iconsAnim lg:block"
                    style={{ top: index * 25 + '%' }}
                >
                    {icon}
                </div>
            ))}
        </>
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
        <section className="max-w-screen-xl py-8">
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

// CARDS TESTIMONIALS IMPORTS
import { RiDoubleQuotesR } from 'react-icons/ri'

// CARDS TESTIMONIALS COMPONENT
const TestimonialsSeciton: FC = () => {
    return (
        <section className="mb-12 max-w-screen-xl py-16">
            <H2 classes="text-center mb-6">Opinie klientów</H2>
            <div className="flex flex-col gap-24 lg:flex-row">
                <div className="relative flex gap-6 rounded-lg bg-primary/50 p-4">
                    <div>
                        <RiDoubleQuotesR className="mb-12 size-12" />
                        <div className="avatar absolute -bottom-6 left-0 lg:-left-6">
                            <div className="mask mask-squircle w-20">
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
                        <div className="avatar absolute -bottom-6 left-0 lg:-left-6">
                            <div className="mask mask-squircle w-20">
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
