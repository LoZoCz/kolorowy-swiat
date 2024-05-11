import { H1 } from '@/components/typography'
import Main from '@/components/main'

export default function About() {
    return (
        <Main>
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="grid place-items-center"
            >
                <H1>About Page</H1>
                <button className="btn btn-primary">Hello</button>
            </section>
        </Main>
    )
}

//!! Zrob ta strone wkoncu
