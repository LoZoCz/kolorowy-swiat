import type { Metadata } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/app/_components/header'
import Footer from '@/app/_components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--fn-inter' })
const libreBasker = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--fn-libreBasker',
})

export const metadata: Metadata = {
    title: 'Kolorowy Świat Upominków',
    description: 'Strona poświęcona upominkom',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pl" className={`${inter.variable} ${libreBasker.variable}`}>
            <body className="bg-base-200 bg-bodyBg bg-bodyBgSize pt-header">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
