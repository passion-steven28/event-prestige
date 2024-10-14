import { Link } from "react-router-dom"
import Logo from "./Logo"

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/project' },
]

const Navigation = () => {
    return (
        <div className="flex items-center justify-start gap-6 py-6 px-6 sticky top-0 z-50 shadow-sm backdrop-blur-xl bg-transparent">
            <Logo />
            <nav className="flex items-center gap-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        className="text-xl font-bold text-primary hover:underline"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Navigation
