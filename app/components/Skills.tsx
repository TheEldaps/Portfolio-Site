'use client'
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import SkillCard from "./SkillCard"
import SectionHeader from "./SectionHeader"
import SectionDescription from "./SectionDescription"

import GsapLogo from '../../public/Gsaplogo.png'
import CSSLogo from '../../public/CSSLogo.png'
import FigmaLogo from '../../public/FigmaLogo.png'
import HTMLLogo from '../../public/HTMLlogo.png'
import JavascriptLogo from '../../public/JavascriptLogo.png'
import NextLogo from '../../public/NextLogo.png'
import NodeLogo from '../../public/NodeLogo.png'
import ReactLogo from '../../public/ReactLogo.png'
import ReactFormLogo from '../../public/ReactFormLogo.png'
import ReactRouterLogo from '../../public/ReactRouterLogo.png'
import TailwindLogo from '../../public/TailwindCSSLogo.png'
import ZodLogo from '../../public/ZodLogo.png'
import MaterialLogo from '../../public/MaterialLogo.png'
import GithubLogo from '../../public/GithubLogo.png'
import TypescriptLogo from '../../public/TypescriptLogo.png'
import ViteLogo from '../../public/ViteLogo.png'



gsap.registerPlugin(ScrollTrigger)



export default function Skills() {
    useEffect(() => {
        const cards = document.querySelectorAll(".skill-card");

        cards.forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                scale: 0,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)",
            });
        });
    }, []);

    return (
        <section id='skills' className='px-5 md:pt-15 md:pb-15 lg:pb-40 md:px-10 lg:px-20 pt-10 pb-20  bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0)_38%)]'>
            <SectionHeader title='My Skills' />

            <SectionDescription description='As Frontend developer, I use modern tools and technologies to build fast, responsive and visually appealing web applications' />

            <div className='flex flex-wrap justify-evenly gap-[5%] gap-y-12.5 mt-10'>
                <SkillCard skill='HTML' image={HTMLLogo} />
                <SkillCard skill='CSS' image={CSSLogo} />
                <SkillCard skill='Javascript' image={JavascriptLogo} />
                <SkillCard skill='React' image={ReactLogo} />
                <SkillCard skill='Typescript' image={TypescriptLogo} />
                <SkillCard skill='Tailwind' image={TailwindLogo} />
                <SkillCard skill='Next' image={NextLogo} />
                <SkillCard skill='React Router' image={ReactRouterLogo} />
                <SkillCard skill='Github' image={GithubLogo} />
                <SkillCard skill='Nodejs' image={NodeLogo} />
                <SkillCard skill='Material UI' image={MaterialLogo} />
                <SkillCard skill='Zod' image={ZodLogo} />
                <SkillCard skill='React Hook Form' image={ReactFormLogo} />
                <SkillCard skill='Gsap' image={GsapLogo} />
                <SkillCard skill='Figma' image={FigmaLogo} />
                <SkillCard skill='Vite' image={ViteLogo} />

            </div>
        </section>
    )
}
