import Link from "next/link"

export default function NavItems({ path, title }: { path: string, title: string }) {
    return (
        <li className=' border-2 h-fit'>
            <Link className='border-2 border-black px-2 py-1' href={path}>{title}</Link>
        </li>
    )
}
