import Link from "next/link"

export default function NavItems({ path, title }: { path: string, title: string }) {
    return (
        <li className=' hover:bg-[#00041d] h-fit'>
            <Link className=' border-black block px-2 py-1' href={path}>{title}</Link>
        </li>
    )
}
