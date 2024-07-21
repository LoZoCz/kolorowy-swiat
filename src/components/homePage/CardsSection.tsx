import { H1, H2, H4, Para } from '@/components/typography'
import { FC } from 'react'
import {
    IoStarOutline,
    IoLogoEuro,
    IoExtensionPuzzleOutline,
} from 'react-icons/io5'

const CardsSection: FC = () => {
    return (
        <section className="mx-auto max-w-screen-2xl px-4 py-8">
            <H2 classes="text-center mb-6">Zalety moich prac</H2>
            <div className="flex flex-col items-center justify-evenly gap-12 lg:flex-row lg:items-stretch">
                <div className="card w-full bg-base-100 shadow-xl md:w-1/2 lg:w-1/3">
                    <figure className="px-10 pt-10">
                        <IoStarOutline className="size-24 text-accent" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <H4 classes="card-title gap-4">Wysoka jakość</H4>
                        <Para>
                            Rękodzieła stworzone z dbałością o każdy detal.
                            Korzystam wyłącznie z najlepszych materiałów,
                            zapewniając niezrównaną trwałość i estetykę.
                        </Para>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl md:w-1/2 lg:w-1/3">
                    <figure className="px-10 pt-10">
                        <IoLogoEuro className="size-24 text-accent" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <H4 classes="card-title gap-4">Przystępna cena</H4>
                        <Para>
                            Doskonałe produkty nie muszą być drogie. Oferuje
                            perfekcyjną równowagę między jakością a ceną,
                            zapewniając najbardziej atrakcyjne oferty dostępne
                            na rynku.
                        </Para>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl md:w-1/2 lg:w-1/3">
                    <figure className="px-10 pt-10">
                        <IoExtensionPuzzleOutline className="size-24 text-accent" />
                    </figure>
                    <div className="card-body  items-center justify-center text-center">
                        <H4 classes="card-title gap-4">Personalizowanie</H4>
                        <Para>
                            Tworzymy produkty, które są wyjątkowe tak samo jak
                            Ty. Dzięki możliwości personalizacji, możesz
                            dostosować każde zamówienie do swoich indywidualnych
                            potrzeb.
                        </Para>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardsSection
