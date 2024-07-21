'use client'

import { FC, useReducer } from 'react'
import Image from 'next/image'
import { Img } from '@/sanity/sanity.types'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

interface Props {
    images: Img[]
}

interface ActionTypes {
    type: 'next' | 'previous'
}

interface StateType {
    imgIndex: number
    images: Img[]
}

const reducer = (state: StateType, action: ActionTypes): StateType => {
    switch (action.type) {
        case 'previous':
            return {
                ...state,
                imgIndex:
                    state.imgIndex === 0
                        ? state.images.length - 1
                        : state.imgIndex - 1,
            }
        case 'next':
            return {
                ...state,
                imgIndex:
                    state.imgIndex === state.images.length - 1
                        ? 0
                        : state.imgIndex + 1,
            }
        default:
            throw new Error('Invalid action type')
    }
}

const ImageCarousel: FC<Props> = ({ images }) => {
    const [state, dispatch] = useReducer(reducer, { imgIndex: 0, images })

    return (
        <div className="relative space-y-6">
            <Image
                src={state.images[state.imgIndex].url}
                alt="nice image"
                width={600}
                height={400}
                priority
                className="aspect-square h-full w-full flex-1 rounded-md object-cover"
            />
            <button
                onClick={() => dispatch({ type: 'previous' })}
                className="group absolute -left-5 top-1/2 -translate-y-1/2 rounded-full bg-white"
            >
                <IoArrowBack className="size-10 stroke-neutral transition-colors duration-300 group-hover:stroke-primary" />
            </button>
            <button
                onClick={() => dispatch({ type: 'next' })}
                className="group absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-white"
            >
                <IoArrowForward className="size-10 stroke-neutral transition-colors duration-300 group-hover:stroke-primary" />
            </button>
        </div>
    )
}

export default ImageCarousel
