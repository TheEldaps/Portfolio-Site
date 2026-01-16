import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import Lottie from "lottie-react"



export default function ProjectCard(
    { image, ComingSoon, title, description, livelink, github }:
        {
            image: any, ComingSoon?: boolean, title: string, description: string, livelink: string, github: string
        }) {
    return (
        <div className='project-card w-[80%] max-w-100 md:min-h-150 md:h-fit mx-auto px-5 py-5 bg-[#111827] text-[#94a3b8] font-[spectral] border-2 border-[#1f2933] '>
            <div className='flex items-center min-h-100 border mb-5'>
                {
                    ComingSoon ?
                        (<Lottie animationData={image} loop={true} className='hero-lottie h-auto ' />)
                        :
                        (<Image src={image} width={600} height={400} alt='Project image' className='block mx-auto  w-full' />)
                }
            </div>
            <div className='text-[#F8FAFC] '>
                <h3 className=' mb-2 text-[24px] font-[DMSerif] '>{title}</h3>
                <p className='text-[16px] md:min-h-30 '>{description}</p>
                <div className='flex justify-between pt-5'>

                    <button className='bg-[#4e46e5] font-[DMSans] rounded-md text-[12px] md:text-[15px] px-3 sm:px-5 py-1 cursor-pointer hover:bg-[#4e46e5d4]'><Link href={livelink}>Live Demo </Link></button>

                    <button className='font-[DMSans] rounded-md border-[#168b9d] border  text-[12px] md:text-[15px] px-3 sm:px-5 py-1 cursor-pointer hover:bg-[#242d43]'><Link href={livelink}>Github</Link></button>


                </div>
            </div>
        </div>
    )
}
