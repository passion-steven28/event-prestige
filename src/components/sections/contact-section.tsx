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
                    src="/images/1.jpg"
                    className="size-full rounded-lg object-cover"
                />
            </div>
        </footer>
    )
}

export default ContactSection
