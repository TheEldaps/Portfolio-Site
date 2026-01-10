import Image from "next/image"
import { StaticImageData } from "next/image"

export default function SkillCard({ skill, image }: { skill: string, image: StaticImageData }) {
    return (
        <div className='flex flex-col justify-center min-h-37.5 w-[40vw] max-w-60 max-h-50 min-w-40  py-2 px-2 bg-[#111827cc] backdrop-blur-lg border border-[#ffffff24] rounded-2xl shadow-lg '>

            <Image src={image} width={400} height={400} alt='Skill logo' className='w-[50%] h-auto block  mx-auto' />
            <h4 className='text-center text-[#94a3b8] mt-2'>{skill}</h4>
        </div>
    )
}
