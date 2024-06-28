'use client'

import Main from '@/components/main'
import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('@/components/homePage/HeroSection'))
const CardsSection = dynamic(() => import('@/components/homePage/CardsSection'))
const TestimonialsSection = dynamic(
    () => import('@/components/homePage/TestimonialsSection')
)
const Footer = dynamic(() => import('@/components/homePage/Footer'))

export default function Home() {
    return (
        <Main>
            <HeroSection />
            <CardsSection />
            <TestimonialsSection />
            <Footer />
        </Main>
    )
}
