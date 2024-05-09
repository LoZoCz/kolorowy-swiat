import { H1 } from '@/components/typography'
import Link from 'next/link'
import { FC } from 'react'
import {
    IoListOutline,
    IoMoonOutline,
    IoSunnyOutline,
    IoHomeOutline,
    IoMailOutline,
    IoPersonCircleOutline,
    IoDocumentTextOutline,
} from 'react-icons/io5'

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
        icon: <IoPersonCircleOutline className="size-8" />,
    },
    contactPage: {
        path: '/contact',
        title: 'Kontakt',
        description: 'Strona poświęcona upominkom',
        icon: <IoMailOutline className="size-8" />,
    },
    blogPage: {
        path: '/blog',
        title: 'Blog',
        description: 'Strona poświęcona upominkom',
        icon: <IoDocumentTextOutline className="size-8" />,
    },
}

const Header: FC = () => (
    <header className="navbar fixed left-0 top-0 z-50 w-full bg-secondary py-4 text-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <button className="btn btn-circle btn-ghost">
                    <IoListOutline className="size-6" />
                </button>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content menu-sm left-px z-[1] mt-6 w-64 rounded-md bg-secondary p-2 text-base-100 shadow"
                >
                    <li>
                        <Link
                            className="flex items-center justify-between font-libre text-base md:text-2xl"
                            href={routerPath.aboutPage.path}
                        >
                            {routerPath.aboutPage.title}
                            {routerPath.aboutPage.icon}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center justify-between font-libre text-base md:text-2xl"
                            href={routerPath.blogPage.path}
                        >
                            {routerPath.blogPage.title}
                            {routerPath.blogPage.icon}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center justify-between font-libre text-base md:text-2xl"
                            href={routerPath.contactPage.path}
                        >
                            {routerPath.contactPage.title}
                            {routerPath.contactPage.icon}
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
                {routerPath.homePage.icon}
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
