import Link from "next/link"

export default function NavItems({ path, title }: { path: string, title: string }) {
    return (
        <li className=' hover:bg-[yellow] h-fit'>
            <Link className='md:border-2 border-black block px-2 py-1' href={path}>{title}</Link>
        </li>
    )
}
