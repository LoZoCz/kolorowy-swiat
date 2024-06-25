import Main from '@/components/main'
import { H1 } from '@/components/typography'

export default function Contact() {
    return (
        <Main>
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="pt-8"
            >
                <H1 classes="text-center">Kontakt ze mną</H1>
                <form action=""></form>
            </section>
        </Main>
    )
}
