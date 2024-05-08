import { H1 } from '@/components/typography'
import Link from 'next/link'
import { FC } from 'react'
import {
    IoListOutline,
    IoMoonOutline,
    IoSunnyOutline,
    IoHomeOutline,
} from 'react-icons/io5'

const routerPath = {
    homePage: {
        path: '/',
        title: 'Kolorowy Świat Upominków',
        description: 'Strona poświęcona upominkom',
    },
    aboutPage: {
        path: '/about',
        title: 'O nas',
        description: 'Strona poświęcona upominkom',
    },
    contactPage: {
        path: '/contact',
        title: 'Kontakt',
        description: 'Strona poświęcona upominkom',
    },
    blogPage: {
        path: '/blog',
        title: 'Blog',
        description: 'Strona poświęcona upominkom',
    },
}

const Header: FC = () => (
    <header className="navbar fixed left-4 right-4 top-2 z-50 w-auto rounded-md bg-secondary text-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <button className="btn btn-circle btn-ghost">
                    <IoListOutline className="size-6" />
                </button>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content menu-sm -left-2 z-[1] mt-4 w-52 rounded-md bg-secondary p-2 text-base-100 shadow"
                >
                    <li>
                        <Link
                            className="font-libre text-base md:text-lg"
                            href={routerPath.aboutPage.path}
                        >
                            {routerPath.aboutPage.title}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="font-libre text-base md:text-lg"
                            href={routerPath.blogPage.path}
                        >
                            {routerPath.blogPage.title}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="font-libre text-base md:text-lg"
                            href={routerPath.contactPage.path}
                        >
                            {routerPath.contactPage.title}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="navbar-center">
            <Link href={routerPath.homePage.path} className="btn btn-ghost">
                <H1 classes="sm:text-2xl md:text-4xl hidden sm:flex">
                    {routerPath.homePage.title}
                </H1>
                <IoHomeOutline className="flex size-6 sm:hidden" />
            </Link>
        </div>
        <div className="navbar-end">
            <ThemeBtn />
        </div>
    </header>
)

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
