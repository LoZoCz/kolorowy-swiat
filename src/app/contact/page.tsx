'use client'

import { Input, toastNoti } from '@/components/formElements'
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
                className="flex max-w-screen-2xl flex-col justify-center gap-8 pb-6 "
            >
                <div className="space-y-4">
                    <H1 classes="text-center">Zamów rękodzieło na miarę</H1>
                    <Para classes="text-center max-w-screen-md">
                        Zamów moje swietne produkty lub skontatkuj sie ze mna
                        zadając mi pytanie odnosnie moich dził i rzeczy które
                        robię.
                    </Para>
                </div>
                <form onSubmit={submitForm} className="block space-y-4">
                    <div className="flex justify-between gap-4">
                        <Input placeholder="Mariusz" label="Imię" type="text" />
                        <Input
                            placeholder="Kowalski"
                            label="Nazwisko"
                            type="text"
                        />
                    </div>
                    <div className="flex justify-between gap-4">
                        <Input
                            placeholder="m.kowal12@mail.com"
                            label="E-mail"
                            type="email"
                        />
                        <Input
                            placeholder="123456789"
                            label="Numer telefonu"
                            type="number"
                            maxLength={9}
                        />
                    </div>
                    <textarea
                        className="textarea textarea-primary w-full text-base"
                        placeholder="Wiadomość..."
                        rows={6}
                    ></textarea>
                    <div className="flex w-full justify-center">
                        <button type="submit" className="btn btn-primary">
                            Wyśij wiadomość
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </section>
        </Main>
    )
}
