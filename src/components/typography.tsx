import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: string
    classes?: string
}

export const H1: FC<Props> = ({ children, classes }) => {
    return (
        <h1
            className={twMerge(
                'font-libre text-4xl font-bold md:text-5xl',
                classes
            )}
        >
            {children}
        </h1>
    )
}

export const H2: FC<Props> = ({ children, classes }) => {
    return (
        <h2
            className={twMerge(
                'font-libre text-3xl font-bold md:text-4xl',
                classes
            )}
        >
            {children}
        </h2>
    )
}

export const H3: FC<Props> = ({ children, classes }) => {
    return (
        <h4
            className={twMerge(
                'font-libre text-2xl font-bold md:text-3xl',
                classes
            )}
        >
            {children}
        </h4>
    )
}

export const H4: FC<Props> = ({ children, classes }) => {
    return (
        <h4
            className={twMerge(
                'font-inter text-xl font-bold md:text-2xl',
                classes
            )}
        >
            {children}
        </h4>
    )
}

export const Para: FC<Props> = ({ children, classes }) => {
    return (
        <p className={twMerge('font-inter text-base md:text-lg', classes)}>
            {children}
        </p>
    )
}

export const Quote: FC<Props> = ({ children, classes }) => {
    return (
        <p className={twMerge('font-inter text-base md:text-lg', classes)}>
            {children}
        </p>
    )
}
