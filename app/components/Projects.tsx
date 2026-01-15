import ProjectCard from "./ProjectCard"
import ProjectImage from "../../public/CSSLogo.png"
import SectionHeader from "./SectionHeader"
import SectionDescription from "./SectionDescription"


export default function Projects() {
    return (
        <section id='projects' className='  pt-10 pb-20 lg:pb-80 px-5 md:px-10 lg:px-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0)_38%)]'>

            <SectionHeader title='Portfolio Showcase' />
            <SectionDescription description='A curated collection of projects demonstrating my expertise in building modern, vidually appealing web applications' />

            <section className='flex flex-col md:flex-row flex-wrap gap-10 pt-10 '>
                <ProjectCard image={ProjectImage} title='Game Board' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' github='github.com' />

                <ProjectCard image={ProjectImage} title='Game Board' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' github='github.com' />

                <ProjectCard image={ProjectImage} title='Game Board' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' github='github.com' />

                <ProjectCard image={ProjectImage} title='Game Board' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' github='github.com' />

                <ProjectCard image={ProjectImage} title='Game Board' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' github='github.com' />

                <ProjectCard image={ProjectImage} title='Game Board' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' github='github.com' />
            </section>
        </section>
    )
}
