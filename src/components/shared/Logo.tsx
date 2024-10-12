const Logo = () => {
    return (
        <a
            href='/'
            className="flex items-center gap-2 text-xl font-bold text-primary"
        >
            <img
                src="./logo.svg"
                alt="logo"
                className="h-8 w-auto"
            />
        </a>
    )
}

export default Logo
