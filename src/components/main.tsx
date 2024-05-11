import mergeClass from '@/utils/mergeClass'
import { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
    classes?: string
}

const Main: FC<Props> = ({ children, classes }) => {
    return (
        <main
            className={mergeClass(
                'flex flex-col items-center justify-center gap-8',
                classes
            )}
        >
            {children}
        </main>
    )
}

export default Main
