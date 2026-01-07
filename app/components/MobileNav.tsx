'use client'

import Image from "next/image"
import { useState } from "react"
import NavItems from "./NavItems"

export default function MobileNav() {
    const [openNav, setOpenNav] = useState(false)

    return (
        <section>
            <div className='flex justify-between items-center px-2 sm:hidden'>
                <Image src='/logo' alt='website logo' width={50} height={50} className='border-2 border-black' ></Image>
                <button
                    onClick={() => {
                        setOpenNav(prev => !prev)
                    }} className='h-10 p-1 border-2 flex flex-col gap-1 cursor-pointer hover:bg-[#434141] hover:border-[#0e0e0e66] '>
                    <div className='bg-black block h-2 w-8'></div>
                    <div className='bg-black block h-2 w-8 '></div>
                    <div className='bg-black block h-2 w-8 '></div>
                </button>
            </div>
            {openNav && (
                <ul className='flex flex-col gap-2 border-2 sm:hidden'>
                    <NavItems title='Home' path='/home' />
                    <NavItems title='About' path='/about' />
                    <NavItems title='Services' path='/service' />
                    <NavItems title='Contact' path='/contact' />
                    <NavItems title='Skill' path='/skills' />
                    <NavItems title='Projects' path='/projects' />
                    <NavItems title='Testimonials' path='/testimonials' />
                </ul>
            )
            }
        </section>
    )
}
