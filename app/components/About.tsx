'use client'

import Image from "next/image"
import PortfolioImage from '../../public/PortfolioImage 1.png'
import SectionHeader from "./SectionHeader"
import Lottie from "lottie-react"
import TickMark from '../../public/Tick Mark.json'
import TrophyAnimation from '../../public/Trophy animation.json'
import CongratulationsBadge from '../../public/congratulation badge animation.json'
import Badge from "./Badge"

export default function About() {
    return (
        <section className=' pb-10 px-5 md:px-10 lg:px-20 mt-5'>
            <SectionHeader title='About Me' />
            <div className='flex flex-col lg:flex-row'>
                <div className='flex min-w-[50%] border border-black items-center '>
                    <Image src={PortfolioImage} width={800} height={800} alt='My picture' className=' rounded h-auto block mx-auto md:max-w-125 ' />
                </div>
                <div className='mt-5 font-[spectral]'>

                    <div className='text-[#94a3b8] text-[22px]'>
                        <p className='mb-2'> I’m a passionate Frontend Developer who loves turning ideas into beautiful, responsive, and user-friendly web experiences. My journey into tech started with a deep curiosity about how websites work, and over time, that curiosity grew into a strong commitment to mastering modern web development.</p>
                        <br />
                        <p className='mb-2'> I began by learning the fundamentals of HTML, CSS, and JavaScript, and gradually moved into building more complex interfaces using React and modern tooling like Vite, Tailwind CSS, and Git. Along the way, I discovered that what excites me most is not just writing code, but crafting clean, intuitive, and visually appealing user interfaces that people actually enjoy using.</p>
                        <br />
                        <p className='mb-2'>I’ve had the opportunity to gain real-world experience during my internship at Codemania (October 2024 – March 2025), where I worked on real projects, collaborated with other developers, and learned how professional software is built, structured, and maintained. That experience helped me grow not just technically, but also in how I think about problem-solving, teamwork, and building scalable interfaces.</p>
                        <br />
                        <p className='mb-2'>Over time, I’ve developed a strong focus on frontend engineering with React, and I’m constantly improving my skills in component-based architecture, responsive design, animations, performance optimization, and clean UI systems. I enjoy working with tools like Tailwind CSS, GSAP, and modern UI libraries to create interfaces that feel smooth, fast, and polished.</p>
                        <br />
                        <p className='mb-2'>Beyond just building websites, I’m also interested in how products are designed, how users interact with interfaces, and how good UI/UX can make complex things feel simple. That’s why I pay attention to details like spacing, typography, animations, and overall visual hierarchy in my projects.</p>
                        <br />
                        <p className='mb-2'>My long-term goal is to grow into a world-class frontend engineer and eventually expand into full-stack and more advanced product development. For now, I’m focused on sharpening my skills, building impressive projects, and working with teams or companies that value quality, creativity, and good engineering practices.</p>
                        <br />
                        <p> When I’m not coding, I enjoy learning about trading systems, exploring new technologies, and continuously challenging myself to get better at what I do.</p>

                    </div>
                </div>


            </div >
            <div className='flex flex-col gap-10 md:flex-row md:flex-wrap items-center justify-between text-[#94a3b8] font-[spectral] text-[30px] mt-20'>
                <Badge animation={TickMark} title='3 years experience' />


                <Badge animation={TrophyAnimation} title='6 Projects Completed' />


                <Badge animation={CongratulationsBadge} title='100% Client Satisfaction' />
            </div>


        </section >
    )
}
