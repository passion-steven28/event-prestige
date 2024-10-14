import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link
            to='/'
            className="flex items-center gap-2 text-xl font-bold text-primary"
        >
            <img
                src="/images/IMG-20241014-WA0038.jpg"
                alt="logo"
                className="h-8 w-auto"
            />
        </Link>
    )
}

export default Logo
