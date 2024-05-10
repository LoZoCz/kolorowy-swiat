'use client'

import { H1 } from '@/components/typography'
import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'
import {
    IoListOutline,
    IoMoonOutline,
    IoSunnyOutline,
    IoHomeOutline,
    IoMailOutline,
    IoPersonCircleOutline,
    IoDocumentTextOutline,
} from 'react-icons/io5'
import { twMerge } from 'tailwind-merge'

const routerPath = {
    homePage: {
        path: '/',
        title: 'Kolorowy Świat Upominków',
        description: 'Strona poświęcona upominkom',
        icon: <IoHomeOutline className="flex size-8 sm:hidden" />,
    },
    aboutPage: {
        path: '/about',
        title: 'O mnie',
        description: 'Strona poświęcona upominkom',
        icon: <IoPersonCircleOutline className="flex size-8 lg:hidden" />,
    },
    contactPage: {
        path: '/contact',
        title: 'Kontakt',
        description: 'Strona poświęcona upominkom',
        icon: <IoMailOutline className="flex size-8 lg:hidden" />,
    },
    blogPage: {
        path: '/blog',
        title: 'Blog',
        description: 'Strona poświęcona upominkom',
        icon: <IoDocumentTextOutline className="flex size-8 lg:hidden" />,
    },
}

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
                    href={routerPath.homePage.path}
                    className="btn btn-ghost"
                >
                    <H1 classes="sm:text-2xl md:text-4xl hidden sm:flex">
                        {routerPath.homePage.title}
                    </H1>
                    {routerPath.homePage.icon}
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
                    className={twMerge(
                        'z-[1] hidden gap-4 text-base-100 lg:static lg:m-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:p-0 lg:shadow-none',
                        isOpenStyles
                    )}
                >
                    <li>
                        <Link
                            onClick={() => closeMenu()}
                            className="btn btn-ghost flex items-center justify-between font-libre text-base font-light md:text-2xl"
                            href={routerPath.aboutPage.path}
                        >
                            {routerPath.aboutPage.title}
                            {routerPath.aboutPage.icon}
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => closeMenu()}
                            className="btn btn-ghost flex items-center justify-between font-libre text-base font-light md:text-2xl"
                            href={routerPath.blogPage.path}
                        >
                            {routerPath.blogPage.title}
                            {routerPath.blogPage.icon}
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => closeMenu()}
                            className="btn btn-ghost flex items-center justify-between font-libre text-base font-light md:text-2xl"
                            href={routerPath.contactPage.path}
                        >
                            {routerPath.contactPage.title}
                            {routerPath.contactPage.icon}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

const ThemeBtn: FC = () => {
    return (
        <label className="btn btn-circle btn-ghost swap swap-rotate">
            <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
            />

            <IoSunnyOutline className="swap-off size-6 fill-current" />
            <IoMoonOutline className="swap-on size-6 fill-current" />
        </label>
    )
}

export default Header
