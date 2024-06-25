import Main from '@/components/main'
import { H1 } from '@/components/typography'

export default function BlogPage() {
    return (
        <Main>
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="grid place-items-center"
            >
                <H1>Blog Page</H1>
            </section>
        </Main>
    )
}
