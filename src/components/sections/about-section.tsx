const images = [
    '/images/IMG-20241014-WA0021.jpg',
    '/images/IMG-20241014-WA0028.jpg',
    '/images/IMG-20241014-WA0026.jpg',
    '/images/IMG-20241014-WA0024.jpg',
]

const AboutSection = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-10 py-20 px-6 text-center">
            <h1 className="text-6xl font-bold text-primary">
                About Us
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
                <p className="text-xl w-full text-left">
                    Events Prestige Ltd is a Tanzanian-owned
                    company specializing in providing
                    professional, corporate and social event
                    management services.
                    Our core competency lies in the planning and
                    execution of corporate, professional, and
                    social events.
                    Our exceptional team of planners and event
                    professionals has solidified our reputation as
                    the best provider of innovative concepts and
                    consistently successful outcomes within the
                    industry.
                    We pride ourselves on our flexible, responsive,
                    and highly creative approach to event
                    management. We consistently seek innovative
                    solutions that go beyond the conventional,
                    ensuring our clients benefit from client
                    event execution and cost-effective strategies.
                    At Events Prestige Ltd., our primary focus is on
                    delivering exceptional quality and timely
                    results to our clients.
                </p>
                <div className="grid md:grid-cols-2 gap-4 items-center w-full">
                        {images.map((image, index) => (
                            <div className="relative h-30" key={index}>
                                <img
                                    src={image}
                                    className="size-full rounded-lg object-cover"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default AboutSection
