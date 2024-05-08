'use client'

//MAIN FILE IMPORTS
import { FC } from 'react'
import Link from 'next/link'

//MAIN FILE COMPONENT
export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center gap-8 px-4">
            <HeroSection />
        </main>
    )
}

//HERO ICONS IMPORTS
import { H1, Para } from '@/components/typography'

// HERO SECTION COMPONENT
const HeroSection: FC = () => {
    return (
        <section
            style={{ minHeight: 'calc(100dvh - 12rem)' }}
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
                <div className="flex justify-center gap-4">
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

// HERO ICONS VARIANTS
const iconVariants = {
    initial: (direction: string) => ({
        opacity: 0,
        x: direction === 'left' ? '-100%' : '100%',
        y: '4rem',
    }),
    animate: {
        opacity: 1,
        x: 0,
        y: '4rem',
    },
}

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
        <LazyMotion features={domAnimation}>
            {heroIcons.left.map((icon, index) => (
                <m.div
                    key={index}
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    custom="left"
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="animate-iconsAnim absolute left-12 z-10 hidden origin-center lg:block"
                    style={{ top: index * 25 + '%' }}
                >
                    {icon}
                </m.div>
            ))}
            {heroIcons.right.map((icon, index) => (
                <m.div
                    key={index}
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    custom="right"
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="animate-iconsAnim absolute right-12 z-10 hidden origin-center lg:block"
                    style={{ top: index * 25 + '%' }}
                >
                    {icon}
                </m.div>
            ))}
        </LazyMotion>
    )
}
