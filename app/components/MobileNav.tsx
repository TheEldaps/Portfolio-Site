'use client'

import Image from "next/image"
import { useState } from "react"
import NavItems from "./NavItems"

export default function MobileNav() {
    const [openNav, setOpenNav] = useState(false)

    return (
        <section>
            <div className='flex justify-between items-center px-2 sm:hidden'>
                {/* <Image src='/logo' alt='website logo' width={50} height={50} className='border-2 border-black' ></Image> */}
                <h2 className='font-bold'>PORTFOLIO</h2>
                <button
                    onClick={() => {
                        setOpenNav(prev => !prev)
                    }}
                    className=' p-1  flex flex-col gap-1 text-[1.5rem] cursor-pointer hover:bg-[#434141] hover:border-[#0e0e0e66] '>{
                        openNav ?
                            ('✕') :
                            (
                                <>
                                    <div className='bg-white block h-1.5 w-8'></div>
                                    <div className='bg-white block h-1.5 w-8 '></div>
                                    <div className='bg-white block h-1.5 w-8 '></div>
                                </>
                            )
                    }
                </button>
            </div>
            {openNav && (
                <ul className='flex flex-col gap-2  sm:hidden border-white border-t'>
                    <NavItems title='Home' path='#home' />
                    <NavItems title='About' path='#about-me' />
                    <NavItems title='Contact' path='#contact-me' />
                    <NavItems title='Skill' path='#skills' />
                    <NavItems title='Projects' path='#projects' />

                </ul>
            )
            }
        </section>
    )
}
