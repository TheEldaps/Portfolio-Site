import ProjectCard from "./ProjectCard"
import ProjectImage from "../../public/CSSLogo.png"
import SectionHeader from "./SectionHeader"
import SectionDescription from "./SectionDescription"


export default function Projects() {
    return (
        <section className='min-h-screen mt-30 pb-20 '>

            <SectionHeader title='Portfolio Showcase' />
            <SectionDescription description='A curated collection of projects demonstrating my expertise in building modern, vidually appealing web applications' />

            <section className='flex flex-col gap-10'>
                <ProjectCard image={ProjectImage} title='Game Board' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' github='github.com' />

                <ProjectCard image={ProjectImage} title='Game Board' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' github='github.com' />

                <ProjectCard image={ProjectImage} title='Game Board' description='project designed a nice website where online gaming can be layed, select from a list of games based on your interest and enjoy your time' livelink='github.com' github='github.com' />
            </section>
        </section>
    )
}
