import mergeClass from '@/utils/mergeClass'
import { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
    classes?: string
}

const Main: FC<Props> = ({ children, classes }) => {
    return <main className={mergeClass('', classes)}>{children}</main>
}

export default Main
