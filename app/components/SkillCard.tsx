import Image from "next/image"
import { StaticImageData } from "next/image"

export default function SkillCard({ skill, image }: { skill: string, image: StaticImageData }) {
    return (
        <div className='h-[22vh] w-[40vw] max-w-60 max-h-40 py-2 bg-[#111827cc] backdrop-blur- border border-[#ffffff24] rounded-2xl shadow-lg '>

            <Image src={image} width={400} height={400} alt='Skill logo' className='w-[50%] h-auto block  mx-auto' />
            <h4 className='text-center mt-2'>{skill}</h4>
        </div>
    )
}
