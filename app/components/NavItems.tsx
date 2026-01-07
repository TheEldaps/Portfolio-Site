import Link from "next/link"

export default function NavItems({ path, title }: { path: string, title: string }) {
    return (
        <li><Link href={path}>{title}</Link></li>
    )
}
