const ContactSection = () => {
    return (
        <footer className="flex flex-col md:flex-row items-start justify-evenly gap-4 bg-amber-200 p-4">
            <div className="flex-1 grid place-items-start gap-4 h-full">
                <div className="grid gap-2">
                    <h1 className="text-6xl font-bold underline">feel free to contact us any time</h1>
                    <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, a.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold">contact us on your inquires</p>
                    <ul className="flex flex-col items-start gap-1">
                        <li className="text-lg font-semibold">+255 764 811 412</li>
                        <li className="text-lg font-semibold">test@mail.com</li>
                        <li className="text-lg font-semibold">p.o.box dar es salaam</li>
                        <li className="text-lg font-semibold">passion28.vercel.app</li>
                    </ul>
                </div>
            </div>

            <div className="flex-1">
                <img
                    src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="size-full rounded-lg object-cover"
                />
            </div>
        </footer>
    )
}

export default ContactSection
