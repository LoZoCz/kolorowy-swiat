import { H2, Para } from '@/components/typography'
import { fetchTestimonialsData } from '@/sanity/sanity.queries'
import { TestimonialDataTypes } from '@/sanity/sanity.types'
import Image from 'next/image'
import { FC } from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'

const TestimonialsSeciton: FC = async () => {
    const testimonialData = await fetchTestimonialsData()

    return (
        <section className="mx-auto mb-12 max-w-screen-2xl px-4 py-16">
            <H2 classes="text-center mb-6">Opinie klientów</H2>
            <div className="flex flex-col gap-24 lg:flex-row">
                <TestimonialBlock data={testimonialData[0]} />
                <TestimonialBlock data={testimonialData[1]} />
            </div>
        </section>
    )
}
export default TestimonialsSeciton

interface Props {
    data: TestimonialDataTypes
}

const TestimonialBlock: FC<Props> = ({ data }) => {
    const { image, testimonial } = data

    return (
        <div className="relative flex gap-6 rounded-lg bg-primary/50 p-4">
            <div>
                <RiDoubleQuotesR className="mb-12 size-12" />
                <div className="avatar absolute bottom-0 left-0">
                    <div className="w-16 rounded-md">
                        <Image
                            src={image.url}
                            alt="avatar image"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </div>
            <Para classes="py-3">{testimonial[0].children[0].text}</Para>
        </div>
    )
}
