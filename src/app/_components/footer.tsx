import { FC } from 'react'
import Image from 'next/image'
import logoImage from '@/../public/bigLogo.svg'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { PiTiktokLogoLight } from 'react-icons/pi'

const Footer: FC = () => {
    return (
        <footer className="footer footer-center w-full bg-secondary p-10 text-primary-content">
            <aside>
                <Image
                    src={logoImage}
                    alt="footer logo"
                    width={200}
                    height={200}
                    className="size-32"
                />
                <p className="font-bold">Kolorowy Świat Upominków</p>
                <p className="font-semibold">Anna Czernik</p>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <PiTiktokLogoLight className="size-8" />
                    </a>
                    <a>
                        <FaInstagram className="size-8" />
                    </a>
                    <a>
                        <AiOutlineFacebook className="size-8" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
