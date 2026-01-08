import MobileNav from "./MobileNav"
import DesktopNav from './DesktopNav'

export default function Header() {
    return (
        <header className='shadow-black shadow-md py-2 fixed w-full backdrop-blur-sm z-1'>
            <nav className='max-w-300 mx-auto'>
                <MobileNav />
                <DesktopNav />
            </nav>
        </header>
    )
}
