import Image from "next/image"
import PortfolioImage from '../../public/PortfolioImage 1.png'

export default function About() {
    return (
        <section className='flex flex-col md:flex-row pb-10 px-5 mt-5'>
            <h2 className='text-[#F8FAC]  text-3xl mb-2 '>About Me</h2>
            <div>
                <Image src={PortfolioImage} width={800} height={800} alt='My picture' className='border rounded ' />
            </div>
            <div className='mt-5'>

                <p className='text-[#94a3b8]'>
                    the ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronor the ipsum dolor mono chronorthe ipsum dolor monochronorthe ipsum dolor mono chronorthe ipsum dolor mono chronor
                    <br />
                    the ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronorthe ipsum dolor mono chronor

                </p>

                <div className='flex flex-wrap mt-5 gap-3 text-[#94a3b8]'>
                    <article className='border rounded-lg mx-2 px-2'>3 years experience</article>
                    <article className='border rounded-lg mx-2 px-2'>6 Projects Completed</article>
                    <article className='border rounded-lg mx-2 px-2'><span className='text-[pink]'>100%</span> Client Satisfaction</article>
                </div>
            </div>


        </section >
    )
}
