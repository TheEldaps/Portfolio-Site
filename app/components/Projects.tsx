'use client'
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import ProjectCard from "./ProjectCard"
import ProjectImage from "../../public/CSSLogo.png"
import SectionHeader from "./SectionHeader"
import SectionDescription from "./SectionDescription"
import JadooImg from '../../public/JadooHomepage.png'
import GamePointImg from '../../public/GamePointHomepage.png'
import TechNestImg from '../../public/TechNestHomepage.png'
import TravelEventsImg from '../../public/TravelEventsHomepage.png'
import PortfolioImg from '../../public/PortfolioHomepage.png'


gsap.registerPlugin(ScrollTrigger)

export default function Projects() {

    useEffect(() => {
        const cards = document.querySelectorAll(".project-card");

        cards.forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,           // <-- each card triggers individually
                    start: "top 85%",        // when the top of the card reaches 85% of viewport
                    toggleActions: "play none none none", // only play once
                },
                rotationY: 90,
                opacity: 0,
                transformOrigin: "center center",
                duration: 0.8,
                ease: "back.out(1.5)",
            });
        });
    }, []);

    const LizaCommerce = <div>Liza Mart is coming Soon. Watchout!</div>

    return (
        <section id='projects' className='  pt-10 md:pt-15 pb-20 lg:pb-40 px-5 md:px-10 lg:px-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0)_38%)]'>

            <SectionHeader title='Portfolio Showcase' />
            <SectionDescription description='A curated collection of projects demonstrating my expertise in building modern, vidually appealing web applications' />

            <section className='projects-container flex flex-col md:flex-row flex-wrap gap-10 md:gap-20 pt-10 '>
                <ProjectCard image={TechNestImg} title='TechNest' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='https://technest-jobs.vercel.app/' github='https://github.com/TheEldaps/Job-Board' />

                <ProjectCard image={GamePointImg} title='Game Point' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='https://game-point-chi.vercel.app/' github='https://github.com/TheEldaps/GamePoint' />

                <ProjectCard image={TravelEventsImg} title='Travel Events' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='https://travel-events-chi.vercel.app/' github='https://github.com/TheEldaps/Travel-Events' />

                <ProjectCard image={JadooImg} title='Jadoo' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='https://jadoo-travels-self.vercel.app/' github='https://github.com/TheEldaps/Jadoo-Travels' />

                <ProjectCard image={PortfolioImg} title='My Portfolio' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='https://portfolio-site-1-rho.vercel.app/' github='https://github.com/TheEldaps/Portfolio-Site' />

                <ProjectCard image={LizaCommerce} title='Liza Commerces' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' github='https://github.com/TheEldaps/Liza-Commerce' />


            </section>
        </section>
    )
}
