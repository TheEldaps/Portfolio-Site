import Image from "next/image"

export default function MobileNav() {
    return (
        <div className='flex justify-between px-2'>
            <Image src='/logo' alt='website logo' width={200} height={200} ></Image>
            <div className='border-2 flex-col justify-evenly gap-0.5'>
                <span className='bg-black h-1 w-5'></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
