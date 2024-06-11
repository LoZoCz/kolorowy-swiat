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
                    'input input-bordered input-primary bg-base-100/75',
                    classes
                )}
            />
        </label>
    )
}

import { IoCheckmarkOutline } from 'react-icons/io5'
import { FaRegCircleXmark } from 'react-icons/fa6'
import { Slide, toast } from 'react-toastify'

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
        autoClose: 20000000,
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
