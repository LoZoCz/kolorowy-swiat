import Image from 'next/image'
import { FC } from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { PiTiktokLogoLight } from 'react-icons/pi'

//FOOTER COMPONENT
const Footer: FC = () => {
    return (
        <footer className="footer footer-center w-full bg-secondary p-10 text-primary-content">
            <aside>
                <Image
                    src="/bigLogo.svg"
                    alt="footer logo"
                    width={200}
                    height={200}
                    className="size-32"
                    loading="lazy"
                />
                <p className="font-bold">Kolorowy Świat Upominków</p>
                <p className="font-semibold">Anna Czernik</p>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a
                        href="https://www.tiktok.com/@kolorowy.wiat.upo"
                        aria-label="facebook link"
                        className="link link-neutral"
                    >
                        <PiTiktokLogoLight className="size-8" />
                    </a>
                    <a
                        href="https://www.facebook.com/kolorowyswiat.upominkow"
                        aria-label="tiktok link"
                        className="link link-neutral"
                    >
                        <AiOutlineFacebook className="size-8" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
