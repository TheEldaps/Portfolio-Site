'use client'

import Lottie from "lottie-react"
import RobotSaysHi from '../../public/Robot Says Hi.json'

export default function Hero() {
    return (
        <section className='pt-30 pb-20 border-b  flex flex-col items-center justify-center px-5'>

            <h1 className='sm:w-[60vw]  text-[#f8fafc] text-4xl md:text-7xl lg:text-8xl text-center font-bold mb-5 ' >Hi, I'm James Oluwatobiloba  </h1>
            <h2 className='text-[#22D3EE] md:text-4xl text-[20px] font-bold mb-2 text-center '>A Frontend Developer & UI Enthusiast</h2>
            <p className='text-center mb-5 text-[#94a3b8] font-[spectral] text-[18px] '>I craft modern responsive web apps with clean UI </p>
            <div className=' flex gap-3 justify-between md:w-[35%] max-w-100'>
                <button className='bg-[#4f46e5]  rounded-md text-sm font-[DMSans]  px-4 py-1 cursor-pointer hover:bg-[indigo]'>View My Work</button>
                {/* <button className='bg-[purple] border rounded-md text-[white] px-2 py-1'>Download CV</button> */}
                <button className='bg-[#6366f1]  rounded-md text-[white] font-[DMSans] px-2 py-1 cursor-pointer hover:bg-[indigo]'>Contact Me
                </button>
            </div>

            <Lottie animationData={RobotSaysHi} loop={true} className=' h-auto ' />

        </section>
    )
}