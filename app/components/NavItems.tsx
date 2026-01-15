import Link from "next/link"

export default function NavItems({ path, title }: { path: string, title: string }) {
    return (
        <li className=' hover:bg-[#4e46e571] h-fit'>
            <Link className=' border-black block px-2 py-1 font-[DMSans]' href={path}>{title}</Link>
        </li>
    )
}
