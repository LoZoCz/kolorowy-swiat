import Main from '@/components/main'
import { H1 } from '@/components/typography'

export default function Contact() {
    return (
        <Main>
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="grid place-items-center"
            >
                <H1>Contact Page</H1>
                <button className="btn btn-primary">Hello</button>
            </section>
        </Main>
    )
}
