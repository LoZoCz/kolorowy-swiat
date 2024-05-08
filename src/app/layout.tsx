import type { Metadata } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/app/_components/header'

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
            <body className="bg-bodyBg bg-bodyBgSize bg-base-200 pt-header">
                <Header />
                {children}
            </body>
        </html>
    )
}
