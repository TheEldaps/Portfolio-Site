'use client'

import Lottie from "lottie-react"

export default function Badge({ title, animation }: { title: string, animation: unknown }) {
    return (
        <article className='flex flex-col md:flex-row items-center border rounded-lg mx-2 px-2'>
            <Lottie animationData={animation} loop={true} className='md:w-[30%] max-w-25' />
            <p>3 years experience</p>
        </article>
    )
}
