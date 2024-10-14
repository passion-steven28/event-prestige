const ContactSection = () => {
    return (
        <footer className="flex flex-col md:flex-row items-start justify-evenly gap-4 bg-amber-200 p-4">
            <div className="flex-1 grid place-items-start gap-4 h-full">
                <div className="grid gap-2">
                    <h1 className="text-6xl font-bold underline">feel free to contact us any time</h1>
                    <p className="text-xl">You may also visit our office
                        and we will be more than happy.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold">contact us on your inquires</p>
                    <ul className="flex flex-col items-start gap-1">
                        <li className="text-lg font-semibold">
                            +255 764 811 412,
                            +255 713 077 788,
                            +255 768 774 777
                        </li>
                        <li className="text-lg font-semibold">josephat.focus@gmail.com</li>
                        <li className="text-lg font-semibold">P.O. Box 33398 , Dar es Salaam, Tanzania</li>
                        <li className="text-lg font-semibold">http://www.epltd.co.tz/</li>
                    </ul>
                </div>
            </div>

            <div className="flex-1">
                <img
                    src='/images/IMG-20241014-WA0022.jpg'
                    className="size-full rounded-lg object-cover"
                />
            </div>
        </footer>
    )
}

export default ContactSection
