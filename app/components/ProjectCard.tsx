import Image, { StaticImageData } from "next/image"

export default function ProjectCard(
    { image, title, description, livelink, github }:
        { image: StaticImageData, title: string, description: string, livelink: string, github: string }) {
    return (
        <section className='bg-[#111827] border-2 border-[#1f2933]'>

            <Image src={image} width={600} height={400} alt='Project image' className='block' />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='flex justify-between'>
                    <a href={livelink}>Live Demo</a>
                    <a href="/details" className='px-3 py-2 bg'>Details</a>
                </div>
            </div>
        </section>
    )
}
