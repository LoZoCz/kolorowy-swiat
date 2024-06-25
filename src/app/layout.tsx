import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'], variable: '--fn-inter' })

export const metadata: Metadata = {
    title: 'Kolorowy Świat Upominków',
    description: 'Strona poświęcona upominkom',
}

const languages = {
    pl: 'pl',
    en: 'en',
    de: 'de',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang={languages.pl} className={inter.className}>
            <body className="bg-base-200 bg-bodyBg bg-bodyBgSize pt-header">
                <Header />
                {children}
            </body>
        </html>
    )
}
