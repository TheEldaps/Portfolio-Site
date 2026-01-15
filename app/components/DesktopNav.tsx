import Image from "next/image"
import NavItems from "./NavItems"
import Link from "next/link"

export default function DesktopNav() {
    return (
        <div className='px-2 hidden sm:flex justify-between items-center '>
            {/* <Image src='/logo' alt='website logo' width={80} height={80} className='border-2 border-black' /> */}
            <h2 className='font-bold cursor-pointer px-4 py-2'><Link href='#home'>PORTFOLIO</Link></h2>

            <ul className='flex justify-evenly items-center gap-5'>
                <NavItems title='Home' path='#home' />
                <NavItems title='About' path='#about-me' />
                <NavItems title='Contact' path='#contact-me' />
                <NavItems title='Skill' path='#skills' />
                <NavItems title='Projects' path='#projects' />

            </ul>

        </div>
    )
}
