'use client'

import Lottie from "lottie-react"



export default function ContactCard({ title, lottieFile, data }: { title: string, lottieFile: object, data: string }) {
    return (
        <div className='flex border border-[#22304ee1] w-full md:w-[70%]  rounded-lg px-5 py-4 bg-[#111827cc] hover:bg-[#11182787]'>

            <Lottie animationData={lottieFile} loop={true} className='hero-lottie h-auto w-10 ' />

            <div className=" ml-5">
                <h4 className='font-bold'>{title}</h4>
                <p>{data}</p>
            </div>
        </div>
    )
}
