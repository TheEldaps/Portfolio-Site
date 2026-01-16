'use client'
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import ComingSoon from '../../public/ComingSoon.json'

import ProjectCard from "./ProjectCard"
import SectionHeader from "./SectionHeader"
import SectionDescription from "./SectionDescription"
import JadooImg from '../../public/jadoo-homepage.png'
import GamePointImg from '../../public/gamepoint-homepage.png'
import TechNestImg from '../../public/technest-homepage.png'
import TravelEventsImg from '../../public/travelevents-homepage.png'
import PortfolioImg from '../../public/portfolio-homepage.png'



gsap.registerPlugin(ScrollTrigger)

export default function Projects() {

    useEffect(() => {
        const cards = document.querySelectorAll(".project-card");

        cards.forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                rotationY: 90,
                opacity: 0,
                transformOrigin: "center center",
                duration: 0.8,
                ease: "back.out(1.5)",
            });
        });
    }, []);



    return (
        <section id='projects' className='  pt-10 md:pt-15 pb-20 lg:pb-40 px-5 md:px-10 lg:px-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0)_38%)]'>

            <SectionHeader title='Portfolio Showcase' />
            <SectionDescription description='A curated collection of projects demonstrating my expertise in building modern, vidually appealing web applications' />

            <section className='projects-container flex flex-col md:flex-row flex-wrap gap-10 md:gap-20 pt-10 '>
                <ProjectCard image={TechNestImg} title='TechNest' description='A fully responsive job board web application built to showcase structured data presentation and clean UI design. It displays job listings with essential details such as job title, location, and salary, emphasizing reusable components, modern layout techniques, and a smooth browsing experience across devices.' livelink='https://technest-jobs.vercel.app/' github='https://github.com/TheEldaps/Job-Board' />

                <ProjectCard image={GamePointImg} title='Game Point' description='A fun game website where users can play browser-based games directly from the page, offering quick entertainment and interactive experiences.' livelink='https://game-point-chi.vercel.app/' github='https://github.com/TheEldaps/GamePoint' />

                <ProjectCard image={TravelEventsImg} title='Travel Events' description='A travel and events showcase website where users can browse vacation highlights, discover special events, and get inspired to plan their next trip' livelink='https://travel-events-chi.vercel.app/' github='https://github.com/TheEldaps/Travel-Events' />

                <ProjectCard image={JadooImg} title='Jadoo' description='A stylish travel landing page that introduces users to featured destinations, travel services, and a simple booking process, all wrapped in an engaging design that encourages exploration and travel planning.' livelink='https://jadoo-travels-chi.vercel.app/' github='https://github.com/TheEldaps/Jadoo-Travels' />

                <ProjectCard image={PortfolioImg} title='My Portfolio' description='A modern personal portfolio website designed to present my projects, skills, and professional journey in a visually appealing and user-friendly way' livelink='https://jamesadeleke.vercel.app/' github='https://github.com/TheEldaps/Portfolio-Site' />

                <ProjectCard image={ComingSoon} title='Liza Commerce' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' ComingSoon={true} github='https://github.com/TheEldaps/Liza-Commerce' />


            </section>
        </section>
    )
}
