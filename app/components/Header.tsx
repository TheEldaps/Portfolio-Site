import MobileNav from "./MobileNav"
import DesktopNav from './DesktopNav'

export default function Header() {
    return (
        <header className='border-2 border-black'>
            <nav className='max-w-300 mx-auto'>
                <MobileNav />
                <DesktopNav />
            </nav>
        </header>
    )
}
