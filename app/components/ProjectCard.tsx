import Image, { StaticImageData } from "next/image"
import Link from "next/link"


export default function ProjectCard(
    { image, title, description, livelink, github }:
        { image: StaticImageData, title: string, description: string, livelink: string, github: string }) {
    return (
        <div className='w-[80%] max-w-100 mx-auto px-5 py-5 bg-[#111827] text-[#94a3b8] font-[spectral] border-2 border-[#1f2933] '>
            <div className='min-h-[60%]'>
                <Image src={image} width={600} height={400} alt='Project image' className='block mx-auto  w-[80%]' />
            </div>
            <div className='text-[#F8FAFC]'>
                <h3 className=' mb-2 text-[24px] font-[DMSerif] '>{title}</h3>
                <p className='text-[16px]'>{description}</p>
                <div className='flex justify-between pt-5'>

                    <button className='bg-[#4e46e5] font-[DMSans] rounded-md text-[12px] md:text-[15px] px-3 sm:px-5 py-1 cursor-pointer hover:bg-[#4e46e5d4]'><Link href={livelink}>Live Demo </Link></button>

                    <button className='font-[DMSans] rounded-md border-[#168b9d] border  text-[12px] md:text-[15px] px-3 sm:px-5 py-1 cursor-pointer hover:bg-[#242d43]'><Link href={livelink}>More Details</Link></button>


                </div>
            </div>
        </div>
    )
}
