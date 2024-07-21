import { FC } from 'react'
import mergeClass from '@/utils/mergeClass'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    placeholder: string
    classes?: string
}

export const Input: FC<InputProps> = ({
    label,
    placeholder,
    classes,
    ...props
}) => {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input
                {...props}
                placeholder={placeholder}
                className={mergeClass(
                    'input input-bordered input-primary w-full bg-base-100/75',
                    classes
                )}
            />
        </label>
    )
}

import { IoCheckmarkOutline } from 'react-icons/io5'
import { FaRegCircleXmark } from 'react-icons/fa6'
import { Slide, toast } from 'react-toastify'
import { PiTiktokLogoLight } from 'react-icons/pi'
import { AiOutlineFacebook } from 'react-icons/ai'
import { Para } from './typography'

interface ToastNotiProps {
    message: string
    type: 'success' | 'error'
}

export const toastNoti: FC<ToastNotiProps> = ({ message, type }) => {
    const toastVars = {
        success: {
            class: 'toast-success !text-success-content !bg-success/75 border border-success',
            icon: <IoCheckmarkOutline className="size-6" />,
        },
        error: {
            class: 'toast-error !text-error-content !bg-error/90 border border-error text-base-100',
            icon: <FaRegCircleXmark className="size-6" />,
        },
    }

    return toast(message, {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
        className: toastVars[type].class,
        icon: toastVars[type].icon,
    })
}

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string
    classes?: string
}

export const TextArea: FC<TextAreaProps> = ({
    placeholder,
    classes,
    ...props
}) => {
    return (
        <textarea
            {...props}
            className={mergeClass(
                'textarea textarea-primary w-full text-base',
                classes
            )}
            placeholder={placeholder}
            rows={6}
        ></textarea>
    )
}

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    formFunction: (e: React.FormEvent<HTMLFormElement>) => void
}

export const ContactForm: FC<FormProps> = ({ formFunction, ...props }) => {
    return (
        <form
            {...props}
            onSubmit={formFunction}
            className="relative mx-auto block max-w-screen-lg space-y-4"
        >
            <div className="flex justify-between gap-4">
                <Input
                    placeholder="Mariusz"
                    label="Imię"
                    type="text"
                    disabled
                />
                <Input
                    placeholder="Kowalski"
                    label="Nazwisko"
                    type="text"
                    disabled
                />
            </div>
            <div className="flex justify-between gap-4">
                <Input
                    placeholder="m.kowal12@mail.com"
                    label="E-mail"
                    type="email"
                    disabled
                />
                <Input
                    placeholder="+12 123-456-789"
                    label="Numer telefonu"
                    type="number"
                    maxLength={9}
                    disabled
                />
            </div>
            <TextArea disabled placeholder="Wiadomość..." />
            <div className="flex w-full justify-center">
                <button disabled type="submit" className="btn btn-primary">
                    Wyśij wiadomość
                </button>
            </div>
            <div className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-8 rounded-md bg-primary p-4 text-base-100">
                <Para>Kontakt akutalnie jest możliwy tylko poprzez maila:</Para>
                <a className="text-2xl" href="mailto:anna202020@interia.pl">
                    anna202020@interia.pl
                </a>
                <Para>lub poprzez media społecznościowe</Para>
                <div className="flex gap-4">
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
            </div>
        </form>
    )
}
