'use client'

import Image from "next/image"
import PortfolioImage from '../../public/PortfolioImage 1.png'
import SectionHeader from "./SectionHeader"
import Lottie from "lottie-react"
import TickMark from '../../public/Tick Mark.json'
import TrophyAnimation from '../../public/Trophy animation.json'
import CongratulationsBadge from '../../public/congratulation badge animation.json'
import Badge from "./Badge"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {

    useEffect(() => {
        // Image slide-in
        gsap.from(".about-image", {
            scrollTrigger: {
                trigger: ".about-image",
                start: "top 80%",
            },
            x: -500,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
        })

        // Text paragraphs fade + rise
        gsap.from(".about-text", {
            scrollTrigger: {
                trigger: ".about-text",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            stagger: 1,
            duration: 0.9,
            ease: "expo.out",
        })

        // Badges pop
        gsap.from(".about-badges > *", {
            scrollTrigger: {
                trigger: ".about-badges",
                start: "top 80%",
            },
            scale: 0.8,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "back.out(1.7)", // gives nice bounce
        })
    }, [])

    return (
        <section id='about-me' className='py-5 px-10 md:px-10 lg:px-20 mt-5 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0)_38%)]'>

            {/* Section Header */}
            <SectionHeader title='About Me' />

            {/* Content */}
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-20'>
                {/* Image */}
                <div className='flex min-w-[50%] border-black items-center justify-center about-image'>
                    <Image
                        src={PortfolioImage}
                        width={800}
                        height={800}
                        alt='My picture'
                        className='rounded h-auto block mx-auto md:max-w-125'
                    />
                </div>

                {/* Text */}
                <div className='mt-2 font-[spectral]  text-[#94a3b8] text-[22px] flex flex-col gap-4'>
                    <p className='about-text'> I’m a passionate Frontend Developer who loves turning ideas into beautiful, responsive, and user-friendly web experiences. My journey into tech started with a deep curiosity about how websites work, and over time, that curiosity grew into a strong commitment to mastering modern web development.</p>
                    <p className='about-text'> I began by learning the fundamentals of HTML, CSS, and JavaScript, and gradually moved into building more complex interfaces using React and modern tooling like Vite, Tailwind CSS, and Git. Along the way, I discovered that what excites me most is not just writing code, but crafting clean, intuitive, and visually appealing user interfaces that people actually enjoy using.</p>
                    <p className='about-text'> I’ve had the opportunity to gain real-world experience during my internship at Codemania (October 2024 – March 2025), where I worked on real projects, collaborated with other developers, and learned how professional software is built, structured, and maintained. That experience helped me grow not just technically, but also in how I think about problem-solving, teamwork, and building scalable interfaces.</p>
                    <p className='about-text'> Over time, I’ve developed a strong focus on frontend engineering with React and Next, and I’m constantly improving my skills in component-based architecture, responsive design, animations, performance optimization, and clean UI systems. I enjoy working with tools like Tailwind CSS, vite etc and modern UI libraries to create interfaces that feel smooth, fast, and polished.</p>
                    <p className='about-text'> Beyond just building websites, I’m also interested in how products are designed, how users interact with interfaces, and how good UI/UX can make complex things feel simple. That’s why I pay attention to details like spacing, typography, animations, and overall visual hierarchy in my projects.</p>
                    <p className='about-text'> My long-term goal is to grow into a world-class frontend engineer and eventually expand into full-stack and more advanced product development. For now, I’m focused on sharpening my skills, building impressive projects, and working with teams or companies that value quality, creativity, and good engineering practices.</p>
                    <p className='about-text'> When I’m not coding, I enjoy learning about trading systems, exploring new technologies, and continuously challenging myself to get better at what I do.</p>
                </div>
            </div>

            {/* Badges */}
            <div className='flex flex-col gap-10 md:flex-row md:flex-wrap items-center justify-between text-[#94a3b8] font-[spectral] text-[30px] mt-20 about-badges'>
                <Badge animation={TickMark} title='3 years experience' />
                <Badge animation={TrophyAnimation} title='6 Projects Completed' />
                <Badge animation={CongratulationsBadge} title='100% Client Satisfaction' />
            </div>

        </section>
    )
}
