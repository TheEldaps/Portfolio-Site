'use client'

import { gsap } from "gsap"
import { useEffect } from "react"
import Lottie from "lottie-react"
import RobotSaysHi from '../../public/Robot Says Hi.json'
import Link from "next/link"


export default function Hero() {

    useEffect(() => {
        // Respect reduced motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return
        }

        const tl = gsap.timeline({
            defaults: {
                ease: "expo.out",
                duration: 0.9,
            },
        })

        tl.from(".hero-item", {
            opacity: 0,
            scale: 3,
            stagger: 0.3,
            duration: 0.5,
            ease: "expo.out"
        })
            .from(
                ".hero-lottie",
                {
                    opacity: 0,
                    scale: 1.2,
                    duration: 1
                },
                "-=0.4"
            )

    }, [])



    return (
        <section id='home' className='relative pt-30 pb-20 min-h-screen  flex flex-col items-center justify-center px-5'>

            <h1 className='hero-item sm:w-[60vw]  text-[#f8fafc] text-4xl md:text-7xl lg:text-8xl text-center font-bold mb-5 ' >Hi, I'm James Adeleke  </h1>
            <h2 className='hero-item text-[#22D3EE] md:text-4xl text-[20px] font-bold mb-2 text-center '>A Frontend Developer & UI Enthusiast</h2>
            <p className='hero-item text-center mb-5 text-[#94a3b8] font-[DMSans] text-[14px] '>I craft modern responsive web apps with clean UI </p>
            <div className='hero-item flex gap-3 justify-between md:w-[45%] max-w-100'>
                <button className='bg-[#4f46e5]  rounded-md md:text-lg md:px-6 md:py-2 text-sm font-[Spectral]  px-4 py-1 cursor-pointer hover:bg-[#4e46e5d4]'>View My Work</button>
                {/* <button className='bg-[purple] border rounded-md text-[white] px-2 py-1'>Download CV</button> */}
                <button className='bg-[#4f46e5]  rounded-md  md:text-lg md:px-6 md:py-2 font-[Spectral] px-4 py-1 cursor-pointer hover:bg-[#4e46e5d4]'><Link href='#contact-me'>Contact Me</Link>
                </button>
            </div>

            <Lottie animationData={RobotSaysHi} loop={true} className='hero-lottie h-auto ' />

        </section>
    )
}