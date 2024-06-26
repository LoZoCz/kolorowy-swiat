'use client'

import { ContactForm, toastNoti } from '@/components/formElements'
import Main from '@/components/main'
import { H1, Para } from '@/components/typography'
import { ToastContainer } from 'react-toastify'

export default function Contact() {
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted')
        toastNoti({ message: 'Form submitted successfully', type: 'success' })
    }

    return (
        <Main>
            <section
                style={{ minHeight: 'calc(100dvh - var(--header-h))' }}
                className="space-y-6 p-4 pt-[3vw]"
            >
                <div className="space-y-4">
                    <H1 classes="text-center">Zamów rękodzieło na miarę</H1>
                    <Para classes="mx-auto text-center max-w-screen-md">
                        Zamów moje swietne produkty lub skontatkuj sie ze mna
                        zadając mi pytanie odnosnie moich dził i rzeczy które
                        robię.
                    </Para>
                </div>
                <ContactForm formFunction={submitForm} />
                <ToastContainer />
            </section>
        </Main>
    )
}
