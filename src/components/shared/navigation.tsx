import { Link } from "react-router-dom"
import Logo from "./Logo"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Menu } from "lucide-react"

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/project' },
    { name: 'services', href: '/services' },
    { name: 'Organization', href: '/organization' },
]

const Navigation = () => {
    return (
        <div className="flex items-center justify-between md:justify-start gap-6 py-6 px-6 sticky top-0 z-50 shadow-sm backdrop-blur-xl bg-transparent">
            <Logo />
            <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        className="text-xs font-bold text-primary hover:underline"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            <div className="flex md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu className="h-6 w-6 text-primary" />
                    </SheetTrigger>
                    <SheetContent>
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-xs font-bold text-primary hover:underline"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Navigation
