import SkillCard from "./SkillCard"
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




export default function Skills() {
    return (
        <section className='px-5 mt-20'>
            <h2 className='text-[#F8FAC]  text-3xl mb-2'>My Skills</h2>

            <p className='text-[#94a3b8] mb-10'>As Frontend developer, I use modern tools and technologies to build fast, responsive and visually appealing web applications</p>

            <div className='flex flex-wrap gap-[5%] gap-y-12.5'>
                <SkillCard skill='HTML' image={HTMLLogo} />
                <SkillCard skill='CSS' image={CSSLogo} />
                <SkillCard skill='Javascript' image={JavascriptLogo} />
                <SkillCard skill='React' image={ReactLogo} />
                <SkillCard skill='Tailwind' image={TailwindLogo} />
                <SkillCard skill='Next' image={NextLogo} />
                <SkillCard skill='React Router' image={ReactRouterLogo} />
                {/* <SkillCard skill='Github' image={ GithubLogo} /> */}
                <SkillCard skill='Nodejs' image={NodeLogo} />
                {/* <SkillCard skill='Material UI' image={ MaterialLogo} /> */}
                <SkillCard skill='Zod' image={ZodLogo} />
                <SkillCard skill='React Hook Form' image={ReactFormLogo} />
                <SkillCard skill='Gsap' image={GsapLogo} />
                <SkillCard skill='Figma' image={FigmaLogo} />
            </div>
        </section>
    )
}
