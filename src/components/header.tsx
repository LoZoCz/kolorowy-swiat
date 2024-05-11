'use client'

import { H1 } from '@/components/typography'
import Link from 'next/link'
import { FC, useState } from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'
import mergeClass from '@/utils/mergeClass'
import {
    IoListOutline,
    IoHomeOutline,
    IoMailOutline,
    IoPersonCircleOutline,
    IoDocumentTextOutline,
} from 'react-icons/io5'

const routerPath = [
    {
        path: '/',
        title: 'Kolorowy Świat Upominków',
        description: 'Strona poświęcona upominkom',
        label: 'Kolorowy',
        icon: <IoHomeOutline className="flex size-8 sm:hidden" />,
    },
    {
        path: '/about',
        title: 'O mnie',
        description: 'Troche o mnie',
        label: 'about page link',
        icon: <IoPersonCircleOutline className="flex size-8 lg:hidden" />,
    },
    {
        path: '/blog',
        title: 'Blog',
        description: 'Galeria moich prac',
        label: 'blog page link',
        icon: <IoDocumentTextOutline className="flex size-8 lg:hidden" />,
    },
    {
        path: '/contact',
        title: 'Kontakt',
        description: 'Forma kontaktu ze mną',
        label: 'contact page link',
        icon: <IoMailOutline className="flex size-8 lg:hidden" />,
    },
]

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useOnclickOutside(() => closeMenu())

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const isOpenStyles = isOpen
        ? 'flex absolute top-full right-4 flex-col left-4 sm:left-2/3 mt-4 bg-secondary rounded-lg shadow-xl p-4'
        : 'hidden'

    return (
        <header className="navbar fixed left-0 top-0 z-50 w-full justify-between bg-secondary py-4 text-base-100">
            <div className="">
                <Link
                    onClick={() => closeMenu()}
                    href={routerPath[0].path}
                    aria-label={routerPath[0].label}
                    className="btn btn-ghost"
                >
                    <H1 classes="sm:text-2xl md:text-4xl hidden sm:flex">
                        {routerPath[0].title}
                    </H1>
                    {routerPath[0].icon}
                </Link>
            </div>
            <nav className="">
                <button
                    onClick={() => toggleMenu()}
                    className="btn btn-ghost flex lg:hidden"
                >
                    <IoListOutline className="size-6" />
                </button>
                <ul
                    ref={ref}
                    className={mergeClass(
                        'z-[1] hidden gap-4 text-base-100 lg:static lg:m-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:p-0 lg:shadow-none',
                        isOpenStyles
                    )}
                >
                    {routerPath
                        .filter((_, index) => index > 0)
                        .map((link, index) => (
                            <li key={index}>
                                <Link
                                    onClick={() => closeMenu()}
                                    href={link.path}
                                    aria-label={link.label}
                                    className="btn btn-ghost flex items-center justify-between font-inter text-base font-normal md:text-xl"
                                >
                                    {link.title}
                                    {link.icon}
                                </Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
