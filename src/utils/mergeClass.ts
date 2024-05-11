import { twMerge } from 'tailwind-merge'

const mergeClass = (init: string, add: string | undefined) => {
    return twMerge(init, add)
}

export default mergeClass
