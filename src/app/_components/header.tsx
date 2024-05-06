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
    <header className="navbar fixed left-2 right-2 top-2 w-auto rounded-md bg-accent">
        <div className="navbar-start">
            <div className="dropdown">
                <button className="btn btn-circle btn-ghost">
                    <IoListOutline className="size-6" />
                </button>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content menu-sm -left-2 z-[1] mt-4 w-52 rounded-md bg-accent p-2 shadow"
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
            <Link
                href={routerPath.homePage.path}
                className="btn btn-ghost hidden font-libre sm:flex sm:text-2xl md:text-4xl"
            >
                {routerPath.homePage.title}
            </Link>
            <button className="btn btn-circle btn-ghost flex sm:hidden">
                <IoHomeOutline className="size-6" />
            </button>
        </div>
        <div className="navbar-end">
            <ThemeBtn />
        </div>
    </header>
)

const ThemeBtn: FC = () => {
    return (
        <label className="btn btn-circle btn-ghost swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
            />

            {/* sun icon */}
            <IoSunnyOutline className="swap-off size-6 fill-current" />

            {/* moon icon */}
            <IoMoonOutline className="swap-on size-6 fill-current" />
        </label>
    )
}

export default Header
